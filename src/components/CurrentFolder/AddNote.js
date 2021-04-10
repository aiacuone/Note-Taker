import React, { useEffect} from 'react'

export default function AddNote({ state, setState, vars }) {

    useEffect(() => {
        
    })
    
	return (
		<div>
			<p class='add_button_submit' onClick={() => setState.setCurrentFolderMainSection(['notes'])}>
				ADD NOTE
			</p>
		</div>
	)
}
