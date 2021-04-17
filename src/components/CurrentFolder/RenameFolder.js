import React, { useEffect, useRef } from 'react'
import _ from 'lodash'

export default function RenameFolder({ state, setState, vars }) {
	let inputRef = useRef()

	function handleRename(e) {
		if (e.key == 'Enter') {
			let directory = [...vars.directoryChain(), 'folders']
			let newCurrentFolders = { ...vars.currentFolder.folders }
			newCurrentFolders[state.input] = newCurrentFolders[state.render[2]]
			newCurrentFolders[state.input].name = state.input
			delete newCurrentFolders[state.render[2]]
			let newFolders = { ...state.folders }
			_.set(newFolders, directory.join('.'), newCurrentFolders)
			setState.setFolders(newFolders)
			setState.setRender(['mainSection'])
			setState.setInput()
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleRename)

		return () => {
			document.removeEventListener('keydown', handleRename)
		}
	}, [state.input, state.currentFolderMainSection])
	return (
		<div class='current_folder_folder_settings_rename'>
			<h1>RENAME FOLDER</h1>
			<input
				autoFocus
				type="text"
				value={state.input}
				class="current_folder_folder_settings_rename_input"
				ref={inputRef}
				onChange={(e) => setState.setInput(e.target.value)} />
			<p class='current_folder_folder_settings_add'>ADD</p>
		</div>
	)
}
