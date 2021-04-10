import React from 'react'
import SelectedFolderSettings from './SelectedFolderSettings'
import Notes from './Notes'
import AddNote from './AddNote'

export default function MainSection({
	state,
	setState ,
	vars ,
	Note
}) {
	// let sortedFolders = () => {
	// 	let arr = []
	// 	Object.keys(vars.currentFolder.folders).map((folder) => {
	// 		arr.push(vars.currentFolder.folders[folder])
	// 	})
	// 	if (vars.currentFolder.sortFolders == 'DATE') {
	// 		// console.log('DATE')
	// 		return arr.sort((a, b) => {
	// 			return a['dateCreated'] - b['dateCreated']
	// 		})
	// 	} else if (vars.currentFolder.sortFolders == 'RECENT') {
	// 		// console.log('RECENT')
	// 		return arr
	// 			.sort((a, b) => {
	// 				return a['lastSelected'] - b['lastSelected']
	// 			})
	// 			.reverse()
	// 	} else if (vars.currentFolder.sortFolders == 'NAME') {
	// 		// console.log('NAME')
	// 		return arr.sort((a, b) => {
	// 			if (a['name'] < b['name']) {
	// 				return -1
	// 			}
	// 			if (a['name'] > b['name']) {
	// 				return 1
	// 			}
	// 			return 0
	// 		})
	// 	}
	// }

	// if (state.currentFolderMainSection[0] == undefined) {

	// }

	// if (state.currentFolderMainSection[0] == undefined) {
	// 	let notes = currentFolder.notes ? (
	// 		<CurrentFolderNotes
	// 			state={state}
	// 			setState={setState}
	// 			vars={vars}
	// 			sortedFolders={sortedFolders}
	// 		/>
	// 	) : (
	// 		<div class="curret_page_notes">
	// 			<h3 class="curret_page_note_text">NO NOTES</h3>
	// 		</div>
	// 	)
	// 	return (
	// 		<>
	// 			<div class="notes_header">
	// 				<h1 class="current_page_title">
	// 					{vars.currentFolder.name.toUpperCase()}
	// 				</h1>
	// 				<p class="current_page_directory">
	// 					{state.directory.join('-').toUpperCase()}
	// 				</p>
	// 			</div>
	// 			<h3
	// 				onClick={() => {
	// 					let arr = [...state.directory]
	// 					arr.splice(arr.length - 1, 1)
	// 					setState.setDirectory(arr)
	// 				}}
	// 				class="current_page_nav_button back">
	// 				BACK
	// 			</h3>
	// 			{notes}
	// 		</>
	// 	)
	// } else if (state.currentFolderMainSection[0] === 'folderSettings') {
	// 	return (
	// 		<SelectedFolderSettings state={state} setState={setState} vars={vars} />
	// 	)
	// }
	return (
		<div class="main_section_container">
			{/* {state.currentFolderMainSection[0] == undefined&&notes} */}
			{state.currentFolderMainSection[0] == 'notes' && (
				<Notes state={state} setState={setState} vars={vars} />
			)}
			{state.currentFolderMainSection[0] === 'folderSettings' && (
				<SelectedFolderSettings state={state} setState={setState} vars={vars} />
			)}
						{state.currentFolderMainSection[0] === 'addNote' && (
				<AddNote state={state} setState={setState} vars={vars} Note={ Note}/>
			)}

			{/* {notes} */}
		</div>
	)
}
