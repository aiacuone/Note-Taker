import React from 'react'

export default function ViewNote({ state, setState, vars, Folder, Note }) {


    return (
        <div>
            View Note
            <p onClick={()=>setState.renderCurrentFolder(['mainSection','header']) }>EXIT</p>
        </div>
    )
}
