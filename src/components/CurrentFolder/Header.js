import React from 'react'
import FoldersSection from './FoldersSection'
import _ from 'lodash'
import settingsIcon from './images/settings.svg'
import NotesNav from './NotesNav'

export default function Header({
	state = { state },
	setState = { setState },
	vars = { vars },
	Folder,
}) {
	let navigationBar = (
		<div class="current_page_nav">
			<h3
				onClick={() => {
					setState.setDirectory([])
				}}
				class="current_page_nav_button home_nav">
				HOME
			</h3>
			<img class="settings_icon" src={settingsIcon}></img>
		</div>
	)

	return (
		<div class="current_folder_header">
			{navigationBar}
			<NotesNav state={state} setState={setState} vars={vars} />
			<FoldersSection state={state} setState={setState} vars={vars} />
		</div>
	)
}
