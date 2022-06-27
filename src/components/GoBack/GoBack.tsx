import { useNavigate } from "react-router-dom";
import backIco from "../../assets/back-ico.svg";
import styles from "./GoBack.module.css";

function GoBack() {
  const navigate = useNavigate();

  return (
    <div className={styles.GoBack} onClick={() => navigate(-1)}>
      <img src={backIco} alt="Go back" />
      <p>Go back</p>
    </div>
  );
}

export default GoBack;
