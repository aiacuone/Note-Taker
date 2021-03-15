import React, { useRef} from 'react'

export default function AddFolderInput({ state, setState }) {

    let addFolderInput=useRef()

	return (
		<div>
			<input
                value={state.folderInput}
                ref={ addFolderInput}
				onChange={(e) => {
					setState.setFolderInput(e.target.value)
				}}
				type="text"></input>
			<button
                onClick={() => {
                    let newObj = { ...state.folders }
                    newObj[addFolderInput.current.value] = ''
					setState.setFolders(newObj)
                    setState.setFolderInput('')
				}}>
				+Folder
			</button>
		</div>
	)
}
