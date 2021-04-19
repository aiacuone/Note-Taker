import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import menu from 'images/menu.svg'

export default function ViewNote({ state, setState, vars, Folder, Note }) {
	let note = state.render[1]

	function handleBack() {
		setState.setRender(['mainSection'])
	}

	function handleEdit() {
		setState.setRender(['editNote', note])
		setState.setInput(note.title)
	}

	return (
		<div class="view_note">
			<h1 class="view_note_title">{note.title.toUpperCase()}</h1>
			<div class="view_note_content">{ReactHtmlParser(note.content)}</div>
			<p class="view_note_exit_button" onClick={handleBack}>
				BACK
			</p>
			<img class="view_note_settings" src={menu} onClick={handleEdit} />
		</div>
	)
}
