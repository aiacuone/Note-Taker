import React, { useEffect } from 'react'
import Sun_Editor from './Sun_Editor'
import _ from 'lodash'
import NoteExit from './NoteExit'
import NoteNameWarning from './NoteNameWarning'

export default function AddNote({ state, setState, vars }) {
	useEffect(() => {
		function handleMouseDown(e) {
			if (e.target.className == 'add_note_container') {
				setState.setRenderCurrentFolder(['addNote', 'exit'])
			}
		}

		document.addEventListener('mousedown', handleMouseDown)
		return () => {
			document.addEventListener('mousedown', handleMouseDown)
		}
	})

	let error = () => {
		if (state.input) {
			if (
				vars.currentFolder.notes[state.input.toLowerCase()] ||
				state.input.length > 20
			) {
				return true
			}
		} else {
			return false
		}
	}

	return (
		<div class="add_note_container">
			<div class="add_note_input_wrapper">
				<input
					class="add_note_input"
					placeHolder="TITLE"
					type="text"
					onChange={(e) => setState.setInput(e.target.value.toUpperCase())}
					value={state.input}
					pattern="[a-zA-Z0-9-]+"
					required
				/>
				{error() && (
					<NoteNameWarning state={state} setState={setState} vars={vars} />
				)}
			</div>
			<Sun_Editor state={state} setState={setState} vars={vars} />

			<p
				class="add_button_submit"
				onClick={() => {
					if (!error()) {
						let newFolders = { ...state.folders }
						let newNotes = { ...vars.currentFolder.notes }

						newNotes[state.input.toLowerCase()] = new vars.Note({
							title: state.input.toLowerCase(),
							dateCreated: Date.now(),
							content: state.addNoteContent,
						})
						let newDirectoryChain = [...vars.directoryChain(), 'notes']
						_.set(newFolders, newDirectoryChain.join('.'), newNotes)
						setState.setFolders(newFolders)
						setState.setInput('')
						setState.setAddNoteContent('')
						setState.setRenderCurrentFolder(['mainSection', 'header'])
					}
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
			{state.renderCurrentFolder.indexOf('exit') > -1 && (
				<NoteExit state={state} setState={setState} vars={vars} />
			)}
		</div>
	)
}
