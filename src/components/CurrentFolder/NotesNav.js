import React from 'react'
import AddFolderButton from './AddFolderButton'

export default function NotesNav({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	return (
		<div class="notes_nav_container">
			<div class="notes_header">
				<h1 class="current_page_title">
					{vars.currentFolder.name.toUpperCase()}
				</h1>

			</div>
			<p class="current_page_directory">
					{state.directory.join('-').toUpperCase()}
				</p>
			<h3
				onClick={() => {
					let arr = [...state.directory]
					arr.splice(arr.length - 1, 1)
					setState.setDirectory(arr)
				}}
				class="current_page_nav_button back">
                BACK
			</h3>
            <AddFolderButton state={state} setState={setState} vars={vars} />
		</div>
	)
}
