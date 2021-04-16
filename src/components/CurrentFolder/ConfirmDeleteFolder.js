import React from 'react'
import _ from 'lodash'

export default function ConfirmDeleteFolder({ state, setState, vars }) {
	function handleDelete() {
		let newFolders = { ...state.folders }
		let arr = [...vars.directoryChain(), 'folders', state.render[2]]
		_.unset(newFolders, arr.join('.'))
		setState.setFolders(newFolders)
		setState.setRender(['mainSection'])
	}

	return (
		<div>
			<p
				class="current_folder_folder_settings_delete_delete"
				onMouseDown={handleDelete}>
				DELETE
			</p>
		</div>
	)
}
