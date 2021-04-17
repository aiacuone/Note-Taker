import React from 'react'
import add_note from 'images/add_note.svg'

export default function AddFolderButton({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	function handlePageChange(e) {
		e.preventDefault()
		setState.setHomeRender(['addFolder', '#A0A0A0'])
	}
	return (
		<div class="home_add_folder_button" onClick={handlePageChange}>
			<img src={add_note} class="home_add_folder_img" />
			<p class="home_add_folder_text">FOLDER</p>
		</div>
	)
}
