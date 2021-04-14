import React from 'react'

export default function EditNoteExit({ state, setState, vars }) {
	function handleExit() {
		setState.setInput()
		setState.setContent()
		setState.setCurrentFolderMainSection(['notes'])
		setState.setRenderCurrentFolder(['mainSection', 'header'])
	}

	function handleNoExit() {
		let arr = [...state.renderCurrentFolder]
		arr.pop()
		setState.setRenderCurrentFolder(arr)
	}

	return (
		<div class="current_folder_edit_note_exit_confirm">
			<div class="current_folder_edit_note_exit_confirm_container">
				<p class="current_folder_delete_note_p">
					Are you sure you want to Exit? Your progress will be lost.
				</p>
				<div class="current_folder_delete_note_confirm_container">
					{' '}
					<p
						class="current_folder_delete_note_confirm yes"
						onClick={handleExit}>
						YES{' '}
					</p>
					<p class="current_folder_delete_note_confirm">/ </p>
					<p
						class="current_folder_delete_note_confirm confirm_no"
						onClick={handleNoExit}>
						NO
					</p>
				</div>
			</div>
		</div>
	)
}
