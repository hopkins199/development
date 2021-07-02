import React, { useState } from "react"

export default function AddBountyForm(props){
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", living: props.living || false, bounty: props.bounty || "", type: props.type || "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleCheck(e){
        console.log(e)
        setInputs(prevInputs => ({...prevInputs, living: e.target.checked}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        //props.editSubmit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <form onSubmit={handleSubmit} className="addbounty-form">
            <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder="First Name"/>
            <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last Name"/>
            <div className="checkbox">
                <label for="living" className="label">Is Bounty Alive</label>
                <input type="checkbox" name="living" checked={inputs.living} onChange={handleCheck} className="checker" id="living"/>
            </div>
            <input type="text" name="bounty" value={inputs.bounty} onChange={handleChange} placeholder="Price on their head"/>
            <select name="type" onChange={handleChange} className="dropdown">
                <option value="Sith"className="dropdown">Sith</option>
                <option value="Jedi" className="dropdown">Jedi</option>
            </select>   
            <button>{ props.btnText }</button>
        </form>
    )
}