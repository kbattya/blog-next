'use client'

import React, { useState } from "react"
import { EyeIcon, EyeBlockedIcon } from "@app/styles/icons"

import Loader from "../common/Loader";
import { useRouter } from "next/navigation";

export default function LoginPage () {
	const [username, setUsername] = useState('')
	
	const [password, setPassword] = useState('')
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter();

	const [error, setError] = useState("")

	const handlePasswordVisibilityToggle = () => {
		setIsPasswordVisible(!isPasswordVisible)
 	}

	const onHandleChangePassword = (e) => {
		setPassword(e.target.value)
	}

	const onHandleChangeUsername = (e) => {
		setUsername(e.target.value);
	}

	const handleLogin = async (e) => {
		setIsLoading(true)
		e.preventDefault();

		const res = await fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});

		if (res.ok) {
			const { token } = await res.json();
			localStorage.setItem('authToken', token);
			setError('');
			router.push('/dashboard');
		} else {
			setError('Invalid credentials');
		}
		setIsLoading(false)
	};

	return (
		<section className="page-container login-page">
			<form className="form" action="" method="post">
					<div className="form-header">
						<h2>Sign in</h2>
					</div>

					<div className="field_container">
						<label
							htmlFor="email"
						>
							Your Email
						</label>
						<input
							id="username"
							type="text"
							className={`text_input`}
							value={username}
							onChange={onHandleChangeUsername}
							required
						/>
					</div>

					<div className="field_container">
						<label
							htmlFor="password"
						>
							Your Password
						</label>
						<div className="password_input_wrapper">
							<input
								id="password"
								type={isPasswordVisible ? "text" : 'password'}
								className={`text_input`}
								value={password}
								onChange={onHandleChangePassword}
								required
								autoComplete="current-password"
							/>
							<span className="toggle_password" onClick={handlePasswordVisibilityToggle}>
								{isPasswordVisible ? <EyeBlockedIcon /> : <EyeIcon />}
							</span>
						</div>
					</div>


					{error.length > 0
						? <span className="validation_message">{error}*</span>
						: <></>
					}
					
					{isLoading
						? <Loader />
						: <button
								className="form_primary_btn"
								onClick={handleLogin}
								type="button"
								disabled={isLoading}
							>
								Sign in
							</button>
					}
					
					<div className="separator">
						{/* <hr />
						<span>Connect with</span>
						<hr /> */}
					</div>

				</form>

		</section>
	)
}
