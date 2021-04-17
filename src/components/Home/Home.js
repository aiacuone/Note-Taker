import React, { useEffect, useRef } from 'react'
import './styles/home.css'
import './styles/newHome.css'
import AddFolderButton from './AddFolderButton'
import menuButton from 'images/menu.svg'
import HomeFolderMenu from './HomeFolderMenu'
import HomeFolderSubMenu from './HomeFolderSubMenu'
import HomeFoldersSettings from './HomeFoldersSettings'
import logo from 'images/logo.svg'
import Folders from './Folders'
import AddFolder from './AddFolder'
import Settings from './Settings'
import FolderSettings from './FolderSettings'
import EditFolder from './EditFolder'

export default function Home({ state, setState, vars, Folder }) {
	let folder_rename_input = useRef()
	let home_add_folder_input = useRef()

	// useEffect(() => {
	// 	function handleEnter(e) {
	// 		if (
	// 			e.key == 'Enter' &&
	// 			state.homeAddFolderInput &&
	// 			!state.folders[state.homeAddFolderInput]
	// 		) {
	// 			setState.setFolders((e) => {
	// 				return {
	// 					...state.folders,
	// 					[state.homeAddFolderInput]: new Folder({
	// 						name: state.homeAddFolderInput,
	// 						dateCreated: Date.now(),
	// 					}),
	// 				}
	// 			})
	// 			setState.setHomeAddFolderInput('')
	// 			home_add_folder_input.current.placeholder = 'Add Folder'
	// 		}
	// 	}
	// 	document.addEventListener('keydown', handleEnter)
	// 	return () => {
	// 		document.removeEventListener('keydown', handleEnter)
	// 	}
	// }, [state.homeAddFolderInput])

	// useEffect(() => {
	// 	function handleEnter(e) {
	// 		if (
	// 			e.key == 'Enter' &&
	// 			state.homeRenameFolderInput &&
	// 			!state.folders[state.homeRenameFolderInput]
	// 		) {
	// 			let newFolders = { ...state.folders }
	// 			newFolders[state.toggleHomeFolderMenu[0]].name =
	// 				state.homeRenameFolderInput
	// 			newFolders[state.homeRenameFolderInput] =
	// 				newFolders[state.toggleHomeFolderMenu[0]]
	// 			delete newFolders[state.toggleHomeFolderMenu[0]]
	// 			state.homeRenameFolderInput = null
	// 			setState.setFolders(newFolders)
	// 			setState.setToggleHomeFolderMenu('')
	// 			setState.setHomeRenameFolderInput('')
	// 		}
	// 	}
	// 	document.addEventListener('keydown', handleEnter)
	// 	return () => {
	// 		document.removeEventListener('keydown', handleEnter)
	// 	}
	// }, [state.homeRenameFolderInput])

	// useEffect(() => {
	// 	function handleMouseDown(e) {
	// 		if (
	// 			e.target.className !== 'home_add_folder' &&
	// 			home_add_folder_input &&
	// 			home_add_folder_input.current
	// 		) {
	// 			home_add_folder_input.current.placeholder = 'Add Folder'
	// 			setState.setHomeAddFolderInput('')
	// 		}
	// 	}
	// 	document.addEventListener('mousedown', handleMouseDown)
	// 	return () => {
	// 		document.removeEventListener('mousedown', handleMouseDown)
	// 	}
	// }, [])

	// let homeFolders = () => {
	// 	//HOME FOLDERS

	// 	let foldersArray = () => {
	// 		let newFoldersArray = []
	// 		Object.keys(state.folders).map((item) => {
	// 			newFoldersArray.push(state.folders[item])
	// 		})
	// 		//SORTS ARRAY
	// 		if (state.sortHomeFolders == 'RECENT') {
	// 			return newFoldersArray
	// 				.sort((a, b) => {
	// 					return a['lastSelected'] - b['lastSelected']
	// 				})
	// 				.reverse()
	// 		} else if (state.sortHomeFolders == 'DATE CREATED') {
	// 			return newFoldersArray.sort((a, b) => {
	// 				return a['dateCreated'] - b['dateCreated']
	// 			})
	// 		} else if (state.sortHomeFolders == 'NAME') {
	// 			return newFoldersArray.sort((a, b) => {
	// 				if (a['name'] < b['name']) {
	// 					return -1
	// 				}
	// 				if (a['name'] > b['name']) {
	// 					return 1
	// 				}
	// 				return 0
	// 			})
	// 		}
	// 	}
	// 	if (foldersArray().length > 0) {
	// 		return foldersArray().map((item) => {
	// 			// console.log(state.folders)
	// 			// console.log(item.name)
	// 			let newArr = [item.name]

	// 			let insideFolder = () => {
	// 				if (
	// 					state.toggleHomeFolderMenu && // FOLDER TITLE AREA
	// 					state.toggleHomeFolderMenu[0] == item.name &&
	// 					state.toggleHomeFolderMenu[1] == 'rename'
	// 				) {
	// 					return (
	// 						//CANT GET THIS INPUT TO AUTO FOCUS!?!??!
	// 						<>
	// 							<input
	// 								onChange={(e) =>
	// 									setState.setHomeRenameFolderInput(
	// 										e.target.value.toLowerCase()
	// 									)
	// 								}
	// 								value={state.homeRenameFolderInput}
	// 								ref={folder_rename_input}
	// 								class="home_folder_title_rename_input"
	// 								type="text"
	// 								style={{ color: 'black' }}></input>
	// 							{state.folders[state.homeRenameFolderInput] && (
	// 								<p class="home_rename_folder_input_error">
	// 									Sorry, this name already exists!
	// 								</p>
	// 							)}
	// 						</>
	// 					)
	// 				} else if (
	// 					state.toggleHomeFolderMenu && // FOLDER TITLE AREA
	// 					state.toggleHomeFolderMenu[0] == item.name &&
	// 					state.toggleHomeFolderMenu[1] == 'delete'
	// 				) {
	// 					return (
	// 						<div class="home_folder_delete_confirm">
	// 							<p
	// 								class="home_folder_delete_confirm yes"
	// 								onMouseDown={() => {
	// 									let newArr = [...state.toggleHomeFolderMenu]
	// 									newArr[2] = 'yes'
	// 									setState.setToggleHomeFolderMenu(newArr)
	// 								}}>
	// 								YES
	// 							</p>
	// 							<p
	// 								class="home_folder_delete_confirm no"
	// 								onMouseDown={() => {
	// 									setState.setToggleHomeFolderMenu(null)
	// 								}}>
	// 								/ NO
	// 							</p>
	// 						</div>
	// 					)
	// 				} else {
	// 					return (
	// 						<h3 class="home_folder_title">
	// 							{state.folders[item.name].name.toUpperCase()}
	// 						</h3>
	// 					)
	// 				}
	// 			}

	// 			return (
	// 				<div //HOME FOLDER
	// 					class="home_folder"
	// 					onMouseDown={(e) => {
	// 						if (
	// 							// IDENTIFIES WHAT IS BEING CLICKED WITHIN FOLDER
	// 							e.target.className == 'home_folder' ||
	// 							e.target.className == 'home_folder_title'
	// 						) {
	// 							if (!state.toggleHomeFolderMenu) {
	// 								//ENSURES THE MENU ISNT OPEN
	// 								let newArr = [item.name]
	// 								setState.setDirectory(newArr) //ADDS TO DIRECTORY IN STATE WHICH LOADS NEW FOLDER
	// 								let newFolders = { ...state.folders }
	// 								newFolders[item.name].lastSelected = Date.now() //ADDS NEW DATE TO VALUE OF 'lastSelected' PROPERTY
	// 								newFolders[item.name].timesSelected =
	// 									+newFolders[item.name].timesSelected + 1 //ADDS TO VALUE TO 'timesSelected' PROPERTY
	// 								setState.setFolders(newFolders)
	// 							}
	// 						} else if (e.target.className == 'menuButton home') {
	// 							setState.setToggleHomeFolderMenu([item.name]) //TOGGLES THE FOLDER MENU
	// 						}
	// 					}}
	// 					style={{
	// 						//STYLING
	// 						border: '5px ' + state.folders[item.name].folderColor + ' solid',
	// 					}}>
	// 					{insideFolder()}

	// 					<img class="menuButton home" src={menuButton} />

	// 					{state.toggleHomeFolderMenu &&
	// 						item.name == state.toggleHomeFolderMenu[0] && ( //LOADS THE FOLDER MENU AND SUB MENU
	// 							<HomeFolderMenu
	// 								folder={item.name}
	// 								state={state}
	// 								setState={setState}
	// 								vars={vars}
	// 							/>
	// 						)}
	// 					{state.toggleHomeFolderMenu &&
	// 						item.name == state.toggleHomeFolderMenu[0] &&
	// 						state.toggleHomeFolderMenu[1] &&
	// 						state.toggleHomeFolderMenu[1] !== 'rename' && (
	// 							<HomeFolderSubMenu
	// 								folder={item.name}
	// 								state={state}
	// 								setState={setState}
	// 								vars={vars}
	// 							/>
	// 						)}
	// 				</div>
	// 			)
	// 		})
	// 	} else {
	// 		return (
	// 			<div>
	// 				<h3>NO FOLDERS</h3>
	// 			</div>
	// 		)
	// 	}
	// }

	let homeFolderErrorMessage = () => {
		if (state.folders[state.homeAddFolderInput]) {
			return (
				<p class="home_add_folder_input_error">
					Sorry.. this folder already exists!
				</p>
			)
		}
	}

	// let addFolderInput = (
	// 	<div class="home_add_folder_container">
	// 		{homeFolderErrorMessage()}
	// 		<input
	// 			class="home_add_folder"
	// 			ref={home_add_folder_input}
	// 			onMouseDown={(e) => {
	// 				if (home_add_folder_input && home_add_folder_input.current) {
	// 					home_add_folder_input.current.placeholder = ''
	// 				}
	// 			}}
	// 			onChange={(e) =>
	// 				setState.setHomeAddFolderInput(e.target.value.toLowerCase())
	// 			}
	// 			value={state.homeAddFolderInput.toLowerCase()}
	// 			type="text"
	// 			placeholder="Add Folder..."></input>
	// 	</div>
	// )

	function handleRenderSettings() {
		setState.setHomeRender(['settings'])
	}

	return (
		<div class="home">
			{/* <div class="home_header">{addFolderInput}</div> */}
			<img class="home_logo" src={logo} />
			<img
				onMouseDown={handleRenderSettings}
				class="home_folder_settings_button"
				src={menuButton}
				style={{ cursor: 'pointer' }}
			/>
			{/* {!state.homeFoldersSettings && homeFolders()} */}
			{/* {state.homeFoldersSettings && (
				<HomeFoldersSettings state={state} setState={setState} vars={vars} />
			)} */}

			{Object.keys(state.folders).length > 0 &&
				state.homeRender[0] == 'folders' && (
					<Folders state={state} setState={setState} vars={vars} />
				)}

			{state.homeRender[0] == 'addFolder' && (
				<AddFolder state={state} setState={setState} vars={vars} />
			)}
			{state.homeRender[0] == 'settings' && (
				<Settings state={state} setState={setState} vars={vars} />
			)}
			{state.homeRender[0] == 'folderSettings' && (
				<EditFolder state={state} setState={setState} vars={vars} />
			)}
			<AddFolderButton state={state} setState={setState} vars={vars} />

			<div class='test'></div>
		</div>
	)
}
