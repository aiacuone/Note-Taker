import React from 'react'

export default function DeleteFolder({ state, setState, vars }) {
	function handleDelete() {
		let arr = [...state.render]
		arr[1] = 'confirmDeleteFolder'
		setState.setRender(arr)
	}

	function handleExit() {
		setState.setRender(['mainSection'])
	}
	return (
		<div class="confirm_delete_container">
			<p class="confirm_delete">Are you sure you want to delete this folder?</p>
			<div class="current_folder_folder_settings_delete_options">
				<p
					class="current_folder_folder_settings_delete_option yes"
					onMouseDown={handleDelete}>
					YES
				</p>
				<p class="current_folder_folder_settings_delete_option">/</p>
				<p class="current_folder_folder_settings_delete_option" onClick={handleExit }>NO</p>
			</div>
		</div>
	)
}
