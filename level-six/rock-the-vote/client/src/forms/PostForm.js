import React, { useState } from 'react'

const initInputs = {
  title: "",
  content: ""
}

export default function TodoForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { addIssue } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { title, content } = inputs
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Title"/>
      <textarea 
        rows='6'
        cols='50'
        name="content" 
        value={content} 
        onChange={handleChange} 
        placeholder="Description"/>
      <button>Add Issue</button>
    </form>
  )
}