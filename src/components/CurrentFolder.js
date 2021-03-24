import React, { useRef, useEffect } from 'react'
import '../styles/current_page.css'
import _ from 'lodash'

export default function CurrentFolder({ state, setState, vars, Folder }) {
	//USEREF
	let add_folder_input = useRef()
	//VARIABLES
	let currentFolder = vars.currentFolder
	let directoryChain = vars.directoryChain
	console.log(directoryChain())

	useEffect(() => {
		function handleMouseDown(e) {
			if (
				e.target.className !== 'current_page_add_folder_input' &&
				state.currentFolderAddFolderInput
			) {
				add_folder_input.current.placeholder = 'Add Folder'
				setState.setCurrentFolderAddFolderInput('')
			}
		}

		document.addEventListener('mousedown', handleMouseDown)
		return () => {
			document.removeEventListener('mousedown', handleMouseDown)
		}
	}, [state.currentFolderAddFolderInput])

	useEffect(() => {
		function handleEnter(e) {
			if (e.key == 'Enter' && state.currentFolderAddFolderInput) {
				add_folder_input.current.value = null
				let newFolders = { ...state.folders }
				let newObj = { ...vars.currentFolder.folders }
				newObj[state.currentFolderAddFolderInput] = new Folder({
					name: state.currentFolderAddFolderInput,
					dateCreated: Date.now(),
				})
				let newDirectoryChain = [...directoryChain(), 'folders']
				_.set(newFolders, newDirectoryChain.join('.'), newObj)
				setState.setFolders(newFolders)
				setState.setCurrentFolderAddFolderInput('')
			}
		}

		document.addEventListener('keydown', handleEnter)
		return () => {
			document.removeEventListener('keydown', handleEnter)
		}
	}, [state.currentFolderAddFolderInput])

	let foldersSelect = Object.keys(vars.currentFolder.folders).map((folder) => {
		return (
			<div
				onClick={() => {
					let arr = [...state.directory]
					arr.push(folder)
					setState.setDirectory(arr)
				}}
				class="current_page_folder_menu_folder">
				<h3 class="current_page_folder_menu_title">{folder.toUpperCase()}</h3>
			</div>
		)
	})

	let pageNotes
	if (vars.currentFolder.notes) {
		pageNotes = Object.keys(vars.currentFolder.notes).map((note) => {
			return (
				<div class="curret_page_note">
					<h3 class="curret_page_note_title">
						{state.currentFolder.notes[note].title}
					</h3>
					<p class="curret_page_note_text">
						{state.currentFolder.notes[note].text}
					</p>
				</div>
			)
		})
	} else {
		pageNotes = (
			<div class="curret_page_note">
				<h3 class="curret_page_note_text">NO NOTES</h3>
			</div>
		)
	}

	let navigationBar = (
		<div class="current_page_nav">
			<h3
				onClick={() => {
					let arr = [...state.directory]
					arr.splice(arr.length - 1, 1)
					// console.log(arr)
					setState.setDirectory(arr)
				}}
				class="current_page_nav_button back">
				BACK
			</h3>
			<h3
				onClick={() => {
					setState.setDirectory([])
					// console.log('home')
				}}
				class="current_page_nav_button home_nav">
				HOME
			</h3>
		</div>
	)

	let addFolderInput = (
		<div class="current_page_add_folder_input_container">
			<input
				class="current_page_add_folder_input"
				onChange={(e) =>
					setState.setCurrentFolderAddFolderInput(e.target.value)
				}
				ref={add_folder_input}
				placeholder="Add Folder"
				type="text"
				value={state.currentFolderAddFolderInput}></input>
		</div>
	)

	return (
		<div class="current_page">
			<div class="current_folder_header">{addFolderInput}<div class="current_page_folders_container">{foldersSelect}</div></div>
			{navigationBar}

			<h3 class="current_page_title">
				{vars.currentFolder.name.toUpperCase()}
			</h3>
			
			{pageNotes}
		</div>
	)
}
