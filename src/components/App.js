import React, { useEffect, useState } from 'react'
import Folders from './Folders'
import AddFolderInput from './AddFolderInput'
import Directory from './Directory'
import HomePreferences from './HomePreferences'
import CurrentFolder from './CurrentFolder'

function App() {
	let [currentFolder, setCurrentFolder] = useState()
	let [folderInput, setFolderInput] = useState()
	let [folders, setFolders] = useState({})
	let [homePreferences, setHomePreferences] = useState({
		folderSize: 80,
		sortBy: 'used',
	})

	let state = { currentFolder, folderInput, folders, homePreferences }
	let setState = {
		setCurrentFolder,
		setFolderInput,
		setFolders,
		setHomePreferences,
	}

	useEffect(() => {
		let useEffectFolders = localStorage.getItem('folders')
		if (useEffectFolders) {
			setFolders(JSON.parse(useEffectFolders))
		}

		let useEffectPreferences = localStorage.getItem('homePreferences')
		if (useEffectPreferences) {
			setHomePreferences(JSON.parse(useEffectPreferences))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('folders', JSON.stringify(folders))
	}, [folders])

	useEffect(() => {
		localStorage.setItem('homePreferences', JSON.stringify(homePreferences))
	}, [homePreferences])

	// console.log(preferences)
	// console.log(folders)

	// localStorage.clear()

	/******* TIMES SELECTED ******/
	// Object.keys(folders).map((item) => {
	// 	console.log(folders[item].timesSelected,item)
	// })

	// console.log(folders.jin.timesSelected)
	// console.log(currentFolder)
	return (
		<div className="app">
			
			{!currentFolder && <button onClick={() => localStorage.clear()}>CLEAR LOCAL STORAGE</button>}
			{!currentFolder && <HomePreferences state={state} setState={setState} />}
			{!currentFolder && <AddFolderInput state={state} setState={setState} />}			
			{/* {!currentFolder && <Directory state={state} setState={setState} />} */}
			{!currentFolder && <Folders state={state} setState={setState} />}
			{/* {currentFolder && <button onClick={() => setCurrentFolder()}>HOME</button>} */}
			{currentFolder && <CurrentFolder state={state} setState={setState}/>}
		</div>
	)
}

export default App
