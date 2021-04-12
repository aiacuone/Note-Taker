import React from 'react'
import settingsIcon from './images/settings.svg'

export default function SettingsHeader({
	state = { state },
	setState = { setState },
	vars = { vars },
}) {
	return (
		<div class="current_folder_settings_header">
			<h3
				onClick={() => {
					setState.setDirectory([])
				}}
				class="current_page_nav_button home_nav">
				HOME
			</h3>
			<img class="settings_icon" src={settingsIcon}></img>
		</div>
	)
}
