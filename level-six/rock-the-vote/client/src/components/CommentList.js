import React, { useContext } from 'react'
import Comment from './Comments'
import CommentForm from '../forms/CommentForm'
// import { IssueContext } from '../context/IssueProvider'

export default function CommentList(props){
    const { comments } = props


    return(
        <div style={{backgroundColor: 'transparent'}}>
            { comments.length === 0 ? <CommentForm issueId={props.issueId} /> : comments.map(comment => <Comment {...comment} issueId={props.issueId} key={comment._id} />)}
        </div>
    )
}