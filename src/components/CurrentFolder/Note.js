import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import menu from 'images/menu.svg'

export default function Note({ state, setState, vars,note }) {
	return (
		<div class="curret_page_note">
			<h1 class="curret_page_note_title">{note.title.toUpperCase()}</h1>
			<div class="curret_page_note_text">{ReactHtmlParser(note.content)}</div>
			<img
				class="current_folder_note_menu_button"
				src={menu}
				onMouseDown={() => {
                    // console.log(note.title)
                    // let selectedNote = vars.currentFolder.notes[note]
					setState.setInput(note.title)
					setState.setRenderCurrentFolder(['editNote',note.title])

				}}
			/>
		</div>
	)
}
