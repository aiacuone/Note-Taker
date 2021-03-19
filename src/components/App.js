import React, { useEffect, useState, useRef } from 'react'
// import folders from '../variables/folders'
import CurrentFolder from './CurrentFolder'
import Home from './Home'

function App() {
	////////////////   STATE & USEREF   /////////////////
	let [directory, setDirectory] = useState([])
	let [folders, setFolders] = useState({})

	let state = { directory, folders }
	let setState = { setDirectory, setFolders }

	// let home_add_folder_input = useRef()

	///////////CREATES THE ACTUAL DIRECTORY THROUGH THE FOLDERS OBJECT//////////
	let directoryChain = []
	directory.map((folder, index) => {
		index == 0
			? directoryChain.push(folder)
			: directoryChain.push('folders', folder)
	})

	////////// LOCATES THE CURRENT FOLDER USING THE DIRECTORY CHAIN /////////////
	// let currentFolder = directoryChain.reduce((a, b) => {
	let currentFolder = directoryChain.reduce((a, b) => {
		return a[b]
	}, folders)

	//////// CONSTRUCTOR METHOD TO CREATE NEW FOLDER ////////////
	function Folder({ name, dateCreated }) {
		this.name = name
		this.dateCreated = dateCreated
		this.lastSelected = ''
		this.timesSelected = 0
		this.background = ''
		this.folders = {}
		this.notes = {}
		this.folderColor = ''
	}

	/////////////CREATES ELEMENTS FOR HOME FOLDERS/////////////
	// let homeFolders
	// if (Object.keys(folders).length > 0) {
	// 	homeFolders = Object.keys(folders).map((item) => {
	// 		return (
	// 			<div
	// 				onClick={() => {
	// 					let newArr = [item]
	// 					// home_add_folder_input.current.value=''
	// 					setDirectory(newArr)
	// 				}}
	// 				class="home_folder">
	// 				<h3 class="home_folder_title">{folders[item].name.toUpperCase()}</h3>
	// 			</div>
	// 		)
	// 	})
	// } else {
	// 	homeFolders = (
	// 		<div>
	// 			<h3>NO FOLDERS</h3>
	// 		</div>
	// 	)
	// }


	///////////////////// VARIABLES /////////////////
	let vars = { directoryChain, currentFolder }

	return (
		<div className="app">
			{directory.length == 0 && (
				<Home state={state} setState={setState} vars={vars} Folder={Folder} />
			)}
			{directory.length > 0 && currentFolder && (
				<CurrentFolder
					state={state}
					setState={setState}
					vars={vars}
					Folder={Folder}
				/>
			)}
		</div>
	)
}

export default App
