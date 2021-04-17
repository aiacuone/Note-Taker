import React from 'react'

export default function AddFolderColors2({ state, setState, vars }) {
	let selectedColor = state.homeRender[1]

	function handleColorChange(color) {
		let newHomeRender = [...state.homeRender]
		newHomeRender[1] = color
		setState.setHomeRender(newHomeRender)
	}

	let colors = vars.colors.map((color, index) => {
		if (index >= vars.colors.length / 2) {
			return (
				<div
					class="home_folder_color_option"
					onMouseDown={() => handleColorChange(color)}
					style={{
						background: color,
						border:
							color == selectedColor && color !== '#FFED0D'
								? '3px solid white'
								: color == selectedColor &&
								  color == '#FFED0D' &&
								  '3px solid rgb(161, 161, 161)',
					}}></div>
			)
		}
	})

	return <div class="home_add_folder_addcolors">{colors}</div>
}
