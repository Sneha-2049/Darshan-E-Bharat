import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState("");
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
		setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const url = "http://localhost:8080/api/auth";

			const response = await axios.post(url, data);

			// ✅ VERY IMPORTANT: extract correct structure
			const res = response.data.data;

			// Store in localStorage
			localStorage.setItem("token", res.token);
			localStorage.setItem("role", res.role);
			localStorage.setItem("firstName", res.firstName);
			localStorage.setItem("lastName", res.lastName);
			localStorage.setItem("email", res.email);

			// Store teacher-specific data
			if (res.role === "teacher") {
				localStorage.setItem("expertise", res.expertise || "");
				localStorage.setItem("experience", res.experience || "");
			}

			enqueueSnackbar("Login successful!", { variant: "success" });

			// ✅ Role-based redirect
			if (res.role === "teacher") {
				navigate("/");
			} else {
				navigate("/");
			}

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				enqueueSnackbar(error.response.data.message, { variant: "error" });
			} else {
				setError("Something went wrong");
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login</h1>

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
					<h1>New Here?</h1>
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