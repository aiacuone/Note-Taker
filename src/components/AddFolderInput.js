import React, { useRef, useEffect } from 'react'

export default function AddFolderInput({ state, setState }) {
	let addFolderInput = useRef()

	// console.log(state.folderInput.toLowerCase())
	// console.log(state.folderInput.toLowerCase())
	// console.log(state.folders)
	function handleClick() {
		if (state.folderInput) {
			let newObj = {
				[state.folderInput.toLowerCase()]: {
					timeCreated: Date.now(),
					timesSelected: 0,
					name: state.folderInput.toLowerCase(),
					folders: {'vs':'','top moves':'','combinations':'','focus':'','general':''}
				},
			}
			setState.setFolders({ ...state.folders, ...newObj })
			setState.setFolderInput('')
		}
	}

	//USE EFFECT BUGGING OUT
	useEffect(() => {
		/*
		// if (addFolderInput && addFolderInput.current) {
		// addFolderInput.current.addEventListener('focus', () => {
		window.addEventListener('keyup', (e) => {
			e.preventDefault()
			if (e.key == 'Enter'&&state.folderInput) {
				handleClick()
			}
		})
		// })

		return () => {
			// addFolderInput.current.removeEventListener('focus', () => {})
			window.removeEventListener('keyup', (e) => {
				e.preventDefault()
				if (e.key == 'Enter'&&state.folderInput) {
					handleClick()
				}
			})
		}
		// }

		*/
	})

	return (
		<div class="add_folder_input">
			<input
				class="add_folder_input_field"
				placeholder="Folder Name..."
				value={state.folderInput}
				ref={addFolderInput}
				onChange={(e) => {
					setState.setFolderInput(e.target.value)
				}}
				type="text"></input>
			<button
				class="add_folder_button"
				onClick={handleClick}
				// onClick={() => {
				// 	let newObj = { [addFolderInput.current.value.toLowerCase()]: { timeCreated:Date.now(),timesSelected:0,name: addFolderInput.current.value}}
				// 	setState.setFolders({...state.folders,...newObj})
				//     setState.setFolderInput('')
				// }}
			>
				Add
			</button>
		</div>
	)
}
