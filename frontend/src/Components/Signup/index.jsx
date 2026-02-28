import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		role: "user",
		expertise: "",
		experience: "",
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
			// ✅ IMPORTANT: Your backend route
			const url = "http://localhost:8080/api/users";

			const response = await axios.post(url, data);

			enqueueSnackbar("Account created successfully!", {
				variant: "success",
			});

			// ✅ Redirect to login after success
			setTimeout(() => {
				navigate("/login");
			}, 1000);

		} catch (error) {
			if (error.response) {
				setError(error.response.data.message);
				enqueueSnackbar(error.response.data.message, {
					variant: "error",
				});
			} else {
				setError("Something went wrong");
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>

				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>

						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={data.firstName}
							onChange={handleChange}
							required
							className={styles.input}
						/>

						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={data.lastName}
							onChange={handleChange}
							required
							className={styles.input}
						/>

						<input
							type="email"
							placeholder="Email"
							name="email"
							value={data.email}
							onChange={handleChange}
							required
							className={styles.input}
						/>

						<input
							type="password"
							placeholder="Password"
							name="password"
							value={data.password}
							onChange={handleChange}
							required
							className={styles.input}
						/>

						{/* Role Selection */}
						<select
							name="role"
							value={data.role}
							onChange={handleChange}
							className={styles.input}
						>
							<option value="user">User</option>
							<option value="teacher">Teacher</option>
							<option value="merchant">Merchant</option>
							<option value="admin">Admin</option>
						</select>

						{/* Show only if teacher */}
						{data.role === "teacher" && (
							<>
								<input
									type="text"
									placeholder="Expertise"
									name="expertise"
									value={data.expertise}
									onChange={handleChange}
									className={styles.input}
								/>

								<input
									type="text"
									placeholder="Experience"
									name="experience"
									value={data.experience}
									onChange={handleChange}
									className={styles.input}
								/>
							</>
						)}

						{error && <div className={styles.error_msg}>{error}</div>}

						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;