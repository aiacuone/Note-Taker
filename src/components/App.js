import React, { useEffect, useState, useRef } from 'react'
import tempFolders from '../variables/folders'
import CurrentFolder from './CurrentFolder/CurrentFolder'
import Home from './Home/Home'


function App() {
	// STATE & USEREF
	// let [directory, setDirectory] = useState([]) //ORIGINAL
	let [directory, setDirectory] = useState(['Introduction'])
	// let [folders, setFolders] = useState({}) //ORIGINAL
	let [folders, setFolders] = useState(tempFolders)
	let [input, setInput] = useState()
	let [content,setContent]=useState()
	//APP
	// let [renderApp,setRenderApp]=useState([])
	//HOME
	let [toggleHomeFolderMenu, setToggleHomeFolderMenu] = useState(null)
	let [homeAddFolderInput, setHomeAddFolderInput] = useState('')
	let [homeRenameFolderInput, setHomeRenameFolderInput] = useState('')
	let [homeFoldersSettings, setHomeFoldersSettings] = useState(null)
	let [sortHomeFolders, setSortHomeFolders] = useState('DATE CREATED')
	//CURRENT FOLDER
	let [currentFolderAddFolderInput, setCurrentFolderAddFolderInput] = useState(
		''
	)
	let [currentFolderMainSection, setCurrentFolderMainSection] = useState([
		'notes',
	])
	let [
		currentFolderSelectedFolderRenameInput,
		setCurrentFolderSelectedFolderRenameInput,
	] = useState('')
	let [addNoteContent, setAddNoteContent] = useState()
	let [renderCurrentFolder, setRenderCurrentFolder] = useState(['mainSection', 'header'])
	let [notesScrolling, setNotesScrolling] = useState(false)
	let [foldersScrolling,setFoldersScrolling]=useState(false)
	

	let state = {
		directory,
		folders,
		toggleHomeFolderMenu,
		homeAddFolderInput,
		homeRenameFolderInput,
		homeFoldersSettings,
		sortHomeFolders,
		currentFolderAddFolderInput,
		currentFolderMainSection,
		currentFolderSelectedFolderRenameInput,
		addNoteContent,
		renderCurrentFolder,
		notesScrolling,
		foldersScrolling,
		input,
		content
	}
	let setState = {
		setDirectory,
		setFolders,
		setToggleHomeFolderMenu,
		setHomeAddFolderInput,
		setHomeRenameFolderInput,
		setHomeFoldersSettings,
		setSortHomeFolders,
		setCurrentFolderAddFolderInput,
		setCurrentFolderMainSection,
		setCurrentFolderSelectedFolderRenameInput,
		setAddNoteContent,
		setRenderCurrentFolder,
		setNotesScrolling,
		setFoldersScrolling,
		setInput,
		setContent
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
		this.sortFolders = 'NAME'
		this.sortNotes = 'date'
	}

	// CONSTRUCTOR METHOD TO CREATE NEW FOLDER
	function Note({ title, dateCreated, content }) {
		this.title = title
		this.dateCreated = dateCreated
		this.lastSelected = ''
		this.timesSelected = 0
		this.noteOutline = 'grey'
		this.content = content
		// this.sortFolders = 'NAME'
		// this.background = ''
		// this.folders = {}
		// this.notes = null
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
		Note,
		Folder,
		foldersScrolling:false,
	}

	window.oncontextmenu = function (event) {
		//STOPS LONG PRESS MENU COMING UP
		event.preventDefault()
		event.stopPropagation()
		return false
	}

	/*
	BUGS
	- folders section scrolling
	- notes scrolling, as well as mouse down scrolling
	- need to limit title for notes and folders
	- restrict folder and note titles to letters and numbers only
	- when opening note, randomly goes back to notes?

	*/

	// console.log( vars.foldersScrolling )
	// console.log( foldersScrolling )
	// console.log(currentFolder.notes)
	// console.log(folders)
	// console.log(currentFolderMainSection)
	// console.log( renderCurrentFolder,'renderCurrentFolder')

	return (
		<div className="app">
			{directory.length == 0 && (
				<Home state={state} setState={setState} vars={vars} Folder={Folder} />
			)}
			{directory.length > 0 &&
				currentFolderMainSection.indexOf('addNote') < 0 && (
					<CurrentFolder
						state={state}
						setState={setState}
						vars={vars}
						Folder={Folder}
						Note={Note}
					/>
				)}

		</div>
	)
}

export default App



