import React from 'react'
import FoldersSection from './FoldersSection'
import _ from 'lodash'
import NotesNav from './NotesNav'
import SettingsHeader from './SettingsHeader'

export default function Header({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	return (
		<div class="current_folder_header">
			<SettingsHeader state={state} setState={setState} vars={vars} />
			<NotesNav state={state} setState={setState} vars={vars} />
			{Object.keys(vars.currentFolder.folders).length > 0 && (
				<FoldersSection state={state} setState={setState} vars={vars} />
			)}
		</div>
	)
}
