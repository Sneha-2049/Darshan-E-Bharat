import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");


	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		setError(""); // Clear the error message when the user starts typing
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			console.log("Login Response:", res);

			if (res && res.data && res.data.token) {
				// Save token and user details in localStorage
				console.log("Stored Data in localStorage:");
				localStorage.setItem("token", res.data.token);
				localStorage.setItem("firstName", res.data.firstName);
				localStorage.setItem("lastName", res.data.lastName);
				localStorage.setItem("email", res.data.email);
				
                // Log to verify storage
                console.log("Stored Data in localStorage:");
                console.log("Token:", localStorage.getItem("token"));
                console.log("First Name:", localStorage.getItem("firstName"));
                console.log("Last Name:", localStorage.getItem("lastName"));
                console.log("Email:", localStorage.getItem("email"));


				// Redirect to the homepage
				window.location = "/";
			  } else {
				console.error("Response data does not contain expected properties");
			  }
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				enqueueSnackbar(error.response.data.message, { variant: 'error' });
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;