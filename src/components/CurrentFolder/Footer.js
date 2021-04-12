import React from 'react'
import AddNoteButton from './AddNoteButton'
import menu from 'images/menu.svg'

export default function Footer({ state, setState, vars }) {
	return (
		<div class="current_folder_footer">
            <AddNoteButton state={state} setState={setState} vars={vars} />
            <img class='current_folder_footer_menu_button' src={ menu}/>
		</div>
	)
}
