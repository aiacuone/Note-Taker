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
					setState.setCurrentFolderMainSection(() => {
						let newCurrentFolderMainSection = [
							...state.currentFolderMainSection,
						]
						newCurrentFolderMainSection[0] = 'folderSettings'
						newCurrentFolderMainSection[1] = folder
						return newCurrentFolderMainSection
					})
				},
				() => {
					//CLICK
					let arr = [...state.directory]
					arr.push(folder)
					setState.setDirectory(arr)
					setState.setCurrentFolderMainSection([])
				},
				{ shouldPreventDefault: true, delay: 500 }
			)}
			style={{
				border:
					state.currentFolderMainSection[1] == folder
						? '4px ' + color() + ' solid'
						: '2px ' + color() + ' solid',
				margin:
					state.currentFolderMainSection[1] == folder ? '0px 8px' : '0px 10px',
			}}>
			<p class="current_page_folder_menu_title">{folder.toUpperCase()}</p>
		</div>
	)
}
