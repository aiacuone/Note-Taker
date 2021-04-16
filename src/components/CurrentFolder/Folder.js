import React from 'react'
import useLongPress from '../../hooks/useLongPress'

export default function Folder({ state, setState, vars, folder }) {
	let color = () => {
		let arr = [...vars.directoryChain(), 'folders', folder, 'folderColor']
		return arr.reduce((a, b) => {
			return a[b]
		}, state.folders)
	}

	let selectedFolder = state.render[2]

	function handleLongPress() {
		if (!state.foldersScrolling) {
			setState.setRender([
				'mainSection',
				'folderSettings',
				folder.toLowerCase(),
			])
		}
	}

	function handleClick() {
		if (!state.foldersScrolling) {
			let arr = [...state.directory]
			arr.push(folder)
			setState.setDirectory(arr)
			setState.setRender(['mainSection'])
		}
	}

	return (
		<div
			class="current_page_folder_menu_folder"
			{...useLongPress(
				() => handleLongPress(),
				() => handleClick(),
				{ shouldPreventDefault: true, delay: 500 }
			)}
			style={{
				background: selectedFolder == folder ? 'white' : color(),
			}}>
			<p
				class="current_page_folder_menu_title"
				style={{
					color:
						selectedFolder == folder
							? 'black'
							: color() == '#FFED0D' || color() == '#FFA300'
							? 'black'
							: 'white',
				}}>
				{folder.toUpperCase()}
			</p>
		</div>
	)
}
