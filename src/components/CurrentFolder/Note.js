import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import menu from 'images/menu.svg'
import _ from 'lodash'

export default function Note({ state, setState, vars, note }) {
	function handlePageChangeViewNote() {
		//CHANGE NOTE PROPERTIES
		let newFolders = { ...state.folders }
		let newCurrentNotes = { ...vars.currentFolder.notes }
		let directory = [...vars.directoryChain(), 'notes']
		newCurrentNotes[note.title].timesSelected += 1
		newCurrentNotes[note.title].lastSelected = Date.now()
		_.set(newFolders, directory.join('.'), newCurrentNotes)
		setState.setFolders(newFolders)
		//RENDER
		setState.setRender(['viewNote', note])
	}

	function handlePageChangeEdit() {
		setState.setInput(note.title) //Needs to be done before edit note is rendered
		setState.setRender(['editNote', note])
	}

	return (
		<div class="curret_page_note" onClick={handlePageChangeViewNote}>
			<h1 class="curret_page_note_title">{note.title.toUpperCase()}</h1>
			<div class="curret_page_note_text">{ReactHtmlParser(note.content)}</div>
			<img
				class="current_folder_note_menu_button"
				src={menu}
				onMouseDown={handlePageChangeEdit}
			/>
		</div>
	)
}
