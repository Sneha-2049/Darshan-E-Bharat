import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import styles from "./styles.module.css";
import { FaEye, FaEyeSlash, FaCloudUploadAlt } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user",
    expertise: "",
    experience: "",
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setError(""); // Purana error saaf karein

    try {
      let documentUrl = "";

      // 1. Cloudinary Upload (Only for Vendor)
      if (file && data.role === "vendor"|| data.role === "teacher") {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
        
        const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
        const uploadRes = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        );
        documentUrl = uploadRes.data.secure_url;
      }else if (!file && (data.role === "vendor" || data.role === "teacher")) {
        // Validation check if file is missing for these roles
        setError("Please upload a verification document.");
        setUploading(false);
        return;
    }

      // 2. API Call to Backend (Sirf EK baar call karein)
      const url = "http://localhost:8080/api/users";
      const payload = { ...data, documentUrl };
      
      const response = await axios.post(url, payload);
      
      // 3. Success Handling
      const successMsg = response.data.message || "Account created! Waiting for Admin Approval.";
      enqueueSnackbar(successMsg, { variant: "success" });

      // Redirect to login after a short delay
      setTimeout(() => navigate("/login"), 1200);

    } catch (err) {
      console.error("Signup Error:", err);
      // Backend se aane wala error message dikhayein
      const errorMsg = err.response?.data?.message || "Server error";
      setError(errorMsg);
      enqueueSnackbar(errorMsg, { variant: "error" });
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>Sign In</button>
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

            <div className={styles.password_wrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                className={styles.input}
              />
              <div className={styles.eye_icon} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

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

            {/* Document Upload for Teacher/Vendor */}
            {(data.role === "vendor" || data.role === "teacher") && (
              <div className={styles.file_upload_wrapper}>
                <label htmlFor="doc">
                   <FaCloudUploadAlt /> {data.role === "vendor" ? "Upload Shop License/Aadhar" : "Upload Teaching Certificate/Aadhar"}
                </label>
                <input 
                  type="file" 
                  id="doc" 
                  onChange={handleFileChange} 
                  required 
                />
                {file && <span className={styles.file_name}>{file.name}</span>}
              </div>
            )}

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

            <button type="submit" className={styles.green_btn} disabled={uploading}>
              {uploading ? "Uploading..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;