import React, { useRef, useEffect } from 'react'
import Notes from './Notes'
import AddNoteButton from './AddNoteButton'

export default function NotesSection({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	let notesRef = useRef()
	let timeout
	let isDown = false
	let startY
	let scrollUp

	useEffect(() => {
		function handleScroll() {
			setState.setRenderCurrentFolder(['mainSection'])
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				setState.setRenderCurrentFolder(['mainSection', 'header'])
			}, 3000)
		}

		function handleMouseDown(e) {
			e.preventDefault()
			isDown = true
			notesRef.current.classList.add('active')
			startY = e.pageY - notesRef.current.offsetTop
			scrollUp = notesRef.current.scrollUp
		}
		function handleMouseleave() {
			isDown = false
			notesRef.current.classList.remove('active')
		}
		function handleMouseup() {
			isDown = false
			notesRef.current.classList.remove('active')
			timeout = setTimeout(() => {
				setState.setRenderCurrentFolder(['mainSection', 'header'])
			}, 1500)
		}
		function handleMousemove(e) {
			if (!isDown) return
			setState.setRenderCurrentFolder(['mainSection'])
			clearTimeout(timeout)
			const y = e.pageY - notesRef.current.offsetTop
			const walk = (y - startY) * 3
			notesRef.current.scrollUp = scrollUp - walk
		}

		if (notesRef && notesRef.current) {
			notesRef.current.addEventListener('scroll', handleScroll)
			notesRef.current.addEventListener('mousedown', handleMouseDown)
			notesRef.current.addEventListener('mouseleave', handleMouseleave)
			notesRef.current.addEventListener('mouseup', handleMouseup)
			notesRef.current.addEventListener('mousemove', handleMousemove)
		}

		return () => {
			if (notesRef && notesRef.current) {
				notesRef.current.removeEventListener('scroll', handleScroll)
				notesRef.current.removeEventListener('mousedown', handleMouseDown)
				notesRef.current.removeEventListener('mouseleave', handleMouseleave)
				notesRef.current.removeEventListener('mouseup', handleMouseup)
				notesRef.current.removeEventListener('mousemove', handleMousemove)
			}
		}
	})

	return (
		<div class="notes_container" ref={notesRef}>
			{/* <AddNoteButton state={state} setState={setState} vars={vars} /> */}

			{vars.currentFolder.notes ? (
				<Notes state={state} setState={setState} vars={vars} />
			) : (
				<div class="curret_page_notes">
					<h3 class="curret_page_note_text">NO NOTES</h3>
				</div>
			)}
		</div>
	)
}
