import React from 'react'

export default function DeleteFolder({ state, setState, vars }) {
	return (
		<div class='confirm_delete_container'>
			<p class="confirm_delete">Are you sure you want to delete this folder?</p>
			<div class="current_folder_folder_settings_delete_options">
				<p
					class="current_folder_folder_settings_delete_option yes"
					onMouseDown={() => {
                        let arr = [...state.render]
                        arr[1] = 'confirmDeleteFolder'
                        setState.setRender(arr)
						// newCurrentFolderMainSection[3] = 'yes'
						// setState.setCurrentFolderMainSection(newCurrentFolderMainSection)
					}}>
					YES
				</p>
				<p class="current_folder_folder_settings_delete_option">/</p>
				<p class="current_folder_folder_settings_delete_option">NO</p>
			</div>
		</div>
	)
}
