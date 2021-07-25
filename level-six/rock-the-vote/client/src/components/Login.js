import React, { useState, useContext } from "react";
import LoginForm from "../forms/LoginForm";
import { UserContext } from "../context/UserProvider";

const initInputs = { username: "", password: "" };

export default function Login() {
	const [inputs, setInputs] = useState(initInputs);
	const [toggle, setToggle] = useState(false);

	const { signup, login, errMsg, resetAuthErr } = useContext(UserContext);

	function handleChange(e) {
		const { name, value } = e.target;
		setInputs((prevInputs) => ({
			...prevInputs,
			[name]: value,
		}));
	}

	function handleSignup(e) {
		e.preventDefault();
		signup(inputs);
	}

	function handleLogin(e) {
		e.preventDefault();
		login(inputs);
	}

	function toggleForm() {
		setToggle((prev) => !prev);
		resetAuthErr();
	}

	return (
		<div className="login-container">
			<h1>Please Login or Signup to continue.</h1>
			{!toggle ? (
				<>
					<LoginForm
						handleChange={handleChange}
						handleSubmit={handleSignup}
						inputs={inputs}
						btnText="Sign Up"
						errMsg={errMsg}
					/>
					<p onClick={toggleForm} className="question">
						Already a Member?
					</p>
				</>
			) : (
				<>
					<LoginForm
						handleChange={handleChange}
						handleSubmit={handleLogin}
						inputs={inputs}
						btnText="Login"
						errMsg={errMsg}
					/>
					<p onClick={toggleForm} className="question">
						Not a member?
					</p>
				</>
			)}
		</div>
	);
}
