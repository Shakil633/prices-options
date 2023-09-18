import PropTypes from "prop-types";
import Features from "../Features/Features";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className=" bg-blue-500  text-white py-4 px-2 rounded-lg flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl font-semibold text-center mt-3">{name}</h4>
      <div className="pl-4 mt-3 flex-grow">
        {features.map((features, idx) => (
          <Features key={idx} features={features}></Features>
        ))}
      </div>
      <div className="text-center">
        <button className="mt-12 bg-green-600 py-3 px-4 rounded hover:bg-green-500">
          Buy Now
        </button>
      </div>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};
export default PriceOption;
