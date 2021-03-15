import React from 'react'
import delete_button from '../images/delete_button.svg'

export default function Folders({ state, setState }) {
	let folders

	if (state.folders) {
		folders = Object.keys(state.folders).map((item) => {
			return (
				<div class="folder" onClick={() => setState.setCurrentFolder(item)}>
					{item}
					<img
						class="delete_button"
						src={delete_button}
						onClick={() => {
							let newObj = { ...state.folders }
							delete newObj[item]
							setState.setFolders(newObj)
						}}></img>
				</div>
			)
		})
	}
	return <div>{folders && folders}</div>
}
