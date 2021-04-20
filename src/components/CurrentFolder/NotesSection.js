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

	// function handleMouseDown(e) {
	// 	e.preventDefault()
	// 	isDown = true
	// 	if (notesRef && notesRef.current) {
	// 		notesRef.current.classList.add('active')
	// 		startY = e.pageY - notesRef.current.offsetTop
	// 		scrollUp = notesRef.current.scrollUp
	// 	}
	// }
	// function handleMouseleave() {
	// 	clearTimeout(timeout)
	// 	timeout = setTimeout(() => {
	// 		setState.setFoldersScrolling(false)
	// 	}, 10)
	// 	isDown = false
	// 	if (notesRef && notesRef.current) {
	// 		notesRef.current.classList.remove('active')
	// 	}
	// }
	// function handleMouseup() {
	// 	clearTimeout(timeout)
	// 	timeout = setTimeout(() => {
	// 		setState.setRender2(true)
	// 	}, 1500)
	// 	isDown = false
	// 	if (notesRef && notesRef.current) {
	// 		notesRef.current.classList.remove('active')
	// 	}
	// }
	// function handleMousemove(e) {
	// 	if (!isDown) return

	// 	if (notesRef && notesRef.current) {
	// 		const y = e.pageY - notesRef.current.offsetTop
	// 		const walk = (y - startY) * 3
	// 		notesRef.current.scrollUp = scrollUp - walk
	// 	}
	// }

	// function handleScroll() {
	// 	setState.setRender2(false)
	// 	clearTimeout(timeout)
	// 	timeout = setTimeout(() => {
	// 		setState.setRender2(true)
	// 	}, 2000)
	// }

	// useEffect(() => {
	// 	if (notesRef && notesRef.current) {
	// 		notesRef.current.addEventListener('scroll', handleScroll)
	// 		notesRef.current.addEventListener('mousedown', handleMouseDown)
	// 		notesRef.current.addEventListener('mouseleave', handleMouseleave)
	// 		notesRef.current.addEventListener('mouseup', handleMouseup)
	// 		notesRef.current.addEventListener('mousemove', handleMousemove)
	// 	}

	// 	return () => {
	// 		if (notesRef && notesRef.current) {
	// 			notesRef.current.removeEventListener('scroll', handleScroll)
	// 			notesRef.current.removeEventListener('mousedown', handleMouseDown)
	// 			notesRef.current.removeEventListener('mouseleave', handleMouseleave)
	// 			notesRef.current.removeEventListener('mouseup', handleMouseup)
	// 			notesRef.current.removeEventListener('mousemove', handleMousemove)
	// 		}
	// 	}
	// }, [])

	return (
		<div className="notes_container" ref={notesRef}>
			{vars.currentFolder.notes ? (
				<Notes state={state} setState={setState} vars={vars} />
			) : (
				<div className="curret_page_notes">
					<h3 className="curret_page_note_text">NO NOTES</h3>
				</div>
			)}
		</div>
	)
}
