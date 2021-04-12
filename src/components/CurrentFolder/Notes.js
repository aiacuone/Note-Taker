import React from 'react'
import ReactHtmlParser from 'react-html-parser'

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
			<div class="curret_page_note">
				<h3 class="curret_page_note_title">{note.title}</h3>
				<div class="curret_page_note_text">{ReactHtmlParser(note.content)}</div>
			</div>
		)
	})

	return (
		<div
			class="curret_page_notes">
			{notes}
		</div>
	)
}
