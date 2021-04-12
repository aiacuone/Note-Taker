import React, { useState, useRef, useEffect } from 'react'
import AddFolderButton from './AddFolderButton'
import NoteTitle from './NoteTitle'
import NoteDirectory from './NoteDirectory'

export default function NotesNav({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {

	return (
		<div class="notes_nav_container">
			<NoteTitle state={state} setState={setState} vars={vars} />
			<NoteDirectory state={state} setState={setState} vars={vars} />
			<h3
				onClick={(e) => {
					e.preventDefault()
					let arr = [...state.directory]
					arr.splice(arr.length - 1, 1)
					setState.setDirectory(arr)
				}}
				class="current_page_nav_button back">
				BACK
			</h3>
			<AddFolderButton state={state} setState={setState} vars={vars} />
		</div>
	)
}
