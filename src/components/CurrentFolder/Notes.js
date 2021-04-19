import React, { useEffect, useRef } from 'react'

import Note from './Note'

export default function Note_s({ state, setState, vars }) {
	let sortedNotes = () => {
		let arr = []
		Object.keys(vars.currentFolder.notes).map((note) => {
			arr.push(vars.currentFolder.notes[note])
		})
		if (vars.currentFolder.settings.sortNotes == 'date') {
			// console.log('date')
			return arr.sort((a, b) => {
				return a['dateCreated'] - b['dateCreated']
			})
		} else if (vars.currentFolder.settings.sortNotes == 'recent') {
			// console.log('recent')
			return arr
				.sort((a, b) => {
					return a['lastSelected'] - b['lastSelected']
				})
				.reverse()
		} else if (vars.currentFolder.settings.sortNotes == 'name') {
			// console.log('name')
			return arr.sort((a, b) => {
				if (a['title'] < b['title']) {
					return -1
				}
				if (a['title'] > b['title']) {
					return 1
				}
				return 0
			})
		}
	}

	let notes = sortedNotes().map((note) => {
		return (
			<Note
				key={note.title}
				state={state}
				setState={setState}
				vars={vars}
				note={note}
			/>
		)
	})

	let notesRef = useRef()
	// let isDown = false
	// let startY
	// let scrollUp
	let timeout

	// function handleMouseDown(e) {
	// 	e.preventDefault()
	// 	isDown = true
	// 	if (notesRef && notesRef.current) {
	// 		notesRef.current.classList.add('active')
	// 		startY = e.pageY - notesRef.current.offsetTop
	// 		scrollUp = notesRef.current.scrollUp
	// 	}

	// 	console.log({ startY, scrollUp })
	// 	// console.log('mousedown', startY,scrollUp)
	// }
	// function handleMouseleave() {
	// 	clearTimeout(timeout)
	// 	timeout = setTimeout(() => {
	// 		setState.setRender2(true)
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
	// 	// setState.setRender2(false)
	// 	// clearTimeout(timeout)
	// 	if (notesRef && notesRef.current) {
	// 		const y = e.pageY - notesRef.current.offsetTop
	// 		const walk = (y - startY) * 3
	// 		// notesRef.current.scrollUp = scrollUp - walk
	// 		notesRef.current.scrollUp = scrollUp - walk
	// 		console.log({ scrollUp, walk })
	// 		console.log(notesRef.current.scrollUp, 'notesRef.current.scrollUp')
	// 		console.log({ y, walk })
	// 	}
	// }

	function handleScroll() {
		setState.setRender2(false)
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			setState.setRender2(true)
		}, 2000)
	}

	useEffect(() => {
		if (notesRef && notesRef.current) {
			notesRef.current.addEventListener('scroll', handleScroll)
			// notesRef.current.addEventListener('mousedown', handleMouseDown)
			// notesRef.current.addEventListener('mouseleave', handleMouseleave)
			// notesRef.current.addEventListener('mouseup', handleMouseup)
			// notesRef.current.addEventListener('mousemove', handleMousemove)
		}

		return () => {
			if (notesRef && notesRef.current) {
				notesRef.current.removeEventListener('scroll', handleScroll)
				// notesRef.current.removeEventListener('mousedown', handleMouseDown)
				// notesRef.current.removeEventListener('mouseleave', handleMouseleave)
				// notesRef.current.removeEventListener('mouseup', handleMouseup)
				// notesRef.current.removeEventListener('mousemove', handleMousemove)
			}
		}
	})

	return (
		<div class="curret_page_notes" ref={notesRef}>
			<div class="current_notes_gap_fill" />
			{notes}
			<div class="current_notes_gap_fill" />
		</div>
	)
}
