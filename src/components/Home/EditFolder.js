import React, { useEffect } from 'react'
import AddFolderColors from './AddFolderColors'
import AddFolderColors2 from './AddFolderColors2'
import NoteNameWarning from 'components/CurrentFolder/NoteNameWarning'
import _ from 'lodash'

export default function EditFolder({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	function handleExit(e) {
		if (e.target.className == 'home') {
			setState.setHomeRender(['folders'])
			setState.setInput()
		}
	}

	let selectedFolder = state.homeRender[2]
	let selectedColor = state.homeRender[1]

	useEffect(() => {
		setState.setInput(selectedFolder)

		document.addEventListener('mousedown', handleExit)

		return () => {
			document.removeEventListener('mousedown', handleExit)
		}
	}, [])

	useEffect(() => {
		function handleEnter(e) {
			if (e.key == 'Enter') {
				handleEdit()
			}
		}
		document.addEventListener('keydown', handleEnter)

		return () => {
			document.removeEventListener('keydown', handleEnter)
		}
	}, [state.input,state.homeRender])

	let error = () => {
		if (state.input) {
			if (
				state.folders[state.input.toLowerCase()] ||
				state.input.length > 15 ||
				state.input.length == 0
			) {
				return true
			}
		} else {
			return false
		}
	}

	function handleEdit() {
		if (state.input.length > 0) {
			console.log(state.input.length)
			let newFolders = { ...state.folders }
			if (!error() && state.input !== selectedFolder) {
				newFolders[state.input] = newFolders[selectedFolder]
				newFolders[state.input].name = state.input
				delete newFolders[selectedFolder]
			}
			newFolders[state.input].folderColor = selectedColor
			setState.setFolders(newFolders)
			setState.setHomeRender(['folders'])
			setState.setInput('')
		}
	}

	return (
		<div class="home_add_folder">
			<h1 class="home_add_folder_title">EDIT FOLDER</h1>
			<AddFolderColors state={state} setState={setState} vars={vars} />
			<div class="home_add_folder_input_wrapper">
				<input
					class="home_add_folder_input"
					autoFocus
					type="text"
					value={state.input && state.input.toUpperCase()}
					onChange={(e) => setState.setInput(e.target.value.toLowerCase())}
					style={{ textAlign: 'center' }}
					placeholder="Title"
				/>
				{error() && state.input !== selectedFolder && (
					<NoteNameWarning state={state} setState={setState} vars={vars} />
				)}
			</div>
			<AddFolderColors2 state={state} setState={setState} vars={vars} />
			<p class="home_edit_folder_edit" onClick={handleEdit}>
				EDIT
			</p>
		</div>
	)
}
