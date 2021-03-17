import React from 'react'
import '../styles/currentFolder.css'

export default function CurrentFolder({ state, setState }) {

    
	let folders = Object.keys(state.folders[state.currentFolder].folders).map(
		(item) => {
			// console.log(item)
            return (
                <div class={"character_categories "+ item}>
                    <h1 class="character_category_title">{ item.toUpperCase()}</h1>
				</div>
			)
		}
	)
	// console.log(state.folders)
	// console.log(state.folders[state.currentFolder].folders)
	return (
		<div class="current_folder">
			<button onClick={() => setState.setCurrentFolder()}>HOME</button>
			{
				<h1 class="character_categories_header">
					{state.currentFolder.toUpperCase()}
				</h1>
			}
            {folders}
		</div>
	)
}
