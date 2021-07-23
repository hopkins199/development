import React from "react";

export default function LoginForm(props) {
	const {
		handleChange,
		handleSubmit,
		btnText,
		errMsg,
		inputs: { username, password },
	} = props;

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={username}
				name="username"
				onChange={handleChange}
				placeholder="Username"
			/>
			<input
				type="password"
				value={password}
				name="password"
				onChange={handleChange}
				placeholder="Password"
			/>
			<button disabled={!password} className="login-btn">
				{btnText}
			</button>
			<p style={{ color: "red", backgroundColor: "transparent" }}>{errMsg}</p>
		</form>
	);
}
