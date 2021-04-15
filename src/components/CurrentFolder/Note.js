import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import menu from 'images/menu.svg'

export default function Note({ state, setState, vars, note }) {
	
	function handleClick() {
		setState.setRenderCurrentFolder(['viewNote'])
	}
	return (
		<div class="curret_page_note" onClick={handleClick }>
			<h1 class="curret_page_note_title">{note.title.toUpperCase()}</h1>
			<div class="curret_page_note_text">{ReactHtmlParser(note.content)}</div>
			<img
				class="current_folder_note_menu_button"
				src={menu}
				onMouseDown={() => {
					setState.setInput(note.title)
					setState.setRenderCurrentFolder(['editNote',note.title])

				}}
			/>
		</div>
	)
}
