import React, { useEffect, useState } from 'react'
import folders from '../variables/folders'
import CurrentFolder from './CurrentFolder'

function App() {

	let [directory, setDirectory] = useState([])

	let state = { directory }
	let setState = {setDirectory}

	let directoryChain = []

	directory.map((folder, index) => {
		index == 0
			? directoryChain.push(folder)
			: directoryChain.push('folders', folder)
	})

	let currentFolder = directoryChain.reduce((a, b) => {
		return a[b]
	}, folders)

	function Folder({ name, dateCreated }) {
		this.name = name
		this.dateCreated = dateCreated
		this.lastSelected = ''
		this.timesSelected = 0
		this.background = ''
		this.folders = {}
		this.notes = {}
		this.folderColor=''
	}

	let homeFolders = Object.keys(folders).map((item) => {
		return (
			<div onClick={() => {
				let newArr = [ item ]
				setDirectory(newArr)
			} }class="home_folder">
				<h3 class="home_folder_title">{folders[item].name.toUpperCase()}</h3>
			</div>
		)
	})
	// console.log(currentFolder)
	return (
		<div className="app">
			{directory.length == 0 && homeFolders}
			{directory.length > 0 && (
				<CurrentFolder
					name={currentFolder.name}
					dateCreated={currentFolder.dateCreated}
					lastSelected={currentFolder.lastSelected}
					timesSelected={currentFolder.timesSelected}
					background={currentFolder.background}
					folders={currentFolder.folders}
					notes={currentFolder.notes}
					state={state}
					setState={setState}
				/>
			)}
		</div>
	)
}

export default App
