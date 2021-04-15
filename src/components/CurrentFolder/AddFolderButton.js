import React from 'react'
import add_note from './images/add_note.svg'

export default function AddFolderButton({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	return (
		<div
			class="current_folder_add_folder_button"
			onClick={(e) => {
				e.preventDefault()
				setState.setRender(['mainSection','addFolder'])
			}}>
			<img src={add_note} class="current_folder_add_folder_img" />
			<p class="current_folder_add_folder_text">FOLDER</p>
		</div>
	)
}
