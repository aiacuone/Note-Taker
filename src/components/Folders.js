import React from 'react'
import delete_button from '../images/delete.svg'

export default function Folders({ state, setState }) {
	let folders

	if (state.folders) {
		//Creates array to be sorted
		let foldersArray = []

		Object.keys(state.folders).map((item) => {
			foldersArray.push(state.folders[item])
		})
		//Sorts array
		let sortedFolders = foldersArray.sort((a, b) => {
			if (state.homePreferences.sortBy == 'most') {
				return b.timesSelected - a.timesSelected
			} else if (state.homePreferences.sortBy == 'name') {
				return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
			} else if (state.homePreferences.sortBy == 'date') {
				return b.timeCreated - a.timeCreated
			} else if (state.homePreferences.sortBy == 'last') {
				return b.lastSelected - a.lastSelected
			}
		})

		//creates folders based on array
		folders = sortedFolders.map((item) => {
			return (
				<div
					class="folder"
					style={{
						width: [state.homePreferences.folderSize * 1.5] + 'px',
						height: [state.homePreferences.folderSize] + 'px',
					}}
					onClick={(e) => {
						if (
							e.target.className == 'folder' ||
							e.target.className == 'folder_title'
						) {
							let newObj = { ...state.folders }
							newObj[item.name].timesSelected += 1
							newObj[item.name].lastSelected = Date.now()
							setState.setFolders(newObj)
							setState.setCurrentFolder(item.name)
						}
					}}>
					<p
						style={{ fontSize: 0.2 * state.homePreferences.folderSize }}
						class="folder_title">
						{item.name.toUpperCase()}
					</p>
					<img
						class="delete_button"
						src={delete_button}
						onClick={() => {
							if (
								window.confirm('Are you sure you wish to delete this item?')
							) {
								let newObj = { ...state.folders }
								// console.log(newObj)
								delete newObj[item.name]
								// console.log(newObj)
								setState.setFolders(newObj)
							}
						}}></img>
				</div>
			)
		})
	}

	return <div class="entry_folders">{folders && folders}</div>
}
