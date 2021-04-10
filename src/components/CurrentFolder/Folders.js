import React from 'react'
import Folder from './Folder'

export default function Folders({ state, setState, vars }) {
    let folders = Object.keys(vars.currentFolder.folders).map((folder) => {
		return (
			<Folder
				state={state}
				setState={setState}
				vars={vars}
				folder={folder}
			/>
		)
	})
    return (
		<div class='current_folder_folders'>
            {folders}
        </div>
    )
}
