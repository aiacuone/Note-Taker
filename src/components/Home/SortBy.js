import React from 'react'

export default function SortBy({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	function handleSort(option) {
		let newSettings = { ...state.settings, sortHomeFolders: option }
		setState.setSettings(newSettings)
	}

	let optionsArr = ['date', 'name', 'recent']

	let options = optionsArr.map((option) => {
		return (
			<p
				class="settings_sortBy_option"
				onClick={(e) => handleSort(option)}
				style={{
					background: state.settings.sortHomeFolders == option && 'white',
					color: state.settings.sortHomeFolders == option && 'black',
					border:
						state.settings.sortHomeFolders !== option
							? '2px grey solid'
							: '2px white solid',
				}}>
				{option.toUpperCase()}
			</p>
		)
	})

	return (
		<div class="settings_sortBy">
			<h1 class="settings_sortBy_header">SORT FOLDERS:</h1>
			<div class="settings_sortBy_options_container">{options}</div>
		</div>
	)
}
