import React, { useRef, useEffect } from 'react'
import '../styles/home.css'
import menuButton from '../images/menu.svg'
import HomeFolderMenu from './HomeFolderMenu'
import HomeFolderSubMenu from './HomeFolderSubMenu'

export default function Home({ state, setState, vars, Folder }) {
	let home_add_folder_input = useRef()

	// console.log(state.toggleHomeFolderMenu)

	useEffect(() => {
		function toggleMenuOff(e) {
			//TOGGLES THE FOLDER MENU OFF
			if (
				e.target.className !== 'home_folder_menu' &&
				e.target.className !== 'home_folder_menu_color' &&
				e.target.className !== 'home_folder_menu_color_option' &&
				e.target.className !== 'home_folder_menu_options' &&
				e.target.className !== 'menuButton home' &&
				e.target.className !== 'home_folder_title_rename_input'
			) {
				setState.setToggleHomeFolderMenu(false)
			}
		}
		document.addEventListener('mousedown', toggleMenuOff)
		return () => {
			document.removeEventListener('mousedown', toggleMenuOff)
		}
	}, [])

	let homeFolders = () => {
		//HOME FOLDERS
		if (Object.keys(state.folders).length > 0) {
			return Object.keys(state.folders).map((item) => {
				let newArr = [item]
				return (
					<div //HOME FOLDER
						class="home_folder"
						onMouseDown={(e) => {
							if (
								// IDENTIFIES WHAT IS BEING CLICKED WITHIN FOLDER
								e.target.className == 'home_folder' ||
								e.target.className == 'home_folder_title'
								
							) {
								if (!state.toggleHomeFolderMenu) { //ENSURES THE MENU ISNT OPEN
								let newArr = [item]
									setState.setDirectory(newArr) //ADDS TO DIRECTORY IN STATE WHICH LOADS NEW FOLDER
								}
							} else if (e.target.className == 'menuButton home') {
								setState.setToggleHomeFolderMenu([item]) //TOGGLES THE FOLDER MENU
							}
						}}
						style={{
							//STYLING
							border: '5px ' + state.folders[item].folderColor + ' solid',
						}}>
						{state.toggleHomeFolderMenu && // FOLDER TITLE AREA
						state.toggleHomeFolderMenu[0] == item &&
						state.toggleHomeFolderMenu[1] == 'rename' ? (
							<input
								class="home_folder_title_rename_input"
								type="text"
								style={{ color: 'black' }}></input> //LOADS INPUT TEXT WITHIN FOLDER
						) : (
							<h3 class="home_folder_title">
								{state.folders[item].name.toUpperCase()}
							</h3>
						)}

						<img class="menuButton home" src={menuButton} />

						{state.toggleHomeFolderMenu &&
							item == state.toggleHomeFolderMenu[0] &&
							state.toggleHomeFolderMenu[1] !== 'rename' && ( //LOADS THE FOLDER MENU AND SUB MENU
								<HomeFolderMenu
									folder={item}
									state={state}
									setState={setState}
									vars={vars}
								/>
							)}
						{state.toggleHomeFolderMenu &&
							item == state.toggleHomeFolderMenu[0] &&
							state.toggleHomeFolderMenu[1] == 'color' && (
								<HomeFolderSubMenu
									folder={item}
									state={state}
									setState={setState}
									vars={vars}
								/>
							)}
					</div>
				)
			})
		} else {
			return (
				<div>
					<h3>NO FOLDERS</h3>
				</div>
			)
		}
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
		<div class="home">
			<div class="home_header">
				<h1>HOME</h1>
				{addFolderInput}
			</div>

			{homeFolders()}
		</div>
	)
}
