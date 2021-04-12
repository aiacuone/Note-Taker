import React, { useEffect, useState, useRef } from 'react'
// import folders from '../variables/folders'
import CurrentFolder from './CurrentFolder/CurrentFolder'
import Home from './Home/Home'
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
					content: 'This is the contentLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. In auctor lobortis lacus. Quisque libero metus, condimentum nec, tempor a,',
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
			{currentFolderMainSection.indexOf('addNote') > -1 && (
				<AddNote state={state} setState={setState} vars={vars} Note={Note} />
			)}
		</div>
	)
}

export default App
