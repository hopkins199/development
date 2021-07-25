import React, { useEffect, useContext } from "react";
import PostList from "./PostList.js";
// import { UserContext } from "../context/UserProvider.js";
import { IssueContext } from "../context/IssueProvider.js";

export default function Public(props) {
	const { getAllPosts, issues, getComments, comments, getAuthors } =
		useContext(IssueContext);

	useEffect(() => {
		getAllPosts();
		getAuthors();
		getComments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="public">
			<h1 className="public-title">Thoughts Posted by all users.</h1>
			<div className="public-inner">
				<PostList issues={issues} comments={comments} />
			</div>
		</div>
	);
}
