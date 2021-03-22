import React from 'react'

export default function HomeFolderSubMenu({ folder, state, setState, vars }) {
	let colors = vars.colors.map((item, index) => {
		
		if (index >= vars.colors.length / 2) {
			// console.log(vars.colors.length/2,index)
			return (
				<div
					class="home_folder_color_option"
					onMouseDown={() => {
						let newFolders = { ...state.folders }
						newFolders[state.toggleHomeFolderMenu[0]].folderColor = item
						setState.setFolders(newFolders)
						setState.setToggleHomeFolderMenu(null)
					}}
					style={{ background: item }}></div>
			)
		}
	})

	let subMenu = () => {
		if (
			state.toggleHomeFolderMenu &&
			state.toggleHomeFolderMenu[1] == 'color'
		) {
			return colors
		} else if (
			state.toggleHomeFolderMenu &&
			state.toggleHomeFolderMenu[1] == 'delete' &&
			state.toggleHomeFolderMenu[2] == 'yes'
		) {
			return (
				<div>
					<p
						class="home_folder_delete_confirm"
						style={{ color: 'red' }}
						onClick={() => {
							let newFolders = { ...state.folders }
							delete newFolders[state.toggleHomeFolderMenu[0]]
							setState.setFolders(newFolders)
							// console.log(newFolders)
						}}>
						DELETE
					</p>
				</div>
			)
			// console.log('delete')
		}
	}

	// } else if (state.toggleHomeFolderMenu &&
	// 	state.toggleHomeFolderMenu[1] == 'delete' &&
	// 	state.toggleHomeFolderMenu[2] == 'yes') {
	// 		<div><p>DELETE</p></div>

	return (
		<div class="home_folder_sub_menu">
			{/* {state.toggleHomeFolderMenu &&
				state.toggleHomeFolderMenu[1] == 'color' &&
				colors} */}
			{subMenu()}
		</div>
	)
}
