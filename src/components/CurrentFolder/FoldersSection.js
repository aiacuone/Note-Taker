import React, { useRef, useEffect } from 'react'
import Folder from './Folder'

export default function FoldersSection({ state, setState, vars }) {
	let scroller = useRef()
	let isDown = false
	let startX
	let scrollLeft

	let timeout

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
				const walk = (x - startX) * 3
				scroller.current.scrollLeft = scrollLeft - walk
			}
		}
		function handleScroll() {
			setState.setFoldersScrolling(true)
			clearTimeout(timeout)
		}

		if (scroller && scroller.current) {
			scroller.current.addEventListener('scroll', handleScroll)
			scroller.current.addEventListener('mousedown', handleMouseDown)
			scroller.current.addEventListener('mouseleave', handleMouseleave)
			scroller.current.addEventListener('mouseup', handleMouseup)
			scroller.current.addEventListener('mousemove', handleMousemove)
		}

		return () => {
			if (scroller && scroller.current) {
				scroller.current.addEventListener('scroll', handleScroll)
				scroller.current.removeEventListener('mousedown', handleMouseDown)
				scroller.current.removeEventListener('mouseleave', handleMouseleave)
				scroller.current.removeEventListener('mouseup', handleMouseup)
				scroller.current.removeEventListener('mousemove', handleMousemove)
			}
		}
	}, [])

	let folders = Object.keys(vars.currentFolder.folders).map((folder) => {
		// console.log(vars.currentFolder.folders[folder],'folder')
		return (
			<Folder
				key={folder}
				state={state}
				setState={setState}
				vars={vars}
				folder={vars.currentFolder.folders[folder]}
			/>
		)
	})

	return (
		<div class="current_page_folders_container" ref={scroller}>
			{folders}
		</div>
	)
}
