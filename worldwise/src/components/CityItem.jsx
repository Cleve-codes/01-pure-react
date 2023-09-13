import PropTypes from "prop-types"

function CityItem({ city }) {
  return <li>{city}</li>;
}

CityItem.PropTypes = {
  city: PropTypes.string.isRequired,
};

export default CityItem;
