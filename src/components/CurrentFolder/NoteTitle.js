import React, { useEffect, useRef } from 'react'

export default function NoteTitle({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	let page_title_ref = useRef()
	let isDown = false
	let startX
	let scrollLeft

	function handleMouseDown(e) {
		e.preventDefault()
		isDown = true
		page_title_ref.current.classList.add('active')
		startX = e.pageX - page_title_ref.current.offsetLeft
		scrollLeft = page_title_ref.current.scrollLeft
	}
	function handleMouseleave() {
		isDown = false
		page_title_ref.current.classList.remove('active')
	}
	function handleMouseup() {
		isDown = false
		page_title_ref.current.classList.remove('active')
		// timer = setTimeout(() => {
		// 	setState.setRenderCurrentFolder(['mainSection', 'header'])
		// }, 1500)
	}
	function handleMousemove(e) {
		if (!isDown) return
		setState.setRender(['mainSection'])
		// clearTimeout(timer)
		const x = e.pageX - page_title_ref.current.offsetLeft
		const walk = (x - startX) * 5
		page_title_ref.current.scrollLeft = scrollLeft - walk
	}

	useEffect(() => {
		if (page_title_ref && page_title_ref.current) {
			page_title_ref.current.addEventListener('mousedown', handleMouseDown)
			page_title_ref.current.addEventListener('mouseleave', handleMouseleave)
			page_title_ref.current.addEventListener('mouseup', handleMouseup)
			page_title_ref.current.addEventListener('mousemove', handleMousemove)
		}

		return () => {
			if (page_title_ref && page_title_ref.current) {
				page_title_ref.current.removeEventListener('mousedown', handleMouseDown)
				page_title_ref.current.removeEventListener(
					'mouseleave',
					handleMouseleave
				)
				page_title_ref.current.removeEventListener('mouseup', handleMouseup)
				page_title_ref.current.removeEventListener('mousemove', handleMousemove)
			}
		}
	}, [])

	return (
		<h1 class="current_page_title" ref={page_title_ref}>
			{vars.currentFolder.name.toUpperCase()}
		</h1>
	)
}
