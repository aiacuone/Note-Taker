import React, { useEffect } from 'react'
import _ from 'lodash'

export default function SelectedFolderSettings({ state, setState, vars }) {
	function handleSelectOption(option) {
		let obj = {
			delete: 'deleteFolder',
			rename: 'renameFolder',
			color: 'folderColor',
		}
		let arr = [...state.render]
		arr[1] = obj[option]
		setState.setRender(arr)
	}

	let optionArr = ['delete', 'rename', 'color']
	let selectedFolderOptions = optionArr.map((option) => {
		return (
			<p
				class="current_folder_folder_option"
				onMouseDown={() => {
					handleSelectOption(option)
				}}>
				{option.toUpperCase()}
			</p>
		)
	})

	function handleExit(e) {
		if (
			e.target.className !== 'current_folder_folder_option' &&
			e.target.className !==
				'current_folder_folder_settings_delete_option yes' &&
			e.target.className !== 'current_folder_folder_settings_delete_delete' &&
			e.target.className !== 'current_folder_folder_settings_rename_input' &&
			e.target.className !== 'current_folder_folder_settings_color_option' &&
			e.target.className !== 'current_folder_delete_note_confirm yes'
		) {
			setState.setRender(['mainSection'])
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleExit)
		return () => {
			document.removeEventListener('mousedown', handleExit)
		}
	}, [])

	return (
		<div class="selected_folder_settings">
			<div class="current_folder_folder_settings">{selectedFolderOptions}</div>
		</div>
	)
}
