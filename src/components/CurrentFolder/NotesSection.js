import React, { useRef,useEffect } from 'react'
import Notes from './Notes'
import AddNoteButton from './AddNoteButton'

export default function NotesSection({
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
			<AddNoteButton state={state} setState={setState} vars={vars} />

			{vars.currentFolder.notes ? (
				<Notes
					state={state}
					setState={setState}
					vars={vars}
				/>
			) : (
				<div class="curret_page_notes">
					<h3 class="curret_page_note_text">NO NOTES</h3>
				</div>
			)}
		</div>
	)
}
