import React from 'react'
import _ from 'lodash'

export default function DeleteNote({ state, setState, vars }) {
	function handleClick() {
		let directory = [...vars.directoryChain(), 'notes']
		let newCurrentNotes = { ...vars.currentFolder.notes }
		let newFolders = { ...state.folders }
		delete newCurrentNotes[state.currentFolderMainSection[1].toLowerCase()]
		console.log(newCurrentNotes, 'newCurrentNotes')
		_.set(newFolders, directory.join('.'), newCurrentNotes)
		console.log(newFolders, 'newFolders')
		setState.setFolders(newFolders)
		setState.setCurrentFolderMainSection(['notes'])
	}

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
