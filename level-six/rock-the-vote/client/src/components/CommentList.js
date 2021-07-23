import React, { useContext } from 'react'
import Comment from './Comments'
// import { IssueContext } from '../context/IssueProvider'

export default function CommentList(props){
    const { comments } = props


    return(
        <div style={{backgroundColor: 'transparent'}}>
            { comments.map(comment => <Comment {...comment} key={comment._id} />)}
        </div>
    )
}