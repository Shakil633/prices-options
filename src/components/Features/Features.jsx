import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({ features }) => {
  return (
    <div className=" flex items-center gap-2 content-center mt-2">
      <div>
        <AiFillCheckCircle className="text-green-500"></AiFillCheckCircle>
      </div>
      <h2>{features}</h2>
    </div>
  );
};
Features.propTypes = {
  features: PropTypes.object.isRequired,
};
export default Features;
