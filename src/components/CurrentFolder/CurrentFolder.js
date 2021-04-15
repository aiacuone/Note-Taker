import React from 'react'
import MainSection from './MainSection'
import './styles/current_folder.css'
import Header from './Header'
import Footer from './Footer'
import AddNote from './AddNote'
import EditNote from './EditNote'
import DeleteNote from './DeleteNote'
import ViewNote from './ViewNote'

export default function CurrentFolder({ state, setState, vars, Folder, Note }) {
	return (
		<div class="current_page">
			{state.renderCurrentFolder.indexOf('mainSection') > -1 && (
				<MainSection
					state={state}
					setState={setState}
					vars={vars}
					Note={Note}
				/>
			)}
			{state.renderCurrentFolder.indexOf('addNote') > -1 && (
				<AddNote state={state} setState={setState} vars={vars} Note={Note} />
			)}
			{state.renderCurrentFolder.indexOf('editNote') > -1 && (
				<EditNote state={state} setState={setState} vars={vars} Note={Note} />
			)}{' '}
			{state.renderCurrentFolder.indexOf('deleteNote') > -1 && (
				<DeleteNote state={state} setState={setState} vars={vars} />
			)}
			{state.renderCurrentFolder.indexOf('viewNote') > -1 && (
				<ViewNote state={state} setState={setState} vars={vars} />
			)}
		</div>
	)
}
