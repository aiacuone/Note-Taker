import React, { useRef,useState } from 'react'
import '../styles/current_page.css'
import _ from 'lodash';

export default function CurrentFolder({
	state,
	setState,
	vars,
	Folder,
}) {
	//STATE
    let [addFolderInputText, setAddFolderInputText]=useState()
	//USEREF
	let add_folder_input = useRef()
	//VARIABLES
	let currentFolder = vars.currentFolder
	let directoryChain=vars.directoryChain
	console.log(directoryChain())

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
                onChange={(e)=>setAddFolderInputText(e.target.value)}
				ref={add_folder_input}
				class="current_page_add_folder_input_field"
                type="text"></input>
                
			<button
                onClick={() => {
                    add_folder_input.current.value = null
					let newFolders = { ...state.folders }
                    let newObj = {...vars.currentFolder.folders}
					newObj[addFolderInputText] = new Folder({
						name: addFolderInputText,
						dateCreated: Date.now(),
                    })
                    let newDirectoryChain=[...directoryChain(),'folders']
                    _.set(newFolders,newDirectoryChain.join('.'),newObj)
                    setState.setFolders(newFolders)
				}}
				class="current_page_add_folder_input_button">
				ADD FOLDER
			</button>
		</div>
    )

	return (
		<div class="current_page">
			{navigationBar}
			{addFolderInput}
			<h3 class="current_page_title">{vars.currentFolder.name.toUpperCase()}</h3>
			<div class="current_page_folders_container">{foldersSelect}</div>
			{pageNotes}
		</div>
	)
}
