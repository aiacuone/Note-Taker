import React, { useRef, useEffect } from 'react'
import _ from 'lodash'

export default function RenameNote({ state, setState, vars }) {
	let inputRef = useRef()

	function handleRename() {
		let directory = [...vars.directoryChain(), 'notes']
		let newCurrentNotes = { ...vars.currentFolder.notes }
		let newFolders = { ...state.folders }
		newCurrentNotes[state.input.toLowerCase()] =
			newCurrentNotes[state.currentFolderMainSection[1]]
		newCurrentNotes[state.input.toLowerCase()].title = state.input.toLowerCase()
		delete newCurrentNotes[state.currentFolderMainSection[1]]
		_.set(newFolders, directory.join('.'), newCurrentNotes)
		setState.setFolders(newFolders)
		setState.setCurrentFolderMainSection(['notes'])
		setState.setInput()
	}

	useEffect(() => {
		function handleKeyDown(e) {
			if (e.key == 'Enter') {
				handleRename()
			}
		}

		if (inputRef && inputRef.current && inputRef.current.value) {
			inputRef.current.addEventListener('keydown', handleKeyDown)
		}

		return () => {
			if (inputRef && inputRef.current && inputRef.current.value) {
				inputRef.current.removeEventListener('keydown', handleKeyDown)
			}
		}
	}, [state.input])

	return (
		<div class="current_folder_rename_note_container">
			<input
				class="current_folder_rename_note_input"
				ref={inputRef}
				autoFocus
				placeholder="Title"
				onChange={(e) => setState.setInput(e.target.value)}
				value={state.input}></input>
			<p
				class="current_folder_rename_note_button"
				onClick={() => {
					if (inputRef.current.value) {
						handleRename()
					}
				}}>
				RENAME
			</p>
		</div>
	)
}
