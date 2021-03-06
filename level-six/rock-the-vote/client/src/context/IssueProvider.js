import React, { useState } from "react";
import axios from "axios";

export const IssueContext = React.createContext();

const issueAxios = axios.create();

issueAxios.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});

export default function IssueProvider(props) {
	const initState = {
		issues: [],
		userIssues: [],
        errMsg: ''
	};

	const [issueState, setIssueState] = useState(initState);
	const [authors, setAuthors] = useState([]);
	// const [commentState, setCommentState] = useState([])

	function getUserPosts(userId) {
		issueAxios
			.get("/api/issues/user", userId)
			.then((res) => {
				try {
					setIssueState((prevState) => ({
						...prevState,
						userIssues: res.data,
					}));
				} catch {
					console.log(res);
				}
			})
			.catch((err) => console.log(err));
	}

	function getAllPosts() {
		issueAxios.get("/api/issues").then((res) => {
			setIssueState((prevState) => ({
				...prevState,
				issues: res.data,
			}));
		});
	}

	function addIssue(newPost) {
		issueAxios
			.post("/api/issues", newPost)
			.then((res) => {
				setIssueState((prevState) => ({
					...prevState,
					userIssues: [...prevState.issues, res.data],
				}));
				getUserPosts();
			})
			.catch((err) => console.log(err));
	}

	function deleteIssue(_id) {
		console.log(_id);
		issueAxios
			.delete(`/api/issues/${_id}`)
			.then((res) => {
				setIssueState((prevState) => ({
					...prevState,
					userIssues: prevState.userIssues.filter((issue) => issue._id !== _id),
					issues: prevState.issues.filter((issue) => issue._id !== _id),
				}));
			})
			.catch((err) => console.log(err));
	}

	function commentOnIssue(issueId, _id, newComment) {
		return issueAxios
			.post(`/api/issues/comments/${issueId}`, newComment)
			.then((res) => res.data);
	}

	function getComments(issueId) {
		return issueAxios
			.get(`/api/issues/comments/${issueId}`)
			.then((res) => res.data);
	}


	function clickUpVote(issueId) {
		issueAxios
			.put(`/api/issues/upVote/${issueId}`)
			.then((res) => {
                console.log(res.data.upVote)
                    const foundIssueIndex = issueState.issues.findIndex((issue) => issue._id === issueId)
                    const votedIssue = issueState.issues[foundIssueIndex]
                    const returnedVotedIssue = Object.assign(votedIssue, res.data)
                    
                    setIssueState( prevIssueState =>( {
                    ...prevIssueState,
                    issues: [...prevIssueState.issues.slice(0, foundIssueIndex), returnedVotedIssue, ...prevIssueState.issues.slice(foundIssueIndex +1)]
                    })
                    )
			})
			.catch((err) => {
				alert(err.response.data.errMsg);
			});
	}

	function clickDownVote(issueId) {
		issueAxios
			.put(`/api/issues/downVote/${issueId}`)
			.then((res) => {
                console.log(res.data.downVote)
                    const foundIssueIndex = issueState.issues.findIndex((issue) => issue._id === issueId)
                    const votedIssue = issueState.issues[foundIssueIndex]
                    const returnedVotedIssue = Object.assign(votedIssue, res.data)
                    
                    setIssueState( prevIssueState =>( {
                    ...prevIssueState,
                    issues: [...prevIssueState.issues.slice(0, foundIssueIndex), returnedVotedIssue, ...prevIssueState.issues.slice(foundIssueIndex +1)]
                    })
                    )
			})
			.catch((err) => {
				alert(err.response.data.errMsg);
			});
	}

	function getAuthors() {
		issueAxios
			.get("/api/issues/authors/")
			.then((res) => {
				setAuthors(res.data);
			})
			.catch((err) => console.log(err));
	}


	return (
		<IssueContext.Provider
			value={{
				...issueState,
				getAllPosts,
				getUserPosts,
				addIssue,
				deleteIssue,
				commentOnIssue,
				getComments,
				authors,
				getAuthors,
				clickUpVote,
				clickDownVote,
			}}
		>
			{props.children}
		</IssueContext.Provider>
	);
}
