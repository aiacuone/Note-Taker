import React, { useEffect, useState, useRef } from 'react'
// import folders from '../variables/folders'
import CurrentFolder from './CurrentFolder/CurrentFolder'
import Home from './Home'
import AddNote from './CurrentFolder/AddNote'

function App() {
	// STATE & USEREF
	// let [directory, setDirectory] = useState([]) //ORIGINAL
	let [directory, setDirectory] = useState(['steve'])
	// let [folders, setFolders] = useState({}) //ORIGINAL
	let [folders, setFolders] = useState({
		steve: {
			name: 'steve',
			dateCreated: Date.now(),
			lastSelected: Date.now(),
			timesSelected: 1,
			background: '',
			folders: {},
			notes: {
				'title 1': {
					title: 'title 1',
					dateCreated: Date.now(),
					lastSelected: '',
					timesSelected: 0,
					noteOutline: 'grey',
					content: 'This is the content',
				},
				'title 2': {
					title: 'title 2',
					dateCreated: Date.now(),
					lastSelected: '',
					timesSelected: 0,
					noteOutline: 'grey',
					content: 'This is the content',
				},
			},
			folderColor: 'grey',
			sortFolders: 'RECENT',
			sortNotes: 'date',
		},
	})
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
	let [addNoteInput, setAddNoteInput] = useState('')
	let [addNoteContent, setAddNoteContent] = useState()
	let [renderCurrentFolder, setRenderCurrentFolder] = useState(['mainSection', 'header'])
	let [notesScrolling,setNotesScrolling]=useState(false)

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
		addNoteInput,
		addNoteContent,
		renderCurrentFolder,
		notesScrolling,
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
		setAddNoteInput,
		setAddNoteContent,
		setRenderCurrentFolder,
		setNotesScrolling,
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
	}

	window.oncontextmenu = function (event) {
		//STOPS LONG PRESS MENU COMING UP
		event.preventDefault()
		event.stopPropagation()
		return false
	}


	return (
		<div className="app">
			{/* {directory.length == 0 && (
				<Home state={state} setState={setState} vars={vars} Folder={Folder} />
			)} */}
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
			{currentFolderMainSection.indexOf('addNote') > -1 && (
				<AddNote state={state} setState={setState} vars={vars} Note={Note} />
			)}
		</div>
	)
}

export default App
