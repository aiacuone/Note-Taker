import React, { useRef,useEffect } from 'react'
import Note_s from './Note_s'
// import add_note from './images/add_note.svg'
import AddNoteButton from './AddNoteButton'

export default function Notes({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	let notesRef = useRef()
	let timeout

	useEffect(() => {
		function handleScroll() {
			setState.setRenderCurrentFolder(['mainSection'])
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				setState.setRenderCurrentFolder(['mainSection', 'header'])
			}, 3000)
		}
		if (notesRef && notesRef.current) {
			notesRef.current.addEventListener('scroll', handleScroll)
		}

		return () => {
			if (notesRef && notesRef.current) {
				notesRef.current.removeEventListener('scroll', handleScroll)
			}
		}
	})

	return (
		<div class="notes_container" ref={notesRef}>
			{/* <div class="notes_header">
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
			</h3> */}
			<AddNoteButton state={state} setState={setState} vars={vars} />

			{vars.currentFolder.notes ? (
				<Note_s
					state={state}
					setState={setState}
					vars={vars}
					// sortedFolders={sortedFolders}
				/>
			) : (
				<div class="curret_page_notes">
					<h3 class="curret_page_note_text">NO NOTES</h3>
				</div>
			)}
		</div>
	)
}
