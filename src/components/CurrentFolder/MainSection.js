import React from 'react'
import SelectedFolderSettings from './SelectedFolderSettings'
import NotesSection from './NotesSection'
import AddFolder from './AddFolder'
import Footer from './Footer'
import Header from './Header'
import DeleteFolder from './DeleteFolder'
import RenameFolder from './RenameFolder'
import FolderColor from './FolderColor'
import ConfirmDeleteFolder from './ConfirmDeleteFolder'
import EditFolder from './EditFolder'

export default function MainSection({ state, setState, vars }) {
	return (
		<div class="main_section_container">
			{state.render2 && (
				<Header state={state} setState={setState} vars={vars} />
			)}
			{!state.render[1] && (
				<NotesSection state={state} setState={setState} vars={vars} />
			)}
			{state.render[1] === 'folderSettings' && (
				<SelectedFolderSettings state={state} setState={setState} vars={vars} />
			)}
			{state.render[1] === 'addFolder' && (
				<AddFolder state={state} setState={setState} vars={vars} />
			)}
			{state.render[1] === 'deleteFolder' && (
				<DeleteFolder state={state} setState={setState} vars={vars} />
			)}
			{state.render[1] === 'renameFolder' && (
				<RenameFolder state={state} setState={setState} vars={vars} />
			)}
			{state.render[1] === 'folderColor' && (
				<FolderColor state={state} setState={setState} vars={vars} />
			)}
			{/* {state.render[1] === 'confirmDeleteFolder' && (
				<ConfirmDeleteFolder state={state} setState={setState} vars={vars} />
			)} */}
			{state.render[1] === 'editFolder' && (
				<EditFolder state={state} setState={setState} vars={vars} />
			)}
			{state.render2 && (
				<Footer state={state} setState={setState} vars={vars} />
			)}
		</div>
	)
}
