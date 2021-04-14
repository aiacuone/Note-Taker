import React from 'react'

import Note from './Note'

export default function Note_s({ state, setState, vars }) {
	let sortedNotes = () => {
		let arr = []
		Object.keys(vars.currentFolder.notes).map((note) => {
			arr.push(vars.currentFolder.notes[note])
		})
		if (vars.currentFolder.sortNotes == 'date') {
			return arr.sort((a, b) => {
				return a['dateCreated'] - b['dateCreated']
			})
		} else if (vars.currentFolder.sortNotes == 'recent') {
			return arr
				.sort((a, b) => {
					return a['lastSelected'] - b['lastSelected']
				})
				.reverse()
		} else if (vars.currentFolder.sortNotes == 'name') {
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
