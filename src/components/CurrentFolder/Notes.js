import React from 'react'

import Note from './Note'

export default function Note_s({ state, setState, vars }) {
	let sortedNotes = () => {
		let arr = []
		Object.keys(vars.currentFolder.notes).map((note) => {
			arr.push(vars.currentFolder.notes[note])
		})
		if (vars.currentFolder.settings.sortNotes == 'date') {
			// console.log('date')
			return arr.sort((a, b) => {
				return a['dateCreated'] - b['dateCreated']
			})
		} else if (vars.currentFolder.settings.sortNotes == 'recent') {
			// console.log('recent')
			return arr
				.sort((a, b) => {
					return a['lastSelected'] - b['lastSelected']
				})
				.reverse()
		} else if (vars.currentFolder.settings.sortNotes == 'name') {
			// console.log('name')
			return arr.sort((a, b) => {
				if (a['title'] < b['title']) {
					return -1
				}
				if (a['title'] > b['title']) {
					return 1
				}
				return 0
			})
		}
	}

	let notes = sortedNotes().map((note) => {
		return (
			<Note
				key={note.title}
				state={state}
				setState={setState}
				vars={vars}
				note={note}
			/>
		)
	})

	return <div class="curret_page_notes">{notes}</div>
}
