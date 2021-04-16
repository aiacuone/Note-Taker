import React from 'react'

import add_note from './images/add_note.svg'

export default function AddNoteButton({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	function handlePageChange() {
		setState.setRender(['addNote'])
	}
	return (
		<div class="current_folder_add_note" onMouseDown={handlePageChange}>
			<img src={add_note} class="current_folder_add_note_img" />
			<p class="add_note_button_text">NOTE</p>
		</div>
	)
}
