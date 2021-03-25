import React from 'react'
import useLongPress from '../hooks/useLongPress'

export default function FolderSelectCurrent({ state, setState, vars, folder }) {
	return (
		<div
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
			class="current_page_folder_menu_folder"
			style={{
				border:
					state.currentFolderMainSection[1] == folder
						? '4px solid orange'
						: '2px solid orange',
				margin:
					state.currentFolderMainSection[1] == folder
						? '0px 18px'
						: '0px 20px',
			}}>
			<p class="current_page_folder_menu_title">{folder.toUpperCase()}</p>
		</div>
	)
}
