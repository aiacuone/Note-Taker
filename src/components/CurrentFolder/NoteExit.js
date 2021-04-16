import React from 'react'

export default function NoteExit({ state, setState, vars }) {
	function handleExit() {
		setState.setInput()
		setState.setContent()
		// setState.setCurrentFolderMainSection(['notes'])
		setState.setRender(['mainSection'])
		
	}

	function handleStay() {
		let arr = [...state.render]
		arr.pop()
		setState.setRender(arr)
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
						onClick={handleStay}>
						NO
					</p>
				</div>
			</div>
		</div>
	)
}
