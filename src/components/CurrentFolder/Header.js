import React from 'react'
import FoldersSection from './FoldersSection'
// import _ from 'lodash'
import NotesNav from './NotesNav'

export default function Header({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	return (
		<div class="current_folder_header">

			<NotesNav state={state} setState={setState} vars={vars} />
			{/* {Object.keys(vars.currentFolder.folders).length > 0 && (
				<FoldersSection state={state} setState={setState} vars={vars} />
			)} */}
		</div>
	)
}
