import React, { useEffect, useRef, useFocus } from 'react'
import '../styles/home.css'
import menuButton from '../images/menu.svg'
import HomeFolderMenu from './HomeFolderMenu'
import HomeFolderSubMenu from './HomeFolderSubMenu'
import HomeFoldersSettings from './HomeFoldersSettings'
// import RenameInput from './RenameInput'

export default function Home({ state, setState, vars, Folder }) {
	let folder_rename_input = useRef()
	let home_add_folder_input = useRef()
	// let [folder_rename_input, focus_folder_rename_input]=useFocus()

	useEffect(() => {
		//INTEFERES WITH CODE
		// function addHomeFolderInputClear(e) {
		// 	if (
		// 		e.target.className !== 'home_add_folder' &&
		// 	) {
		// 		console.log(e.target.className)
		// 		//TO KEEP
		// 		setState.setHome({ ...state.home, homeAddFolderInput: '' })
		// 		//TO DELETE
		// 		setState.setHomeAddFolderInput('')
		// 		if (
		// 			home_add_folder_input &&
		// 			home_add_folder_input.current
		// 			// home_add_folder_input.current.placeholder
		// 		) {
		// 			home_add_folder_input.current.placeholder = 'Add Folder'
		// 		}
		// 	}
		// }

		//INTEFERES WITH CODE
		// function toggleMenuOff(e) {
		// 	//TOGGLES THE FOLDER MENU OFF
		// 	if (
		// 		e.key !== 'Enter' &&
		// 		e.target.className !== 'home_folder_menu' &&
		// 		e.target.className !== 'home_folder_menu_color' &&
		// 		e.target.className !== 'home_folder_menu_color_option' &&
		// 		e.target.className !== 'home_folder_menu_options' &&
		// 		e.target.className !== 'menuButton home' &&
		// 		e.target.className !== 'home_folder_title_rename_input' &&
		// 		e.target.className !== 'home_folder_delete_confirm' &&
		// 		e.target.className !== 'home_folder_delete_confirm yes' &&
		// 		e.target.className !== 'home_folder_delete_confirm no' &&
		// 		e.target.className !== 'home_rename_folder_input_error' &&
		// 		e.target.className !== 'testbutton'
		// 	) {
		// 		//TO KEEP
		// 		setState.setHome({
		// 			...state.home,
		// 			toggleHomeFolderMenu: null,
		// 			homeRenameFolderInput: null,
		// 		})
		// 		//TO DELETE
		// 		// setState.setToggleHomeFolderMenu(null)
		// 		//
		// 		setState.setHomeRenameFolderInput('')
		// 		//
		// 	}
		// }

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
				if (home_add_folder_input && home_add_folder_input.current) {
					home_add_folder_input.current.placeholder = 'Add Folder'
				}
			} else if (
				//RENAME FOLDER INPUT
				e.key == 'Enter' &&
				state.homeRenameFolderInput &&
				!state.folders[state.homeRenameFolderInput] &&
				state.home.toggleHomeFolderMenu &&
				state.home.toggleHomeFolderMenu[0]
			) {
				let newFolders = { ...state.folders }
				console.log(state.home.toggleHomeFolderMenu, newFolders)
				console.log(state.home.toggleHomeFolderMenu, newFolders)
				newFolders[state.home.toggleHomeFolderMenu[0]].name =
					state.homeRenameFolderInput
				newFolders[state.homeRenameFolderInput] =
					newFolders[state.home.toggleHomeFolderMenu[0]]
				delete newFolders[state.home.toggleHomeFolderMenu[0]]
				state.homeRenameFolderInput = null
				setState.setFolders(newFolders)
				setState.setHome({ ...state.home, toggleHomeFolderMenu: null })
				setState.setHomeRenameFolderInput('')
			}
		}
		// document.addEventListener('mousedown', addHomeFolderInputClear)
		// document.addEventListener('mousedown', toggleMenuOff)
		// document.addEventListener('keydown', enterInput)
		return () => {
			// document.removeEventListener('mousedown', addHomeFolderInputClear)
			// document.removeEventListener('mousedown', toggleMenuOff)
			// document.removeEventListener('keydown', enterInput)
		}
	}, [])

	useEffect(() => {
		function handleKeyDown(e) {
			if (
				//HOME FOLDER ENTER INPUT
				e.key == 'Enter' 
			) {
				console.log(state.homeAddFolderInput, 'first layer')
				if (!state.folders[state.homeAddFolderInput]) {
					console.log(state.homeAddFolderInput, 'second layer')
				}
				// console.log(state.folders[state.homeAddFolderInput])

				// let newObj = { ...state.folders }
				// newObj[state.homeAddFolderInput] = new Folder({
				// 	name: state.homeAddFolderInput,
				// 	dateCreated: Date.now(),
				// })

				// setState.setFolders(newObj)
				// setState.setHomeAddFolderInput('')
				// if (home_add_folder_input && home_add_folder_input.current) {
				// 	home_add_folder_input.current.placeholder = 'Add Folder'
				// }
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => {
			// document.removeEventListener('mousedown', addHomeFolderInputClear)
			// document.removeEventListener('mousedown', toggleMenuOff)
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [state.homeAddFolderInput])

	let homeFolders = () => {
		//HOME FOLDERS

		let foldersArray = () => {
			let newFoldersArray = []
			Object.keys(state.folders).map((item) => {
				newFoldersArray.push(state.folders[item])
			})
			//SORTS ARRAY
			if (state.home.sortHomeFolders == 'RECENT') {
				return newFoldersArray
					.sort((a, b) => {
						return a['lastSelected'] - b['lastSelected']
					})
					.reverse()
			} else if (state.home.sortHomeFolders == 'DATE CREATED') {
				return newFoldersArray.sort((a, b) => {
					return a['dateCreated'] - b['dateCreated']
				})
			} else if (state.home.sortHomeFolders == 'NAME') {
				return newFoldersArray.sort((a, b) => {
					if (a['name'] < b['name']) {
						return -1
					}
					if (a['name'] > b['name']) {
						return 1
					}
					return 0
				})
			}
		}
		if (foldersArray().length > 0) {
			return foldersArray().map((item) => {
				let newArr = [item.name]

				let insideFolder = () => {
					if (
						state.home.toggleHomeFolderMenu && // FOLDER TITLE AREA
						state.home.toggleHomeFolderMenu[0] == item.name &&
						state.home.toggleHomeFolderMenu[1] == 'rename'
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
						state.home.toggleHomeFolderMenu && // FOLDER TITLE AREA
						state.home.toggleHomeFolderMenu[0] == item.name &&
						state.home.toggleHomeFolderMenu[1] == 'delete'
					) {
						return (
							<div class="home_folder_delete_confirm">
								<p
									class="home_folder_delete_confirm yes"
									onMouseDown={() => {
										let newArr = [...state.home.toggleHomeFolderMenu]
										newArr[2] = 'yes'
										setState.setHome({
											...state.home,
											toggleHomeFolderMenu: newArr,
										})
									}}>
									YES
								</p>
								<p
									class="home_folder_delete_confirm no"
									onMouseDown={() => {
										setState.setHome({
											...state.home,
											toggleHomeFolderMenu: null,
										})
									}}>
									/ NO
								</p>
							</div>
						)
					} else {
						return (
							<h3 class="home_folder_title">
								{state.folders[item.name].name.toUpperCase()}
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
								if (!state.home.toggleHomeFolderMenu) {
									//ENSURES THE MENU ISNT OPEN
									let newArr = [item.name]
									setState.setDirectory(newArr) //ADDS TO DIRECTORY IN STATE WHICH LOADS NEW FOLDER
									let newFolders = { ...state.folders }
									newFolders[item.name].lastSelected = Date.now() //ADDS NEW DATE TO VALUE OF 'lastSelected' PROPERTY
									newFolders[item.name].timesSelected =
										+newFolders[item.name].timesSelected + 1 //ADDS TO VALUE TO 'timesSelected' PROPERTY
									setState.setFolders(newFolders)
								}
							} else if (e.target.className == 'menuButton home') {
								let newHome = setState.setHome({
									...state.home,
									toggleHomeFolderMenu: [item.name],
								}) //TOGGLES THE FOLDER MENU
							}
						}}
						style={{
							//STYLING
							border: '5px ' + state.folders[item.name].folderColor + ' solid',
						}}>
						{insideFolder()}

						<img class="menuButton home" src={menuButton} />

						{state.home.toggleHomeFolderMenu &&
							item.name == state.home.toggleHomeFolderMenu[0] &&
							state.home.toggleHomeFolderMenu[1] !== 'rename' && ( //LOADS THE FOLDER MENU AND SUB MENU
								<HomeFolderMenu
									folder={item.name}
									state={state}
									setState={setState}
									vars={vars}
								/>
							)}
						{state.home.toggleHomeFolderMenu &&
							item.name == state.home.toggleHomeFolderMenu[0] &&
							state.home.toggleHomeFolderMenu[1] &&
							state.home.toggleHomeFolderMenu[1] !== 'rename' && (
								<HomeFolderSubMenu
									folder={item.name}
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
					ref={home_add_folder_input}
					// onMouseDown={(e)=>{e.target.placeholder=''} }
					onMouseDown={(e) => {
						if (home_add_folder_input && home_add_folder_input.current) {
							home_add_folder_input.current.placeholder = ''
						}
					}}
					onChange={(e) => {
						setState.setHomeAddFolderInput(e.target.value.toLowerCase())
					}}
					class="home_add_folder"
					value={state.homeAddFolderInput}
					type="text"
					placeholder="Add Folder"></input>
			</div>
		</>
	)

	return (
		<div class="home">
			<div class="home_header">{addFolderInput}</div>
			<img
				onMouseDown={() => {
					setState.setHome({ ...state.home, homeFoldersSettings: [] })
				}}
				class="home_folder_settings_button"
				src={menuButton}
				style={{ cursor: 'pointer' }}
			/>
			{!state.home.homeFoldersSettings && homeFolders()}
			{state.home.homeFoldersSettings && (
				<HomeFoldersSettings state={state} setState={setState} vars={vars} />
			)}
		</div>
	)
}
