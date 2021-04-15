import React from 'react'
import point from 'images/bubble_point.svg'

export default function NoteNameWarning({ state, setState, vars }) {
	let message = vars.currentFolder.notes[state.input.toLowerCase()]
		? 'That title already Exists'
		: state.input.length > 20 && 'Too many characters'

	return (
		<div class="current_folder_add_note_warning">
			<div class="current_folder_add_note_warning_wrapper">
				<p class="current_folder_add_note_warning_text">{message}</p>
			</div>
			<img class="current_folder_add_note_warning_point" src={point} />
		</div>
	)
}
