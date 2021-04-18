import React from 'react'
import AddNoteButton from './AddNoteButton'
import SettingsButton from './SettingsButton'
import FoldersSection from './FoldersSection'
import FooterNav from './FooterNav'

export default function Footer({ state, setState, vars }) {
	function handleClick() {
		setState.setDirectory([])
		setState.setRender(['mainSection'])
	}

	return (
		<div class="current_folder_footer">
						{Object.keys(vars.currentFolder.folders).length > 0 && (
				<FoldersSection state={state} setState={setState} vars={vars} />
			)}
			<FooterNav state={state} setState={setState} vars={vars}/>

		</div>
	)
}
