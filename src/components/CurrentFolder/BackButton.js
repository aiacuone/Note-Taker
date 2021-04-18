import React from 'react'

export default function BackButton({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	function handleBack(e) {
		e.preventDefault()
		let arr = [...state.directory]
		arr.splice(arr.length - 1, 1)
		setState.setDirectory(arr)
		setState.setRender(['mainSection'])
	}
	return (
		<h3 onClick={handleBack} class="current_page_nav_button back">
			BACK
		</h3>
	)
}
