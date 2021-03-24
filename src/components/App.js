import React, { useEffect, useState, useRef } from 'react'
// import folders from '../variables/folders'
import CurrentFolder from './CurrentFolder'
import Home from './Home'
import settingsIcon from '../images/settings.svg'

function App() {
	// STATE & USEREF
	let [directory, setDirectory] = useState([])
	let [folders, setFolders] = useState({})
	//HOME
	let [toggleHomeFolderMenu, setToggleHomeFolderMenu] = useState(null)
	let [homeAddFolderInput, setHomeAddFolderInput] = useState('')
	let [homeRenameFolderInput, setHomeRenameFolderInput] = useState('')
	let [homeFoldersSettings, setHomeFoldersSettings] = useState(null)
	let [sortHomeFolders, setSortHomeFolders] = useState('DATE CREATED')

	let state = {
		directory,
		folders,
		toggleHomeFolderMenu,
		homeAddFolderInput,
		homeRenameFolderInput,
		homeFoldersSettings,
		sortHomeFolders,
	}
	let setState = {
		setDirectory,
		setFolders,
		setToggleHomeFolderMenu,
		setHomeAddFolderInput,
		setHomeRenameFolderInput,
		setHomeFoldersSettings,
		setSortHomeFolders,
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
			'#ED3A3A', //red
			'#C93AC9', //pink
			'#8E33EF', //light purple
			'#5043C9', //dark purple
			'#355BC9', //blue
			'#2DA1E2', //baby blue
			'#4A8269', //olive
			'#4FC12F', //light green
			'#FFED0D', //yelow
			'#FFA300', //orange
			'#A0A0A0', //grey
			'#000000', //black
		],
		// homeFoldersSort:'DATE CREATED',
	}

	useEffect(() => {
		// console.log('refreshed')
		console.log(vars.homeFoldersSort, 'useEffect')
	})
	// console.log(vars.homeFoldersSort)
	return (
		<div className="app">
			<img class="settings_icon" src={settingsIcon}></img>
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
