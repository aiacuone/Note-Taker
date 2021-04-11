import React, { useEffect, useState, useRef } from 'react'
import ReactHtmlParser from 'react-html-parser'
import Scroll from './Scroll'

export default function Note_s({ state, setState, vars }) {
	let sortedNotes = () => {
		let arr = []
		Object.keys(vars.currentFolder.notes).map((note) => {
			arr.push(vars.currentFolder.notes[note])
			// console.log(vars.currentFolder.notes[note])
		})
		if (vars.currentFolder.sortNotes == 'date') {
			// console.log('DATE')
			return arr.sort((a, b) => {
				return a['dateCreated'] - b['dateCreated']
			})
		} else if (vars.currentFolder.sortNotes == 'recent') {
			// console.log('RECENT')
			return arr
				.sort((a, b) => {
					return a['lastSelected'] - b['lastSelected']
				})
				.reverse()
		} else if (vars.currentFolder.sortNotes == 'name') {
			// console.log('NAME')
			return arr.sort((a, b) => {
				if (a['name'] < b['name']) {
					return -1
				}
				if (a['name'] > b['name']) {
					return 1
				}
				return 0
			})
		}
	}

	let notes = sortedNotes().map((note) => {
		return (
			<div class="curret_page_note">
				<h3 class="curret_page_note_title">{note.title}</h3>
				<div class="curret_page_note_text">{ReactHtmlParser(note.content)}</div>
			</div>
		)
	})
	// let notesRef = useRef()
	// let timeout

	// useEffect(() => {
	// 	function handleScroll() {
	// 		setState.setRenderCurrentFolder(['mainSection'])
	// 		clearTimeout(timeout)
	// 		timeout = setTimeout(() => {
	// 			setState.setRenderCurrentFolder(['mainSection', 'header'])
	// 		}, 3000)
	// 	}
	// 	if (notesRef && notesRef.current) {
	// 		notesRef.current.addEventListener('scroll', handleScroll)
	// 	}

	// 	return () => {
	// 		if (notesRef && notesRef.current) {
	// 			notesRef.current.removeEventListener('scroll', handleScroll)
	// 		}
	// 	}
	// })

	return (
		<div
			// ref={notesRef}
			class="curret_page_notes">
			{notes}
			{/* <Scroll state={state} setState={setState} vars={vars} /> */}
		</div>
	)
}
