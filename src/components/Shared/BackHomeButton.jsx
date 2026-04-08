import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../style/backHomeButton.module.css";

export default function BackHomeButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <button
      type="button"
      className={styles.backBtn}
      onClick={() => {
        navigate("/");
      }}
      aria-label="Back to home"
      title="Back to home"
    >
      Back
    </button>
  );
}

