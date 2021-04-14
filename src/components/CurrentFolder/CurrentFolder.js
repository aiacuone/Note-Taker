import React from 'react'
import MainSection from './MainSection'
import './styles/current_folder.css'
import Header from './Header'
import Footer from './Footer'
import AddNote from './AddNote'
import EditNote from './EditNote'

export default function CurrentFolder({ state, setState, vars, Folder, Note }) {
	return (
		<div class="current_page">
			{state.renderCurrentFolder.indexOf('header') > -1 && (
				<Header state={state} setState={setState} vars={vars} Folder={Folder} />
			)}

			{state.renderCurrentFolder.indexOf('mainSection') > -1 && (
				<MainSection
					state={state}
					setState={setState}
					vars={vars}
					Note={Note}
				/>
			)}
			{state.renderCurrentFolder.indexOf('header') > -1 && (
				<Footer state={state} setState={setState} vars={vars} Folder={Folder} />
			)}
			{state.renderCurrentFolder.indexOf('addNote') > -1 && (
				<AddNote state={state} setState={setState} vars={vars} Note={Note} />
			)}
			{state.renderCurrentFolder.indexOf('editNote') > -1 && (
				<EditNote state={state} setState={setState} vars={vars} Note={Note} />
			)}

		</div>
	)
}
