import React, { useContext } from 'react'
import Comment from './Comments'
import CommentForm from '../forms/CommentForm'
// import { IssueContext } from '../context/IssueProvider'

export default function CommentList(props){
    const { comments, _id } = props
    // console.log("id:", _id)


    return(
        <div style={{backgroundColor: 'transparent'}}>
            { comments.length === 0 ? <CommentForm _id={_id} /> : comments.map(comment => <Comment {...comment} _id={_id} key={comment._id} />)}
        </div>
    )
}