import styles from './CountriesList.module.css';
import CountryItem from './CountryItem';
import Spinner from './Spinner';
import Message from './Message';
import PropTypes from 'prop-types'

function CountriesList({cities, isLoading}) {

    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message='Click anywhere on the map to get country' />
    

    const countries = [];

     return (
       <ul className={styles.countriesList}>
         {countries.map((country) => (
           <CountryItem country={country} key={country.id} />
         ))}
       </ul>
     );
}

CountriesList.propTypes = {
    cities: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default CountriesList
