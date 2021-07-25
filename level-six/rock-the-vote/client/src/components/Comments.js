import React from "react";
// import CommentForm from "../forms/CommentForm";
// import { IssueContext } from '../context/IssueProvider'
// import { UserContext } from '../context/UserProvider'

export default function Comments(props) {
	const { content, user } = props;

	return (
		<div className="comment-container">
			{/* <CommentForm _id={_id} /> */}
			<p style={{ backgroundColor: "transparent" }}>
				<small
					style={{
						backgroundColor: "transparent",
						textTransform: "capitalize",
						fontSize: "13px",
					}}
				>
					Posted By: {user.username}
					{" - "}
				</small>
				<strong style={{ backgroundColor: "transparent" }}>{content}</strong>
			</p>
		</div>
	);
}
