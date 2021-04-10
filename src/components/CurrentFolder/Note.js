import React from 'react'

export default function Note({
	state,
	setState,
	vars,
	// sortedFolders,
}) {

	let sortedFolders = () => {
		let arr = []
		Object.keys(vars.currentFolder.folders).map((folder) => {
			arr.push(vars.currentFolder.folders[folder])
		})
		if (vars.currentFolder.sortFolders == 'DATE') {
			// console.log('DATE')
			return arr.sort((a, b) => {
				return a['dateCreated'] - b['dateCreated']
			})
		} else if (vars.currentFolder.sortFolders == 'RECENT') {
			// console.log('RECENT')
			return arr
				.sort((a, b) => {
					return a['lastSelected'] - b['lastSelected']
				})
				.reverse()
		} else if (vars.currentFolder.sortFolders == 'NAME') {
			// console.log('NAME')
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

	let notes = sortedFolders().map((note) => {
		return (
			<div class="curret_page_note">
				<h3 class="curret_page_note_title">
					{state.currentFolder.notes[note].title}
				</h3>
				<p class="curret_page_note_text">
					{state.currentFolder.notes[note].text}
				</p>
			</div>
		)
	})
	return <div class="curret_page_notes">{notes}</div>
}
