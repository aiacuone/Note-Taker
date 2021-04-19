import React, { useRef, useEffect, useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import menu from 'images/menu.svg'
import _ from 'lodash'
import dots_image from 'images/dots.svg'

export default function Note({ state, setState, vars, note }) {
	let [noteHeight, setNoteHeight] = useState()
	let pageRef = useRef()

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

	useEffect(() => {
		if (pageRef && pageRef.current) {
			setNoteHeight(pageRef.current.clientHeight)
		}
	}, [])

	let dots = () => {
		return (
			<div class="current_note_dots_container">
				<div class="current_note_dots_wrapper">
					<img class="current_note_dots" src={dots_image} />
				</div>
			</div>
		)
	}

	return (
		<div
			class="curret_page_note"
			onClick={handlePageChangeViewNote}
			ref={pageRef}>
			<h1 class="curret_page_note_title">{note.title.toUpperCase()}</h1>
			<div class="curret_page_note_text">{ReactHtmlParser(note.content)}</div>
			<img
				class="current_folder_note_menu_button"
				src={menu}
				onMouseDown={handlePageChangeEdit}
			/>
			{noteHeight == 500 && dots()}
		</div>
	)
}
