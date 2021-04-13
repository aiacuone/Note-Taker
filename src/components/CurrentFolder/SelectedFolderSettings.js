import React, { useEffect, useRef } from 'react'
import _ from 'lodash'

export default function SelectedFolderSettings({ state, setState, vars }) {
	let current_folder_rename_input = useRef()

	let arr = ['delete', 'rename', 'color']
	let selectedFolderOptions = arr.map((item) => {
		return (
			<p
				class="current_folder_folder_option"
				onMouseDown={() => {
					let newCurrentFolderMainSection = [...state.currentFolderMainSection]
					newCurrentFolderMainSection[2] = item
					setState.setCurrentFolderMainSection(newCurrentFolderMainSection)
				}}>
				{item.toUpperCase()}
			</p>
		)
	})

	useEffect(() => {
		function handleMouseDown(e) {
			if (
				e.target.className !== 'current_folder_folder_option' &&
				e.target.className !==
					'current_folder_folder_settings_delete_option yes' &&
				e.target.className !== 'current_folder_folder_settings_delete_delete' &&
				e.target.className !== 'current_folder_folder_settings_rename_input' &&
				e.target.className !== 'current_folder_folder_settings_color_option' &&
				e.target.className !== 'current_folder_delete_note_confirm yes'
			) {
				setState.setCurrentFolderMainSection(['notes'])
			}
		}

		document.addEventListener('mousedown', handleMouseDown)
		return () => {
			document.removeEventListener('mousedown', handleMouseDown)
		}
	}, [])

	useEffect(() => {
		function handleKeyDown(e) {
			if (e.key == 'Enter' && state.currentFolderMainSection[2] == 'rename') {
				let directoryChain = [...vars.directoryChain()]
				let directory = [...vars.directoryChain(), 'folders']
				let newCurrentFolders = { ...vars.currentFolder.folders }
				newCurrentFolders[state.currentFolderSelectedFolderRenameInput] =
					newCurrentFolders[state.currentFolderMainSection[1]]
				newCurrentFolders[state.currentFolderSelectedFolderRenameInput].name =
					state.currentFolderSelectedFolderRenameInput
				delete newCurrentFolders[state.currentFolderMainSection[1]]
				let newFolders = { ...state.folders }
				_.set(newFolders, directory.join('.'), newCurrentFolders)
				setState.setFolders(newFolders)
				setState.setCurrentFolderMainSection(['notes'])
			}
		}

		current_folder_rename_input.current.addEventListener(
			'keydown',
			handleKeyDown
		)
		return () => {
			current_folder_rename_input.current.removeEventListener(
				'keydown',
				handleKeyDown
			)
		}
	}, [
		state.currentFolderSelectedFolderRenameInput,
		state.currentFolderMainSection,
	])

	let colorOptions = vars.colors.map((color) => {
		return (
			<div
				class="current_folder_folder_settings_color_option"
				style={{ background: color }}
				onMouseDown={() => {
					let arr = [
						...vars.directoryChain(),
						'folders',
						state.currentFolderMainSection[1],
						'folderColor',
					]
					let newFolders = { ...state.folders }
					_.set(newFolders, arr.join('.'), color)
					setState.setFolders(newFolders)
					setState.setCurrentFolderMainSection(['notes'])
				}}></div>
		)
	})

	return (
		<div class="selected_folder_settings">
			{!state.currentFolderMainSection[2] && (
				<>
					<div class="current_folder_folder_settings">
						{selectedFolderOptions}
					</div>
				</>
			)}
			{state.currentFolderMainSection[2] == 'delete' &&
				!state.currentFolderMainSection[3] && (
					<>
						<p class="confirm_delete">
							Are you sure you want to delete this folder?
						</p>
						<div class="current_folder_folder_settings_delete_options">
							<p
								class="current_folder_folder_settings_delete_option yes"
								onMouseDown={() => {
									let newCurrentFolderMainSection = [
										...state.currentFolderMainSection,
									]
									newCurrentFolderMainSection[3] = 'yes'
									setState.setCurrentFolderMainSection(
										newCurrentFolderMainSection
									)
								}}>
								YES
							</p>
							<p class="current_folder_folder_settings_delete_option">/</p>
							<p class="current_folder_folder_settings_delete_option">NO</p>
						</div>
					</>
				)}
			{state.currentFolderMainSection[3] == 'yes' && (
				<p
					class="current_folder_folder_settings_delete_delete"
					onMouseDown={() => {
						let newFolders = { ...state.folders }
						let arr = [
							...vars.directoryChain(),
							'folders',
							state.currentFolderMainSection[1],
						]
						_.unset(newFolders, arr.join('.'))
						setState.setFolders(newFolders)
						setState.setCurrentFolderMainSection(['notes'])
					}}>
					DELETE
				</p>
			)}

			{state.currentFolderMainSection[2] == 'rename' && (
				<>
					<input
						type="text"
						class="current_folder_folder_settings_rename_input"
						ref={current_folder_rename_input}
						onChange={(e) =>
							setState.setCurrentFolderSelectedFolderRenameInput(e.target.value)
						}></input>
				</>
			)}

			{state.currentFolderMainSection[2] == 'color' && (
				<div class="current_folder_folder_settings_colors_container">
					{colorOptions}
				</div>
			)}
		</div>
	)
}
