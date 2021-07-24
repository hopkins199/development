import React, { useContext, useEffect } from 'react'
import PostForm from '../forms/PostForm.js'
import PostList from './PostList.js'
import { UserContext } from '../context/UserProvider.js'
import { IssueContext } from '../context/IssueProvider.js'


function Profile(){

  const { user: { username } } = useContext(UserContext)
  const {addIssue, getUserPosts, userIssues, deleteIssue, getAuthors} = useContext(IssueContext)

  useEffect(() => {
    getUserPosts()
    getAuthors()
  }, [])

  return (
    <div className="profile">
      <h1 style={{textTransform: 'capitalize'}}>Welcome {username}!</h1>
      <h3>Post your Thoughts here</h3>
      <PostForm addIssue={addIssue} />
      <h3>Your Posts</h3>
      <PostList issues={userIssues} deleteIssue={deleteIssue} />
    </div>
  )
}

export default Profile