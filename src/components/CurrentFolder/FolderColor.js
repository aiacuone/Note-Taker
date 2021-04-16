import React from 'react'
import _ from 'lodash'

export default function FolderColor({ state, setState, vars }) {
	let selectedFolder = state.render[2]

	function handleColor(color) {
		let directory = [
			...vars.directoryChain(),
			'folders',
			selectedFolder,
			'folderColor',
		]
		let newFolders = { ...state.folders }
		_.set(newFolders, directory.join('.'), color)
		setState.setFolders(newFolders)
		setState.setRender(['mainSection'])
	}

	let colorOptions = vars.colors.map((color) => {
		return (
			<div
				class="current_folder_folder_settings_color_option"
				style={{ background: color }}
				onMouseDown={() => {
					handleColor(color)
				}}></div>
		)
	})
	return (
		<div>
			<div class="current_folder_folder_settings_colors_container">
				{colorOptions}
			</div>
		</div>
	)
}
