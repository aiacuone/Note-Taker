import React, { useRef,useEffect } from 'react'
import FoldersSection from './FoldersSection'
import _ from 'lodash'

export default function Header({
	state = { state },
	setState = { setState },
    vars = { vars },
    Folder
}) {

    // let currentFolder = vars.currentFolder
    // let directoryChain = vars.directoryChain
    
    useEffect(() => {
		//resets the add folder input value if not clicked within the input field
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
		//handles enter button
		function handleEnter(e) {
			if (e.key == 'Enter' && state.currentFolderAddFolderInput) {
				add_folder_input.current.value = null
				let newFolders = { ...state.folders }
				let newObj = { ...vars.currentFolder.folders }
				newObj[state.currentFolderAddFolderInput] = new Folder({
					name: state.currentFolderAddFolderInput,
					dateCreated: Date.now(),
				})
				let newDirectoryChain = [...vars.directoryChain(), 'folders']
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
	let add_folder_input = useRef()

	let navigationBar = (
		<div class="current_page_nav">
			{/* <h3
				onClick={() => {
					let arr = [...state.directory]
					arr.splice(arr.length - 1, 1)
					setState.setDirectory(arr)
				}}
				class="current_page_nav_button back">
				BACK
			</h3> */}
			<h3
				onClick={() => {
					setState.setDirectory([])
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
		<div class="current_folder_header">
			{navigationBar}
			{addFolderInput}
			{/* {foldersSection()} */}
			<FoldersSection state={state} setState={setState} vars={vars} />
		</div>
	)
}
