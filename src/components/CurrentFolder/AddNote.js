import React, { useEffect } from 'react'
import Sun_Editor from './Sun_Editor'
import _ from 'lodash'

export default function AddNote({ state, setState, vars }) {
	return (
		<div class="add_note_container">
			<input
				class="add_note_input"
				placeHolder="TITLE"
				type="text"
				onChange={(e) => setState.setAddNoteInput(e.target.value.toUpperCase())}
				value={state.addNoteInput}
				pattern="[a-zA-Z0-9-]+"
				required
			/>
			<Sun_Editor state={state} setState={setState} vars={vars} />

			<p
				class="add_button_submit"
				onClick={() => {
					let newFolders = { ...state.folders }
					let newNotes = { ...vars.currentFolder.notes }

					newNotes[state.addNoteInput.toLowerCase()] = new vars.Note({
						title: state.addNoteInput.toLowerCase(),
						dateCreated: Date.now(),
						content: state.addNoteContent,
					})
					let newDirectoryChain = [...vars.directoryChain(), 'notes']
					_.set(newFolders, newDirectoryChain.join('.'), newNotes)
					setState.setFolders(newFolders)
					setState.setAddNoteInput('')
					setState.setAddNoteContent('')
					setState.setRenderCurrentFolder(['mainSection', 'header'])
				}}>
				ADD NOTE
			</p>
			<p
				onClick={() =>
					setState.setRenderCurrentFolder(['mainSection', 'header'])
				}
				class="add_note_exit_button">
				EXIT
			</p>
		</div>
	)
}
