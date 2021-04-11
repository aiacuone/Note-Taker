import React, { useState,useRef} from 'react'
import SunEditor, { buttonList } from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css' // Import Sun Editor's CSS File

export default function Sun_Editor({ state, setState, vars }) {
	let editorRef=useRef()
	// let [content,setContent]=useState()
	return (
		<div class="sun_editor">
			<SunEditor
				// showInline={showInline}
				height='500px'
				width='100%'
				setContents={state.addNoteContent}
				autoFocus={true}
				ref={editorRef}
				onChange={(content) => setState.setAddNoteContent(content)}
				setOptions={{
					// position: 'right',
					minHeight: '250px',
					videoHeight: '200px',
					videoWidth: '300px',
					imageWidth: '400px',
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

			{/* <div class="alignSun">{ReactHtmlParser(content)}</div> */}
		</div>
	)
}
