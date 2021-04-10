import React, { useEffect } from 'react'
// import SunEditor, { buttonList } from 'suneditor-react'
// import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File
// import ReactHtmlParser from 'react-html-parser'
import Sun_Editor from './Sun_Editor'
import _ from 'lodash'

export default function AddNote({ state, setState, vars }) {
	// let add_note_input = useRef()
	useEffect(() => {
		function handleMouseDown(e) {
			if (e.target.className !== 'main_section_container') {
				// setState.setCurrentFolderMainSection(['notes'])// doesnt look useful
			}
		}

		document.addEventListener('mousedown', handleMouseDown)
		return () => {
			document.removeEventListener('mousedown', handleMouseDown)
		}
	}, [])

	return (
		<div class="add_note_container">
			<input
				class="add_note_input"
				type="text"
				onChange={(e) => setState.setAddNoteInput(e.target.value)}
			/>
			<Sun_Editor state={state} setState={setState} vars={vars} />

			<p
				class="add_button_submit"
				onClick={() => {
					let newFolders = { ...state.folders }
					let newNotes = { ...vars.currentFolder.notes }

					newNotes[state.addNoteInput] = new vars.Note({
						title: state.addNoteInput,
						dateCreated: Date.now(),
						content: state.addNoteContent,
					})
					// console.log(newNotes)
					// console.log(newFolders)

					let newDirectoryChain = [...vars.directoryChain(), 'notes']
					// console.log(newDirectoryChain)
					// console.log(vars.currentFolder)

					_.set(newFolders, newDirectoryChain.join('.'), newNotes)
					// console.log(state.addNoteContent)
					// console.log(newFolders)

					setState.setFolders(newFolders)
					setState.setAddNoteInput('')
					setState.setAddNoteContent('')
					setState.setCurrentFolderMainSection(['notes'])
				}}>
				ADD NOTE
			</p>
		</div>
	)
}
