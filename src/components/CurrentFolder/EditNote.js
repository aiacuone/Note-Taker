import React, { useEffect, useRef } from 'react'
import SunEditor, { buttonList } from 'suneditor-react'
import _ from 'lodash'

export default function EditNote({ state, setState, vars }) {
	let selectedNote = state.currentFolderMainSection[1]
	let currentNote = vars.currentFolder.notes[selectedNote]
	let input = state.input
	let inputRef = useRef()

	function handleEdit() {
		let newFolders = { ...state.folders }
		let newNotes = { ...vars.currentFolder.notes }
		let directory = [...vars.directoryChain(), 'notes']
		if (input.toLowerCase() !== selectedNote) {
			newNotes[input.toLowerCase()] = newNotes[selectedNote]
			newNotes[input.toLowerCase()].title = input.toLowerCase()
			delete newNotes[selectedNote]
		}
		newNotes[input.toLowerCase()].content = state.content
		_.set(newFolders, directory.join('.'), newNotes)
		setState.setFolders(newFolders)
		setState.setRenderCurrentFolder(['mainSection', 'header'])
		setState.setCurrentFolderMainSection(['notes'])
		setState.setInput()
	}

	useEffect(() => {
		setState.setContent(currentNote.content)
	}, [])

    function handleExit() {
        setState.setRenderCurrentFolder(['mainSection', 'header'])
        setState.setCurrentFolderMainSection(['notes'])
	}

	return (
		<div class="current_folder_edit_note">
			<p class="current_folder_edit_note_exit" onClick={handleExit}>
				EXIT
			</p>
			<input
				ref={inputRef}
				class="current_folder_edit_note_input"
				onChange={(e) => setState.setInput(e.target.value.toLowerCase())}
				value={state.input.toUpperCase()}
				placeholder="Title"
				type="text"
			/>
			<SunEditor
				height="570px"
				width="340px"
				setContents={state.content}
				autoFocus={true}
				onChange={(content) => setState.setContent(content)}
				setOptions={{
					minHeight: '250px',
					videoHeight: '200px',
					videoWidth: '300px',
					imageWidth: '300px',
					height: '100%',
					buttonList: [
						[
							'fontSize',
							'bold',
							'fontColor',
							'align',
							'list',
							'image',
							'video',
						],
					],
				}}
			/>
			<p class="current_folder_edit_note_edit_button" onClick={handleEdit}>
				EDIT
			</p>
		</div>
	)
}
