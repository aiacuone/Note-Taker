import React from 'react'

export default function Note({
	state,
	setState,
	vars,
}) {

	let sortedNotes = () => {
		let arr = []
		Object.keys(vars.currentFolder.notes).map((note) => {
			arr.push(vars.currentFolder.notes[note])
			// console.log(vars.currentFolder.notes[note])
		})
		if (vars.currentFolder.sortNotes == 'date') {
			// console.log('DATE')
			return arr.sort((a, b) => {
				return a['dateCreated'] - b['dateCreated']
			})
		} else if (vars.currentFolder.sortNotes == 'recent') {
			// console.log('RECENT')
			return arr
				.sort((a, b) => {
					return a['lastSelected'] - b['lastSelected']
				})
				.reverse()
		} else if (vars.currentFolder.sortNotes == 'name') {
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

	let notes = sortedNotes().map((note) => {
		return (
			<div class="curret_page_note">
				<h3 class="curret_page_note_title">
					{note.title}
				</h3>
				<p class="curret_page_note_text">
					{note.content}
				</p>
			</div>
		)
	})
	return <div class="curret_page_notes">{notes}</div>
}
