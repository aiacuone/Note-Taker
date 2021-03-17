import React from 'react'
import '../styles/current_page.css'

export default function CurrentFolder({
	name,
	dateCreated,
	lastSelected,
	timesSelected,
	title,
	folders,
	notes,
	images,
	video,
	background,
	state,
	setState,
}) {
	let foldersSelect = Object.keys(folders).map((folder) => {
		return (
			<div
				onClick={() => {
					let arr = [...state.directory]
					arr.push(folder)
					// console.log(arr)
					setState.setDirectory(arr)
				}}
				class="current_page_folder_menu_folder">
				<h3 class="current_page_folder_menu_title">{folder.toUpperCase()}</h3>
			</div>
		)
	})
	let pageNotes
	if (notes) {
		pageNotes = Object.keys(notes).map((note) => {
			// console.log(note)
			return (
				<div class="curret_page_note">
                    <h3 class='curret_page_note_title'>{notes[note].title}</h3>
                    <p class='curret_page_note_text'>{ notes[note].text}</p>
				</div>
			)
		})
	}
	// console.log(notes)
	return (
		<div class="current_page">
			<div class="current_page_nav">
				<h3
					onClick={() => {
						let arr = [...state.directory]
						arr.splice(arr.length - 1, 1)
						setState.setDirectory(arr)
					}}
					class="current_page_nav_button back">
					BACK
				</h3>
				<h3
					onClick={() => {
						setState.setDirectory([])
					}}
					class="current_page_nav_button home">
					HOME
				</h3>
			</div>
			<h3 class="current_page_title">{name.toUpperCase()}</h3>
			<div class="current_page_folders_container">{foldersSelect}</div>
			<div class="current_page_notes_container">{notes && pageNotes}</div>
		</div>
	)
}
