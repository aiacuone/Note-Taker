import React from 'react'
// import Folder from './Folder'
import Folders from './Folders'

export default function FoldersSection({ state, setState, vars }) {
	// let folders = Object.keys(vars.currentFolder.folders).map((folder) => {
	// 	return (
	// 		<Folder
	// 			state={state}
	// 			setState={setState}
	// 			vars={vars}
	// 			folder={folder}
	// 		/>
	// 	)
	// })
	return (
		<div class="current_page_folders_container">
			<Folders state={state} setState={setState} vars={vars}/>
			{/* {folders} */}
		</div>
	)
}
