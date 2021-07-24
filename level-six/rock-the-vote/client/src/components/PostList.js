import React from 'react'
import Post from './Post.js'

export default function PostList(props){
  const { issues } = props
  // const {_id, comments} = issues
  // console.log(issues)
  return (
    <div className="issue-list">
      { issues.map(issue => <Post issue={issue} {...issue} key={issue._id} />)}
    </div>
  )
}