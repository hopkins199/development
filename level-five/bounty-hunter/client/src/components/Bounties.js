// import e from "express"
import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm.js"

export default function Bounties(props) {
    const { firstName, lastName, living, bounty, type, _id, editBounty } = props
    const [editToggle, setEditToggle] = useState(false)

    function handleEdit(inputs, _id){
        // e.preventDefault()
        editBounty(inputs, _id)
        setEditToggle(false)
     }

    return(
        <div className="bounty-container">
            <div className="bounty-card">
                { !editToggle ?
                <>
                <h2>{firstName} {lastName}</h2>
                <h3>Status: {living ? "Alive" : "Dead"}</h3>
                <p>Bounty Reward: ${bounty}</p>
                <p className="force-side">Sith or Jedi: {type}</p>
                <button className="delete-button" onClick={() => props.deleteBounty(_id)}>Delete</button>
                <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                </>
                :
                <>
                    <AddBountyForm 
                        className="edit-form"
                        firstName={firstName}
                        lastName={lastName}
                        living={living}
                        bounty={bounty}
                        type={type}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={handleEdit}
                    />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
                }
            </div>
        </div>
    )
}