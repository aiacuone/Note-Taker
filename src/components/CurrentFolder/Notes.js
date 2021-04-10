import React from 'react'
import Note from './Note'
// import add_note from './images/add_note.svg'
import AddNoteButton from './AddNoteButton'

export default function Notes({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	let notes = vars.currentFolder.notes ? (
		<Note
			state={state}
			setState={setState}
			vars={vars}
			// sortedFolders={sortedFolders}
		/>
	) : (
		<div class="curret_page_notes">
			<h3 class="curret_page_note_text">NO NOTES</h3>
		</div>
	)
	return (
		<div class='notes_container'>
			<div class="notes_header">
				<h1 class="current_page_title">
					{vars.currentFolder.name.toUpperCase()}
				</h1>
				<p class="current_page_directory">
					{state.directory.join('-').toUpperCase()}
				</p>
			</div>
			<h3
				onClick={() => {
					let arr = [...state.directory]
					arr.splice(arr.length - 1, 1)
					setState.setDirectory(arr)
				}}
				class="current_page_nav_button back">
				BACK
			</h3>
			<AddNoteButton state={state} setState={setState} vars={vars} />

			{notes}
		</div>
	)
}
