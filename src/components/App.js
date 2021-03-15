import React, { useEffect, useState } from 'react'
import Folders from './Folders'
import AddFolderInput from './AddFolderInput'
import ConfirmAlert from './ConfirmAlert'

function App() {
	let [currentFolder, setCurrentFolder] = useState()
	let [folderInput, setFolderInput] = useState()
	let [folders, setFolders] = useState({})

	let state = { currentFolder, folderInput, folders }
	let setState = { setCurrentFolder, setFolderInput, setFolders }

	useEffect(() => {
		let data = localStorage.getItem('folders')
		if (data) {
			setFolders(JSON.parse(data))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('folders', JSON.stringify(folders))
	},[folders])

	return (
		<div className="App">
			<AddFolderInput state={state} setState={setState} />
			<Folders state={state} setState={setState} />
		</div>
	)
}

export default App
