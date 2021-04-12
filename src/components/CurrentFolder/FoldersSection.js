import React, { useRef, useEffect } from 'react'
import Folders from './Folders'

export default function FoldersSection({ state, setState, vars }) {
	let scroller = useRef()
	let isDown = false
	let startX
	let scrollLeft

	useEffect(() => {
		function handleMouseDown(e) {
			e.preventDefault()
			isDown = true
			if (scroller && scroller.current) {
				scroller.current.classList.add('active')
				startX = e.pageX - scroller.current.offsetLeft
				scrollLeft = scroller.current.scrollLeft
			}
		}
		function handleMouseleave() {
			isDown = false
			if (scroller && scroller.current) {
				scroller.current.classList.remove('active')
			}
		}
		function handleMouseup() {
			isDown = false
			if (scroller && scroller.current) {
				scroller.current.classList.remove('active')
			}
		}
		function handleMousemove(e) {
			if (!isDown) return
			if (scroller && scroller.current) {
				const x = e.pageX - scroller.current.offsetLeft
				const walk = (x - startX) * 3
				scroller.current.scrollLeft = scrollLeft - walk
			}
		}
		if (scroller && scroller.current) {
			scroller.current.addEventListener('mousedown', handleMouseDown)
			scroller.current.addEventListener('mouseleave', handleMouseleave)
			scroller.current.addEventListener('mouseup', handleMouseup)
			scroller.current.addEventListener('mousemove', handleMousemove)
		}

		return () => {
			if (scroller && scroller.current) {
				scroller.current.removeEventListener('mousedown', handleMouseDown)
				scroller.current.removeEventListener('mouseleave', handleMouseleave)
				scroller.current.removeEventListener('mouseup', handleMouseup)
				scroller.current.removeEventListener('mousemove', handleMousemove)
			}
		}
	}, [])

	return (
		<div class="current_page_folders_container" ref={scroller}>
			<Folders state={state} setState={setState} vars={vars} />
		</div>
	)
}
