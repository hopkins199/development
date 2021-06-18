import React from "react"
import Form from "./Form"
import {ThingConsumer} from "./thingContext"

function App(){

    return(
        <div>
            <Form />
            <ul className="ugly-list">
                <ThingConsumer>
                    {({things, toggleEdit, handleDelete, handleChange, editTitle, editDescription, submitEdits}) => (
                        things.map(thing =>
                            thing.editMode === false?
                            <li style={{listStyle: "none"}} className="ugly-item">
                                <h2>{thing.title}</h2>
                                <img style={{height: "250px", width: "250px"}} src={thing.imgUrl} alt={thing.title}/>
                                <h4>{thing.description}</h4>
                                <div className="button-form">
                                    <button className="button" onClick={() => handleDelete(thing._id)}>Delete</button>
                                    <button className="button" onClick={() => toggleEdit(thing._id)}>Edit</button>
                                </div>
                            </li>
                            : 
                            <form onSubmit={(e)=>submitEdits(e, thing._id)}>
                                <input
                                type="text"
                                name="editTitle"
                                placeholder="Title"
                                value={editTitle}
                                onChange={handleChange}
                                />
                                <input
                                type="text"
                                name="editDescription"
                                placeholder="Description"
                                value={editDescription}
                                onChange={handleChange}
                                />
                                <button>Submit</button>
                            </form>
                            
                            )
                    )}
                </ThingConsumer>
            </ul>
        </div>
    )
}

export default App