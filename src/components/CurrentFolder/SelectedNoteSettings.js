import React, { useEffect } from 'react'
import DeleteNote from './DeleteNote'
import RenameNote from './RenameNote'

export default function SelectedNoteSettings({ state, setState, vars }) {
	let arr = ['edit', 'rename', 'delete']
	let buttons = arr.map((item) => {
		return (
			<div
				key={item}
				class={'current_folder_note_settings_button ' + item}
				onClick={() => {
					let newArr = [...state.currentFolderMainSection]
					newArr[2] = item
					setState.setCurrentFolderMainSection(newArr)
				}}>
				{item.toUpperCase()}
			</div>
		)
	})

	useEffect(() => {
		function handleMouseDown(e) {
			if (
				e.target.className !== 'current_folder_note_settings_button rename' &&
				e.target.className !== 'current_folder_note_settings_button edit' &&
				e.target.className !== 'current_folder_note_settings_button delete' &&
				e.target.className !== 'current_folder_rename_note_input' &&
				e.target.className !== 'current_folder_rename_note_button' &&
				e.target.className !== 'current_folder_delete_note_confirm yes'
			) {
				setState.setCurrentFolderMainSection(['notes'])
			}
		}

		document.addEventListener('mousedown', handleMouseDown)
		return () => {
			document.removeEventListener('mousedown', handleMouseDown)
		}
	})

	if (state.currentFolderMainSection.indexOf('edit') > -1) {
		setState.setRenderCurrentFolder(['editNote'])
		let selectedNote = state.currentFolderMainSection[1]
		let currentNote = vars.currentFolder.notes[selectedNote]
		setState.setInput(currentNote.title)
	}

	return (
		<div class="current_folder_note_settings">
			{state.currentFolderMainSection.length == 2 && buttons}
			{state.currentFolderMainSection.indexOf('delete') > -1 && (
				<DeleteNote state={state} setState={setState} vars={vars} />
			)}
			{state.currentFolderMainSection.indexOf('rename') > -1 && (
				<RenameNote state={state} setState={setState} vars={vars} />
			)}
		</div>
	)
}
