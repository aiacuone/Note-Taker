import React, { useEffect, useState, useRef } from 'react'
// import folders from '../variables/folders'
import CurrentFolder from './CurrentFolder'
import Home from './Home'

function App() {
	// STATE & USEREF

	let [directory, setDirectory] = useState([])
	let [folders, setFolders] = useState({})
	let [toggleHomeFolderMenu, setToggleHomeFolderMenu] = useState(null)

	let state = { directory, folders, toggleHomeFolderMenu }
	let setState = {
		setDirectory,
		setFolders,
		setToggleHomeFolderMenu,
	}

	// CREATES THE ACTUAL DIRECTORY THROUGH THE FOLDERS OBJECT

	let directoryChain = () => {
		let arr = []
		directory.map((folder, index) => {
			index == 0 ? arr.push(folder) : arr.push('folders', folder)
		})
		return arr
	}

	// AN OBJECT OF THE CURRENT FOLDER, USING THE DIRECTORY CHAIN

	let currentFolder = directoryChain().reduce((a, b) => {
		return a[b]
	}, folders)

	// CONSTRUCTOR METHOD TO CREATE NEW FOLDER

	function Folder({ name, dateCreated }) {
		this.name = name
		this.dateCreated = dateCreated
		this.lastSelected = ''
		this.timesSelected = 0
		this.background = ''
		this.folders = {}
		this.notes = {}
		this.folderColor = 'grey'
	}

	// GLOBAL VARIABLES

	let vars = {
		directoryChain,
		currentFolder,
		colors: [
			'purple',
			'rgb(55, 194, 180)',
			'green',
			'grey',
			'rgb(240, 171, 43)',
			'rgb(127, 66, 184)',
			'rgb(28, 73, 197)',
			'olive',
		],
	}

	return (
		<div className="app">
			{directory.length == 0 && (
				<Home state={state} setState={setState} vars={vars} Folder={Folder} />
			)}
			{directory.length > 0 && (
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
