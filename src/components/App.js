import React, { useEffect, useState, useRef } from 'react'
import tempFolders from '../variables/folders'
// import CurrentFolder from './CurrentFolder/CurrentFolder'
import Home from './Home/Home'
import MainSection from 'components/CurrentFolder/MainSection'
// import './styles/current_folder.css'
import AddNote from 'components/CurrentFolder/MainSection'
import EditNote from 'components/CurrentFolder/MainSection'
import DeleteNote from 'components/CurrentFolder/MainSection'
import ViewNote from 'components/CurrentFolder/MainSection'
import CurrentFolder from './CurrentFolder/CurrentFolder'

// import {AddNote,MainSection,EditNote, DeleteNote,ViewNote} from './components/CurrentFolder'

function App() {
	// STATE & USEREF
	// let [directory, setDirectory] = useState([]) //ORIGINAL
	let [directory, setDirectory] = useState(['Introduction'])
	// let [folders, setFolders] = useState({}) //ORIGINAL
	let [folders, setFolders] = useState(tempFolders)
	let [input, setInput] = useState()
	let [content, setContent] = useState()
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
	let [renderCurrentFolder, setRenderCurrentFolder] = useState([
		'mainSection',
		'header',
	])
	let [notesScrolling, setNotesScrolling] = useState(false)
	let [foldersScrolling, setFoldersScrolling] = useState(false)
	let [render2, setRender2] = useState(true)

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
		content,
		render2,
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
		setContent,
		setRender2,
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
		foldersScrolling: false,
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
	*/

	// console.log( vars.foldersScrolling )
	// console.log( foldersScrolling )
	// console.log(currentFolder.notes)
	// console.log(folders)
	// console.log(currentFolderMainSection)
	console.log( renderCurrentFolder,'renderCurrentFolder')

	
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
			{/* {directory.length > 0 &&state.renderCurrentFolder.indexOf('mainSection') > -1 && (
				<MainSection
					state={state}
					setState={setState}
					vars={vars}
					Note={Note}
				/>
			)}
			{directory.length > 0 &&state.renderCurrentFolder.indexOf('addNote') > -1 && (
				<AddNote state={state} setState={setState} vars={vars} Note={Note} />
			)}
			{directory.length > 0 &&state.renderCurrentFolder.indexOf('editNote') > -1 && (
				<EditNote state={state} setState={setState} vars={vars} Note={Note} />
			)}{' '}
			{directory.length > 0 &&state.renderCurrentFolder.indexOf('deleteNote') > -1 && (
				<DeleteNote state={state} setState={setState} vars={vars} />
			)}
			{directory.length > 0 &&state.renderCurrentFolder.indexOf('viewNote') > -1 && (
				<ViewNote state={state} setState={setState} vars={vars} />
			)} */}
		</div>
	)
}

export default App
