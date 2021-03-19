import React, {useRef } from 'react'
import '../styles/home.css'
export default function Home({ state, setState, vars,Folder }) {

    let home_add_folder_input = useRef()

	let homeFolders
	if (Object.keys(state.folders).length > 0) {
		homeFolders = Object.keys(state.folders).map((item) => {
			return (
				<div
					onClick={() => {
						let newArr = [item]
						setState.setDirectory(newArr)
					}}
					class="home_folder">
					<h3 class="home_folder_title">
						{state.folders[item].name.toUpperCase()}
					</h3>
				</div>
			)
		})
	} else {
		homeFolders = (
			<div>
				<h3>NO FOLDERS</h3>
			</div>
		)
    }
    
    let addFolderInput = (
		<>
			<input
				ref={home_add_folder_input}
				class="home_add_folder"
				type="text"
				placeholder="Folder Name..."></input>
			<button
				onClick={() => {
					let newObj = { ...state.folders }
					newObj[home_add_folder_input.current.value] = new Folder({
						name: home_add_folder_input.current.value,
						dateCreated: Date.now(),
					})
					setState.setFolders(newObj)
				}}>
				ADD FOLDER
			</button>
		</>
	)

	return (
		<div class='home'>
            <h3>HOME</h3>
            {addFolderInput}
            {homeFolders}
		</div>
	)
}
