import React from 'react'

import add_note from './images/add_note.svg'

export default function AddNoteButton({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	return (
		<div
			class="current_folder_add_note"
			onMouseDown={() => {
				setState.setCurrentFolderMainSection(['addNote'])
			}}>
			<img src={add_note} class="current_folder_add_note_img" />
			<p class='add_note_button_text'>NOTE</p>
		</div>
	)
}
