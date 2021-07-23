import React, { useState, useContext } from "react";
import { IssueContext } from '../context/IssueProvider'

const initInputs = {
	content: "",
};

export default function CommentForm(props) {
	const [inputs, setInputs] = useState(initInputs);
	const { commentOnIssue, _id, user } = useContext(IssueContext)
	const { content } = inputs;
  const [comments, setComments] = useState([])

	function handleChange(e) {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		commentOnIssue(inputs, _id, user).then((newComment) => setComments(newComment))
		setInputs(initInputs)
	}

	return (
		<div className='comment'>
			<form onSubmit={handleSubmit} className="comment-form" >
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
