import React, { useEffect } from 'react'
import _ from 'lodash'

export default function DeleteNote({ state, setState, vars }) {
	let selectedNote = state.renderCurrentFolder[1]

	function handleClick() {
		let directory = [...vars.directoryChain(), 'notes']
		let newCurrentNotes = { ...vars.currentFolder.notes }
		let newFolders = { ...state.folders }
		delete newCurrentNotes[selectedNote.toLowerCase()]
		_.set(newFolders, directory.join('.'), newCurrentNotes)
		setState.setFolders(newFolders)
		setState.setRenderCurrentFolder(['mainSection', 'header'])
		setState.setCurrentFolderMainSection(['notes'])
	}

	useEffect(() => {
		function handleMouseDown(e) {
			if (e.target.className == 'current_page') {
				setState.setRenderCurrentFolder(['mainSection','header'])
			}
			
		}

		document.addEventListener('mousedown', handleMouseDown)

		return () => {
			document.removeEventListener('mousedown', handleMouseDown)
		}
	}, [])

	return (
		<div class="current_folder_delete_note">
			<p class="current_folder_delete_note_p">
				Are you sure you want to Delete?
			</p>
			<div class="current_folder_delete_note_confirm_container">
				{' '}
				<p class="current_folder_delete_note_confirm yes" onClick={handleClick}>
					YES{' '}
				</p>
				<p class="current_folder_delete_note_confirm">/ </p>
				<p
					class="current_folder_delete_note_confirm confirm_no"
					onClick={() => {
						setState.setCurrentFolderMainSection(['notes'])
					}}>
					NO
				</p>
			</div>
		</div>
	)
}
