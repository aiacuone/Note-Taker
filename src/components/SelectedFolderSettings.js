import React from 'react'
import useLongPress from '../hooks/useLongPress'

export default function SelectedFolderSettings() {
	let arr = ['delete', 'rename', 'colour']
	let selectedFolderOptions = arr.map((item) => {
		return <p class="current_folder_folder_option">{item}</p>
	})

	return (
		<div class="selected_folder_settings">
			<h3>FOLDER SETTINGS</h3>
			<div
				class="current_folder_folder_settings"
				{...useLongPress(
					() => {
						console.log('longpress is triggered')
					},
					() => {
						console.log('click is triggered')
					},
					{ shouldPreventDefault: true, delay: 500 }
				)}>
				{selectedFolderOptions}
			</div>
		</div>
	)
}
