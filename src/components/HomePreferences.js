import React from 'react'

export default function HomePreferences({ state, setState }) {
	return (
		<div class="preferences">
			<p>PREFERENCES</p>
			<label>
				FOLDER SIZE{' '}
				<input
					value={state.homePreferences.folderSize}
					onChange={(e) => {
						setState.setHomePreferences({
							...state.homePreferences,
							folderSize: e.target.value,
						})
					}}
					type="range"
					min="80"
					max="200"></input>
			</label>
			<label>
                SORT-BY
				<select value={state.homePreferences.sortBy } type="select" onChange={(e) => {
                    let newPref = { ...state.homePreferences, sortBy: e.target.value }
                    setState.setHomePreferences(newPref)
                }}>
                    <option value='name'>NAME</option>
                    <option value='most'>MOST USED</option>
                    <option value='date'>DATE CREATED</option>
                    <option value='last'>LATEST USED</option>
				</select>
			</label>
		</div>
	)
}
