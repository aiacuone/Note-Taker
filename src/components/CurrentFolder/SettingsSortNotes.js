import React from 'react'
import _ from 'lodash'

export default function SettingsSortNotes({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
    let selectedOption=vars.currentFolder.settings.sortNotes

	function handleSort(option) {
		let directory = [...vars.directoryChain(), 'settings']
		let newSettings = { ...vars.currentFolder.settings }
		let newFolders = { ...state.folders }
		newSettings.sortNotes = option
		_.set(newFolders, directory.join('.'), newSettings)
		setState.setFolders(newFolders)
	}

	let optionsArr = ['date', 'name', 'recent']

	let options = optionsArr.map((option) => {
		return (
			<p
				class="settings_sortBy_option"
				onClick={(e) => handleSort(option)}
				style={{
					background: selectedOption == option && 'white',
					color: selectedOption == option && 'black',
					border:
                    selectedOption !== option
							? '2px grey solid'
							: '2px white solid',
				}}>
				{option.toUpperCase()}
			</p>
		)
	})
	
	return (
		<div class="settings_option">
			<h1 class="settings_option_header">SORT NOTES:</h1>
			<div class="settings_options_container">{options}</div>
		</div>
	)
}
