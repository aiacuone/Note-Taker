import React, { useRef, useEffect } from 'react'
// import SelectedFolderSettings from './SelectedFolderSettings'
// import CurrentFolderNotes from './Note'
// import FolderSelectCurrent from './Folder'
import MainSection from './MainSection'
import './current_page.css'
// import _ from 'lodash'
// import FoldersSection from './FoldersSection'
import Header from './Header'
// import useLongPress from '../hooks/useLongPress'

export default function CurrentFolder({ state, setState, vars, Folder, Note }) {
	//USEREF
	// let add_folder_input = useRef()
	//VARIABLES
	// let currentFolder = vars.currentFolder
	// let directoryChain = vars.directoryChain

	// useEffect(() => {
	// 	//resets the add folder input value if not clicked within the input field
	// 	function handleMouseDown(e) {
	// 		if (
	// 			e.target.className !== 'current_page_add_folder_input' &&
	// 			state.currentFolderAddFolderInput
	// 		) {
	// 			add_folder_input.current.placeholder = 'Add Folder'
	// 			setState.setCurrentFolderAddFolderInput('')
	// 		}
	// 	}

	// 	document.addEventListener('mousedown', handleMouseDown)
	// 	return () => {
	// 		document.removeEventListener('mousedown', handleMouseDown)
	// 	}
	// }, [state.currentFolderAddFolderInput])

	// useEffect(() => {
	// 	//handles enter button
	// 	function handleEnter(e) {
	// 		if (e.key == 'Enter' && state.currentFolderAddFolderInput) {
	// 			add_folder_input.current.value = null
	// 			let newFolders = { ...state.folders }
	// 			let newObj = { ...vars.currentFolder.folders }
	// 			newObj[state.currentFolderAddFolderInput] = new Folder({
	// 				name: state.currentFolderAddFolderInput,
	// 				dateCreated: Date.now(),
	// 			})
	// 			let newDirectoryChain = [...directoryChain(), 'folders']
	// 			_.set(newFolders, newDirectoryChain.join('.'), newObj)
	// 			setState.setFolders(newFolders)
	// 			setState.setCurrentFolderAddFolderInput('')
	// 		}
	// 	}

	// 	document.addEventListener('keydown', handleEnter)
	// 	return () => {
	// 		document.removeEventListener('keydown', handleEnter)
	// 	}
	// }, [state.currentFolderAddFolderInput])

	// let foldersSection = () => {
	// 	let foldersSelect = Object.keys(vars.currentFolder.folders).map(
	// 		(folder) => {
	// 			return (
	// 				<FolderSelectCurrent
	// 					state={state}
	// 					setState={setState}
	// 					vars={vars}
	// 					folder={folder}
	// 				/>
	// 			)
	// 		}
	// 	)
	// 	return <div class="current_page_folders_container">{foldersSelect}</div>
	// }

	// let mainSection = () => {
	// 	let sortedFolders = () => {
	// 		let arr = []
	// 		Object.keys(vars.currentFolder.folders).map((folder) => {
	// 			arr.push(vars.currentFolder.folders[folder])
	// 		})
	// 		if (vars.currentFolder.sortFolders == 'DATE') {
	// 			// console.log('DATE')
	// 			return arr.sort((a, b) => {
	// 				return a['dateCreated'] - b['dateCreated']
	// 			})
	// 		} else if (vars.currentFolder.sortFolders == 'RECENT') {
	// 			// console.log('RECENT')
	// 			return arr
	// 				.sort((a, b) => {
	// 					return a['lastSelected'] - b['lastSelected']
	// 				})
	// 				.reverse()
	// 		} else if (vars.currentFolder.sortFolders == 'NAME') {
	// 			// console.log('NAME')
	// 			return arr.sort((a, b) => {
	// 				if (a['name'] < b['name']) {
	// 					return -1
	// 				}
	// 				if (a['name'] > b['name']) {
	// 					return 1
	// 				}
	// 				return 0
	// 			})
	// 		}
	// 	}

	// 	if (state.currentFolderMainSection[0] == undefined) {
	// 		let notes = currentFolder.notes ? (
	// 			<CurrentFolderNotes
	// 				state={state}
	// 				setState={setState}
	// 				vars={vars}
	// 				sortedFolders={sortedFolders}
	// 			/>
	// 		) : (
	// 			<div class="curret_page_notes">
	// 				<h3 class="curret_page_note_text">NO NOTES</h3>
	// 			</div>
	// 		)
	// 		return (
	// 			<>
	// 				<div class="notes_header">
	// 					<h1 class="current_page_title">
	// 						{vars.currentFolder.name.toUpperCase()}
	// 					</h1>
	// 					<p class="current_page_directory">
	// 						{state.directory.join('-').toUpperCase()}
	// 					</p>
	// 				</div>
	// 				<h3
	// 					onClick={() => {
	// 						let arr = [...state.directory]
	// 						arr.splice(arr.length - 1, 1)
	// 						setState.setDirectory(arr)
	// 					}}
	// 					class="current_page_nav_button back">
	// 					BACK
	// 				</h3>
	// 				{notes}
	// 			</>
	// 		)
	// 	} else if (state.currentFolderMainSection[0] === 'folderSettings') {
	// 		return (
	// 			<SelectedFolderSettings state={state} setState={setState} vars={vars} />
	// 		)
	// 	}
	// }

	// let navigationBar = (
	// 	<div class="current_page_nav">
	// 		{/* <h3
	// 			onClick={() => {
	// 				let arr = [...state.directory]
	// 				arr.splice(arr.length - 1, 1)
	// 				setState.setDirectory(arr)
	// 			}}
	// 			class="current_page_nav_button back">
	// 			BACK
	// 		</h3> */}
	// 		<h3
	// 			onClick={() => {
	// 				setState.setDirectory([])
	// 			}}
	// 			class="current_page_nav_button home_nav">
	// 			HOME
	// 		</h3>
	// 	</div>
	// )

	// let addFolderInput = (
	// 	<div class="current_page_add_folder_input_container">
	// 		<input
	// 			class="current_page_add_folder_input"
	// 			onChange={(e) =>
	// 				setState.setCurrentFolderAddFolderInput(e.target.value)
	// 			}
	// 			ref={add_folder_input}
	// 			placeholder="Add Folder"
	// 			type="text"
	// 			value={state.currentFolderAddFolderInput}></input>
	// 	</div>
	// )

	return (
		<div class="current_page">
			{state.renderCurrentFolder.indexOf('header') > -1 && (
				<Header state={state} setState={setState} vars={vars} Folder={Folder} />
			)}

			{/* <div class="current_folder_header">
				{navigationBar}
				{addFolderInput}
				{/* {foldersSection()} 
				<FoldersSection state={state} setState={setState} vars={vars} />
			</div> */}
			<MainSection state={state} setState={setState} vars={vars} Note={Note} />
			{/* <div class="main_section_container">{mainSection()}</div> */}
		</div>
	)
}
