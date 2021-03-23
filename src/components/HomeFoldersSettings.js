import React from 'react'

export default function HomeFoldersSettings({ vars, state, setState }) {
	let settingsOptions = () => {
		let settingsOptionsArr = ['SORT BY', 'BACKGROUND COLOR']
		return settingsOptionsArr.map((item) => {
			return (
				<div>
					<p
						onClick={() => {
							let newArr = [...state.homeFoldersSettings]
							newArr[0] = item
							setState.setHomeFoldersSettings(newArr)
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
                            setState.setSortHomeFolders(item)
                            vars.homeFoldersSort = item
                            console.log(vars.homeFoldersSort,'vars.homeFoldersSort mousedown')
							setState.setHomeFoldersSettings(null)
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
			{!state.homeFoldersSettings[0] && settingsOptions()}
			{/* {settingsOptions()} */}
			{state.homeFoldersSettings[0] == 'SORT BY' && sortByOptions()}
		</div>
	)
}
