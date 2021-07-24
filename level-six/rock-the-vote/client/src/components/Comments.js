import React, {useContext} from 'react'
import CommentForm from '../forms/CommentForm'
// import { IssueContext } from '../context/IssueProvider'


export default function Comments (props) {

    const { content, _id } = props
    // const { authors } = useContext(IssueContext)
    // const [comment, SetComment] = useState() 

    return(
        <div className='comment-container' >
            <CommentForm _id={_id} />
            <p style={{backgroundColor: 'transparent'}}>{ content }</p>
        </div>
    )
}