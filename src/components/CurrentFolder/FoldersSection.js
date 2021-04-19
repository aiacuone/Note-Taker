import React, { useRef, useEffect } from 'react'
import Folder from './Folder'
import Folders from './Folders'

export default function FoldersSection({ state, setState, vars }) {
	let scroller = useRef()
	let isDown = false
	let startX
	let scrollLeft
	let timeout

	function handleMouseDown(e) {
		e.preventDefault()
		isDown = true
		if (scroller && scroller.current) {
			scroller.current.classList.add('active')
			startX = e.pageX - scroller.current.offsetLeft
			scrollLeft = scroller.current.scrollLeft
		}
		console.log({ startX, scrollLeft })
	}
	function handleMouseleave() {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			setState.setFoldersScrolling(false)
		}, 10)
		isDown = false
		if (scroller && scroller.current) {
			scroller.current.classList.remove('active')
		}
	}
	function handleMouseup() {
		clearTimeout(timeout)
		timeout = setTimeout(() => {
			setState.setFoldersScrolling(false)
		}, 10)
		isDown = false
		if (scroller && scroller.current) {
			scroller.current.classList.remove('active')
		}
	}
	function handleMousemove(e) {
		if (!isDown) return
		if (scroller && scroller.current) {
			const x = e.pageX - scroller.current.offsetLeft
			const walk = (x - startX) * 2
			scroller.current.scrollLeft = scrollLeft - walk
		}
	}
	function handleScroll() {
		setState.setFoldersScrolling(true)
		clearTimeout(timeout)
	}

	function handleWheel(e) {
		if (scroller && scroller.current) {
			scroller.current.scrollLeft += e.deltaY * 25
		}
	}

	// useEffect(() => {

	// 	return () => {

	// 	}
	// },[])
	useEffect(() => {
		if (scroller && scroller.current) {
			scroller.current.addEventListener('wheel', handleWheel)
			scroller.current.addEventListener('scroll', handleScroll)
			scroller.current.addEventListener('mousedown', handleMouseDown)
			scroller.current.addEventListener('mouseleave', handleMouseleave)
			scroller.current.addEventListener('mouseup', handleMouseup)
			scroller.current.addEventListener('mousemove', handleMousemove)
		}

		return () => {
			if (scroller && scroller.current) {
				scroller.current.removeEventListener('wheel', handleWheel)
				scroller.current.removeEventListener('scroll', handleScroll)
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
