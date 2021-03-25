import React from 'react'

export default function CurrentFolderNotes({
	state,
	setState,
	vars,
	sortedFolders,
}) {
	let notes = sortedFolders().map((note) => {
		return (
			<div class="curret_page_note">
				<h3 class="curret_page_note_title">
					{state.currentFolder.notes[note].title}
				</h3>
				<p class="curret_page_note_text">
					{state.currentFolder.notes[note].text}
				</p>
			</div>
		)
	})
	return <div class="curret_page_notes">{notes}</div>
}
