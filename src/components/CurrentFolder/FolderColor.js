import React from 'react'
import _ from 'lodash'

export default function FolderColor({ state, setState, vars }) {
	let colorOptions = vars.colors.map((color) => {
		return (
			<div
				class="current_folder_folder_settings_color_option"
				style={{ background: color }}
				onMouseDown={() => {
					let arr = [
						...vars.directoryChain(),
						'folders',
						state.render[2],
						'folderColor',
					]
					let newFolders = { ...state.folders }
					_.set(newFolders, arr.join('.'), color)
					setState.setFolders(newFolders)
					setState.setRender(['mainSection'])
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
