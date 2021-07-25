import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { IssueContext } from "../context/IssueProvider";
import CommentList from "./CommentList";

export default function Post(props) {
	const { title, content, _id, upVote, downVote } = props;
	// const {_id} = issue
	// console.log("id:", _id)
	const { user } = useContext(UserContext);
	const { deleteIssue, authors, getComments, clickDownVote, clickUpVote} =
		useContext(IssueContext);

	const [toggle, setToggle] = useState(false);
	const [comments, setComments] = useState([]);


	function toggleComment() {
		getComments(_id).then((issueComments) => setComments(issueComments));
		setToggle((prev) => !prev);
	}

	function handleDelete() {
		deleteIssue(_id);
	}

	function thumbsUp() {
		clickUpVote(_id);
	}

	function thumbsDown() {
		clickDownVote(_id);
	}

	return (
		<div className="issue">
			<h1 style={{ fontSize: "1.2rem" }}>{title}</h1>
			<p style={{ textTransform: "capitalize" }}>
				<small style={{ backgroundColor: "transparent" }}>
					Posted By:{" "}
					{authors.find((author) => author._id === props.user)
						? authors.find((author) => author._id === props.user).username
						: null}{" "}
				</small>
			</p>
			<h3 style={{ fontSize: "1.1rem" }}>{content}</h3>
			<div className="vote">
				<p onClick={thumbsUp}>👍 {upVote}</p>
				<p onClick={thumbsDown}>👎 {downVote}</p>
			</div>
			<div className="post-actions">
				{!toggle ? (
					<p onClick={toggleComment}>Show Comments</p>
				) : (
					<>
						<p onClick={toggleComment}>Hide Comments</p>
						<CommentList _id={_id} comments={comments} />
					</>
				)}
				{props.user === user._id ? (
					<p onClick={handleDelete} style={{ color: "red" }}>
						Delete Post
					</p>
				) : null}
			</div>
		</div>
	);
}
