import React from 'react'
import useLongPress from '../../hooks/useLongPress'

export default function Folder({ state, setState, vars, folder }) {
	let color = () => {
		let arr = [...vars.directoryChain(), 'folders', folder, 'folderColor']
		return arr.reduce((a, b) => {
			return a[b]
		}, state.folders)
	}

	return (
		<div
			class="current_page_folder_menu_folder"
			{...useLongPress(
				() => {
					//LONG PRESS
					if (!state.foldersScrolling) {
						// if (!vars.foldersScrolling) {
						setState.setCurrentFolderMainSection(() => {
							let newCurrentFolderMainSection = [
								...state.currentFolderMainSection,
							]
							newCurrentFolderMainSection[0] = 'folderSettings'
							newCurrentFolderMainSection[1] = folder
							return newCurrentFolderMainSection
						})
					}
				},
				() => {
					//CLICK
					// if (!vars.foldersScrolling) {
					if (!state.foldersScrolling) {
						let arr = [...state.directory]
						arr.push(folder)
						setState.setDirectory(arr)
						setState.setCurrentFolderMainSection(['notes'])
					}
				},
				{ shouldPreventDefault: true, delay: 500 }
			)}
			style={{
				background: color(),
				// border:
				// 	state.currentFolderMainSection[1] == folder
				// 		? '4px ' + color() + ' solid'
				// 		: '2px ' + color() + ' solid',
				margin:
					state.currentFolderMainSection[1] == folder ? '0px 8px' : '0px 10px',
			}}>
			<p
				class="current_page_folder_menu_title"
				style={{ color: color() == '#FFED0D' ? 'black' : 'white' }}>
				{folder.toUpperCase()}
			</p>
		</div>
	)
}
