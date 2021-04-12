import React from 'react'
import SelectedFolderSettings from './SelectedFolderSettings'
import Notes from './Notes'
import AddFolder from './AddFolder'

export default function MainSection({ state, setState, vars, Note }) {
	return (
		<div class="main_section_container">
			{state.currentFolderMainSection[0] == 'notes' && (
				<Notes state={state} setState={setState} vars={vars} />
			)}
			{state.currentFolderMainSection[0] === 'folderSettings' && (
				<SelectedFolderSettings state={state} setState={setState} vars={vars} />
			)}
			{state.currentFolderMainSection[0] === 'addFolder' && (
				<AddFolder state={state} setState={setState} vars={vars} />
			)}
		</div>
	)
}
