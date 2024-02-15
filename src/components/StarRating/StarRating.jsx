
import { FaStar } from "react-icons/fa";

const StarRating = () => {

  return (
    <div className="grade">
      {[...Array(5)].map(() => {
        return <FaStar />;
      })}
    </div>
  );
};
export default StarRating;
