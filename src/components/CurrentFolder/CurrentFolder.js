import React from 'react'
import MainSection from './MainSection'
import './current_page.css'
import Header from './Header'

export default function CurrentFolder({ state, setState, vars, Folder, Note }) {
	return (
		<div class="current_page">
			{state.renderCurrentFolder.indexOf('header') > -1 && (
				<Header state={state} setState={setState} vars={vars} Folder={Folder} />
			)}
			<MainSection state={state} setState={setState} vars={vars} Note={Note} />
		</div>
	)
}
