import React from 'react'
import menu_button from 'images/menu.svg'
import Folder from './Folder'

export default function Folders({ state, setState, vars }) {
	let sortedFolders = () => {
		let arr = []
		Object.keys(state.folders).map((item) => {
			arr.push(state.folders[item])
		})
		//SORTS ARRAY
		if (state.sortHomeFolders == 'RECENT') {
			return arr
				.sort((a, b) => {
					return a['lastSelected'] - b['lastSelected']
				})
				.reverse()
		} else if (state.sortHomeFolders == 'DATE CREATED') {
			return arr.sort((a, b) => {
				return a['dateCreated'] - b['dateCreated']
			})
		} else if (state.sortHomeFolders == 'NAME') {
			return arr.sort((a, b) => {
				if (a['name'] < b['name']) {
					return -1
				}
				if (a['name'] > b['name']) {
					return 1
				}
				return 0
			})
		}
	}

	let folders = sortedFolders().map((folder) => {
		return (
			<Folder
				key={folder.name}
				state={state}
				setState={setState}
				vars={vars}
				folder={folder}
			/>
		)
	})

	return <div>{folders}</div>
}
