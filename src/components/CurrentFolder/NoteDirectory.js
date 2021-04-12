import React, { useRef, useEffect } from 'react'

export default function NoteDirectory({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	let notesNavRef = useRef()
	let isDown = false
	let startX
	let scrollLeft

	useEffect(() => {
		function handleMouseDown(e) {
			e.preventDefault()
			isDown = true
			notesNavRef.current.classList.add('active')
			startX = e.pageX - notesNavRef.current.offsetLeft
			scrollLeft = notesNavRef.current.scrollLeft
		}
		function handleMouseleave() {
			isDown = false
			notesNavRef.current.classList.remove('active')
		}
		function handleMouseup() {
			isDown = false
			if (notesNavRef && notesNavRef.current) {
				notesNavRef.current.classList.remove('active')
			}
			
			// timer = setTimeout(() => {
			// 	setState.setRenderCurrentFolder(['mainSection', 'header'])
			// }, 1500)
		}
		function handleMousemove(e) {
			if (!isDown) return
			if (notesNavRef && notesNavRef.current) {
				setState.setRenderCurrentFolder(['mainSection'])
				// clearTimeout(timer)
				const x = e.pageX - notesNavRef.current.offsetLeft
				const walk = (x - startX) * 3
				notesNavRef.current.scrollLeft = scrollLeft - walk
			}
		}

		if (notesNavRef && notesNavRef.current) {
			notesNavRef.current.addEventListener('mousedown', handleMouseDown)
			notesNavRef.current.addEventListener('mouseleave', handleMouseleave)
			notesNavRef.current.addEventListener('mouseup', handleMouseup)
			notesNavRef.current.addEventListener('mousemove', handleMousemove)
		}

		return () => {
			if (notesNavRef && notesNavRef.current) {
				notesNavRef.current.removeEventListener('mousedown', handleMouseDown)
				notesNavRef.current.removeEventListener('mouseleave', handleMouseleave)
				notesNavRef.current.removeEventListener('mouseup', handleMouseup)
				notesNavRef.current.removeEventListener('mousemove', handleMousemove)
			}
		}
	}, [])
	return (
		<p class="current_page_directory" ref={notesNavRef}>
			{state.directory.join('-').toUpperCase()}
		</p>
	)
}
