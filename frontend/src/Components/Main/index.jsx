
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import styles from "./styles.module.css";

const Main = () => {
    
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
		enqueueSnackbar('Logged out!', { variant: 'info' });
        navigate("/login");
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Darshan-E-Bharat</h1>cd ..
				<button className={styles.logout_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;