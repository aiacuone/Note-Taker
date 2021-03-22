import React, { useEffect, useRef, useFocus } from 'react'
import '../styles/home.css'
import menuButton from '../images/menu.svg'
import HomeFolderMenu from './HomeFolderMenu'
import HomeFolderSubMenu from './HomeFolderSubMenu'
// import RenameInput from './RenameInput'

export default function Home({ state, setState, vars, Folder }) {
	let folder_rename_input = useRef()
	// let [folder_rename_input, focus_folder_rename_input]=useFocus()

	useEffect(() => {

		function addHomeFolderInputClear(e) {
			if (e.target.className!=='home_add_folder') {
				setState.setHomeAddFolderInput('')
			}
		}

		function toggleMenuOff(e) {
			//TOGGLES THE FOLDER MENU OFF
			if (
				e.key !== 'Enter' &&
				e.target.className !== 'home_folder_menu' &&
				e.target.className !== 'home_folder_menu_color' &&
				e.target.className !== 'home_folder_menu_color_option' &&
				e.target.className !== 'home_folder_menu_options' &&
				e.target.className !== 'menuButton home' &&
				e.target.className !== 'home_folder_title_rename_input' &&
				e.target.className !== 'home_folder_delete_confirm' &&
				e.target.className !== 'home_folder_delete_confirm yes' &&
				e.target.className !== 'home_folder_delete_confirm no' &&
				e.target.className !== 'home_rename_folder_input_error' &&
				e.target.className !== 'testbutton'
			) {
				setState.setToggleHomeFolderMenu(null)
				setState.setHomeRenameFolderInput('')
			}
		}

		function enterInput(e) {
			//SUBMITS TEXT OF CREATE HOME FOLDER INPUT
			if (
				//HOME FOLDER ENTER INPUT
				e.key == 'Enter' &&
				state.homeAddFolderInput &&
				!state.folders[state.homeAddFolderInput]
			) {
				let newObj = { ...state.folders }
				newObj[state.homeAddFolderInput] = new Folder({
					name: state.homeAddFolderInput,
					dateCreated: Date.now(),
				})

				setState.setFolders(newObj)
				setState.setHomeAddFolderInput('')
			}
			if (
				//RENAME FOLDER INPUT
				e.key == 'Enter' &&
				!state.folders[state.homeRenameFolderInput] &&
				state.toggleHomeFolderMenu
			) {
				let newFolders = { ...state.folders }
				newFolders[state.toggleHomeFolderMenu[0]].name =
					state.homeRenameFolderInput
				newFolders[state.homeRenameFolderInput] =
					newFolders[state.toggleHomeFolderMenu[0]]
				delete newFolders[state.toggleHomeFolderMenu[0]]
				state.homeRenameFolderInput = null
				setState.setFolders(newFolders)
				setState.setToggleHomeFolderMenu('')
			}
		}
		document.addEventListener('mousedown', addHomeFolderInputClear)
		document.addEventListener('mousedown', toggleMenuOff)
		document.addEventListener('keydown', enterInput)
		return () => {
			document.removeEventListener('mousedown', addHomeFolderInputClear)
			document.removeEventListener('mousedown', toggleMenuOff)
			document.removeEventListener('keydown', enterInput)
		}
	})

	let homeFolders = () => {
		//HOME FOLDERS

		if (Object.keys(state.folders).length > 0) {
			return Object.keys(state.folders).map((item) => {
				let newArr = [item]

				let insideFolder = () => {
					if (
						state.toggleHomeFolderMenu && // FOLDER TITLE AREA
						state.toggleHomeFolderMenu[0] == item &&
						state.toggleHomeFolderMenu[1] == 'rename'
					) {
						return (
							//CANT GET THIS INPUT TO AUTO FOCUS!?!??!
							<>
								<input
									onChange={(e) =>
										setState.setHomeRenameFolderInput(
											e.target.value.toLowerCase()
										)
									}
									value={state.homeRenameFolderInput}
									// autofocus="true"
									// autoFocus
									// autofocus='true'
									// autoFocus={true}
									// autofocus={ true}
									ref={folder_rename_input}
									class="home_folder_title_rename_input"
									type="text"
									style={{ color: 'black' }}></input>
								{/* MY ATTEMPTS SO FAR */}
								{/* <button class='testbutton' onClick={()=> folder_rename_input.current.focus()}>FOCUS</button> */}
								{/* {console.log('focus')} */}
								{/* {folder_rename_input&&folder_rename_input.current&&folder_rename_input.current.focus()} */}
								{/* {folder_rename_input && folder_rename_input.current && console.log('focus')}
								{folder_rename_input && console.log(folder_rename_input)} */}
								{/* {folder_rename_input&&folder_rename_input.current.focus()} */}
								{state.folders[state.homeRenameFolderInput] && (
									<p class="home_rename_folder_input_error">
										Sorry, this name already exists!
									</p>
								)}
							</>
						)
					} else if (
						state.toggleHomeFolderMenu && // FOLDER TITLE AREA
						state.toggleHomeFolderMenu[0] == item &&
						state.toggleHomeFolderMenu[1] == 'delete'
					) {
						return (
							<div class="home_folder_delete_confirm">
								<p
									class="home_folder_delete_confirm yes"
									onMouseDown={() => {
										let newArr = [...state.toggleHomeFolderMenu]
										newArr[2] = 'yes'
										setState.setToggleHomeFolderMenu(newArr)
									}}>
									YES
								</p>
								<p
									class="home_folder_delete_confirm no"
									onMouseDown={() => {
										setState.setToggleHomeFolderMenu(null)
									}}>
									/ NO
								</p>
							</div>
						)
					} else {
						return (
							<h3 class="home_folder_title">
								{state.folders[item].name.toUpperCase()}
							</h3>
						)
					}
				}

				return (
					<div //HOME FOLDER
						class="home_folder"
						onMouseDown={(e) => {
							if (
								// IDENTIFIES WHAT IS BEING CLICKED WITHIN FOLDER
								e.target.className == 'home_folder' ||
								e.target.className == 'home_folder_title'
							) {
								if (!state.toggleHomeFolderMenu) {
									//ENSURES THE MENU ISNT OPEN
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
						{insideFolder()}

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
							state.toggleHomeFolderMenu[1] &&
							state.toggleHomeFolderMenu[1]!=='rename' &&(
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

	let homeFolderErrorMessage = () => {
		if (state.folders[state.homeAddFolderInput]) {
			return (
				<p class="home_add_folder_input_error">
					Sorry.. this folder already exists!
				</p>
			)
		}
	}

	let addFolderInput = (
		<>
			<div class="home_add_folder_container">
				{homeFolderErrorMessage()}
				<input
					onChange={(e) =>
						setState.setHomeAddFolderInput(e.target.value.toLowerCase())
					}
					class="home_add_folder"
					value={state.homeAddFolderInput.toLowerCase()}
					type="text"
					placeholder="Folder Name..."></input>
			</div>
		</>
	)

	console.log(state.toggleHomeFolderMenu)
	return (
		<div class="home">
			<div class="home_header">{addFolderInput}</div>

			{homeFolders()}
		</div>
	)
}
