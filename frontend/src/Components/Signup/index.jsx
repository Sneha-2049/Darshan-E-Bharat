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

    // teacher fields
    expertise: "",
    experience: "",

    // vendor fields
    shopName: "",
    phone: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = ({ currentTarget: input }) => {
    setData(prev => ({
      ...prev,
      [input.name]: input.value
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/users";

      await axios.post(url, data);

      enqueueSnackbar("Account created successfully!", {
        variant: "success",
      });

      setTimeout(() => navigate("/login"), 1200);

    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
        enqueueSnackbar(err.response.data.message, {
          variant: "error",
        });
      } else {
        setError("Server error");
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>

        {/* LEFT PANEL */}
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign In
            </button>
          </Link>
        </div>

        {/* RIGHT PANEL */}
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

            {/* TEACHER FIELDS */}
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

            {/* VENDOR FIELDS */}
            {data.role === "vendor" && (
              <>
                <input
                  type="text"
                  placeholder="Shop Name"
                  name="shopName"
                  value={data.shopName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />

                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </>
            )}

			{/* ROLE SELECT */}
            <select
              name="role"
              value={data.role}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="user">User</option>
              <option value="teacher">Teacher</option>
              <option value="vendor">Vendor</option>
            </select>

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