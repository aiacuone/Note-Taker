import React, { useEffect, useRef } from 'react'
import _ from 'lodash'

export default function RenameFolder({ state, setState, vars }) {
	let inputRef = useRef()

	useEffect(() => {
		function handleKeyDown(e) {
			if (e.key == 'Enter') {
				let directoryChain = [...vars.directoryChain()]
				let directory = [...vars.directoryChain(), 'folders']
				let newCurrentFolders = { ...vars.currentFolder.folders }
				newCurrentFolders[state.input] =
					newCurrentFolders[state.render[2]]
				newCurrentFolders[state.input].name = state.input
				delete newCurrentFolders[state.render[2]]
				let newFolders = { ...state.folders }
				_.set(newFolders, directory.join('.'), newCurrentFolders)
				setState.setFolders(newFolders)
				setState.setRender(['mainSection'])
				setState.setInput()
			}
		}
		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [state.input, state.currentFolderMainSection])
	return (
		<div>
            <input
                autoFocus
				type="text"
				value={state.input}
				class="current_folder_folder_settings_rename_input"
				ref={inputRef}
                onChange={(e) => setState.setInput(e.target.value)}></input>
		</div>
	)
}
