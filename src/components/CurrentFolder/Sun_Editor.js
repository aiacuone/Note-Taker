import React, { useState,useRef} from 'react'
import SunEditor, { buttonList } from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File

export default function Sun_Editor({ state, setState, vars }) {
	let editorRef=useRef()

	return (
		<div class="sun_editor">
			<SunEditor
				// showInline={showInline}
				height='570px'
				width='340px'
				setContents={state.addNoteContent}
				autoFocus={true}
				ref={editorRef}
				onChange={(content) => setState.setAddNoteContent(content)}
				setOptions={{
					// position: 'right',
					minHeight: '250px',
					videoHeight: '200px',
					videoWidth: '300px',
					imageWidth: '300px',
					// imageHeight:'200px',
					// youtubeQuery : 'autoplay=1&mute=1&enablejsapi=1',
					height: '100%',
					buttonList: [
						[
							'fontSize',
							'bold',
							'fontColor',
							'align',
							'list',
							'image',
							'video',
							// 'undo',
						],
					],
				}}
			/>
		</div>
	)
}
