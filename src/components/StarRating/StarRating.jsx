import { FaStar } from "react-icons/fa";
import styles from "./Starrating.module.css";

const StarRating = () => {

  return (
    <div className={styles.grade}>
      {[...Array(5)].map(() => {
        return <FaStar />;
      })}
    </div>
  );
};
export default StarRating;
