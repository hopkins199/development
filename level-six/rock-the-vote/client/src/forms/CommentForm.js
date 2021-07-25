import React, { useState, useContext } from "react";
import { IssueContext } from "../context/IssueProvider";
import { UserContext } from "../context/UserProvider";

const initInputs = {
	content: "",
};

export default function CommentForm(props) {
	const [inputs, setInputs] = useState(initInputs);
	const { commentOnIssue, getComments } = useContext(IssueContext);
	const { user } = useContext(UserContext);
	const { content } = inputs;
	const [comments, setComments] = useState([]);
	const { _id} = props

	// console.log(_id)
	function handleChange(e) {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		commentOnIssue(_id, user._id, {
			...inputs,
			issue: _id,
		}).then((commentOnIssue) =>
			setComments((prevComments) => {
				return [...prevComments, commentOnIssue];
			})
		);
		setInputs(initInputs);
		getComments(_id).then((issueComment) => setComments(issueComment));
	}

	return (
		<div className="comment">
			<form onSubmit={handleSubmit} className="comment-form">
				<textarea
					rows="2"
					cols="80"
					name="content"
					value={content}
					onChange={handleChange}
					placeholder="Your comment goes here"
					className="insert-comment"
				/>
				<button className="comment-btn">Submit Comment</button>
			</form>
		</div>
	);
}
