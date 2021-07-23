import React from 'react'
import CommentForm from '../forms/CommentForm'
// import { IssueContext } from '../context/IssueProvider'


export default function Comments (props) {

    const { content } = props
    // const [comment, SetComment] = useState() 

    return(
        <div className='comment-container' >
            <CommentForm />
            <p style={{backgroundColor: 'transparent'}}>{ content }</p>
        </div>
    )
}