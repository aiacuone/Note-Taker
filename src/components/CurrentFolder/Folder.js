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
						setState.setRender(['mainSection', 'folderSettings', folder.toLowerCase()])
						// setState.setCurrentFolderMainSection(() => {
						// 	// let newCurrentFolderMainSection = [
						// 	// 	...state.currentFolderMainSection,
						// 	// ]
						// 	// newCurrentFolderMainSection[0] = 'folderSettings'
						// 	// newCurrentFolderMainSection[1] = folder
						// 	// return newCurrentFolderMainSection

						// })
					}
				},
				() => {
					//CLICK
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
				background:
					state.currentFolderMainSection[1] == folder ? 'white' : color(),
			}}>
			<p
				class="current_page_folder_menu_title"
				style={{
					color:
						state.currentFolderMainSection[1] == folder
							? 'black'
							: color() == '#FFED0D' || color() == '#FFA300'
							? 'black'
							: 'white',
				}}>
				{folder.toUpperCase()}
			</p>
		</div>
	)
}
