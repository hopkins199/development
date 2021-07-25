import React from 'react'
import Post from './Post.js'

export default function PostList(props){
  const { issues, upVote } = props

const sortedIssues = issues.sort(function(a, b) {
  return b.upVote - a.upVote
})

  return (
    <div className="issue-list">
      { sortedIssues.map(issue => <Post issue={issue} {...issue} key={issue._id} />)}
    </div>
  )
}