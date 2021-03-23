import React from 'react'

export default function HomeFoldersSettings({ vars, state, setState }) {
	let settingsOptions = () => {
		let settingsOptionsArr = ['SORT BY', 'BACKGROUND COLOR']
		return settingsOptionsArr.map((item) => {
			return (
				<div>
					<p
						onClick={() => {
							let newArr = [...state.home.homeFoldersSettings]
							newArr[0] = item
							setState.setHome({ ...state.home, homeFoldersSettings: newArr })
						}}
						class="home_folder_settings_option">
						{item}
					</p>
				</div>
			)
		})
	}

	let sortByOptions = () => {
		let arr = ['RECENT', 'DATE CREATED', 'NAME']
		return arr.map((item) => {
			return (
				<div>
					<p
						onMouseDown={() => {
							setState.setHome({
								...state.home,
								sortHomeFolders: item,
								homeFoldersSettings: null,
							})
						}}
						class="home_folder_settings_option">
						{item}
					</p>
				</div>
			)
		})
	}

	return (
		<div class="home_folder_settings">
			{/* <h1 class="home_folder_settings_title">SETTINGS</h1> */}
			{!state.home.homeFoldersSettings[0] && settingsOptions()}
			{/* {settingsOptions()} */}
			{state.home.homeFoldersSettings[0] == 'SORT BY' && sortByOptions()}
		</div>
	)
}
