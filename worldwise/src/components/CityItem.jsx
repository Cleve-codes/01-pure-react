import PropTypes from "prop-types"

function CityItem({ city }) {
  return <li>{city.cityName}</li>;
}

CityItem.propTypes = {
  city: PropTypes.object.isRequired,
};

export default CityItem;
