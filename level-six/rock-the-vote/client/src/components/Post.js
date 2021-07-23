import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import { IssueContext } from "../context/IssueProvider";
import CommentList from "./CommentList";

export default function Post(props) {
	const { title, content, _id } = props;
	const { user } = useContext(UserContext);
	const { deleteIssue, authors, getComments, issueId } = useContext(IssueContext);
	const [toggle, setToggle] = useState(false);
	const [comments, setComments] = useState([])

	function toggleComment() {
		setToggle((prev) => !prev);
		getComments(_id).then((issueComments) => setComments(issueComments))
	}

	function handleDelete() {
		deleteIssue(_id);
	}

	// useEffect(() => {
	// }, []);

	return (
		<div className="issue">
			<h1 style={{ fontSize: "1.2rem" }}>{title}</h1>
			<p style={{ textTransform: "capitalize" }}>
				<small style={{ backgroundColor: "transparent" }}>
					Author:{" "}
					{authors.find((author) => author._id === props.user)
						? authors.find((author) => author._id === props.user).username
						: null}{" "}
				</small>
			</p>
			<h3 style={{ fontSize: "1.1rem" }}>{content}</h3>
			<div className="post-actions">
				{!toggle ? (
					<p onClick={toggleComment}>Show Comments</p>
				) : (
					<>
						<p onClick={toggleComment}>Hide Comments</p>
						<CommentList comments={comments}/>
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
