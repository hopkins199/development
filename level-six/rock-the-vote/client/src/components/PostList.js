import React from 'react'
import Post from './Post.js'

export default function PostList(props){
  const { issues } = props

  return (
    <div className="issue-list">
      { issues.map(issue => <Post {...issue} key={issue._id} />)}
    </div>
  )
}