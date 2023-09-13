import styles from './CountryList.module.css';
import CountryItem from './CountryItem';
import Spinner from './Spinner';
import Message from './Message';
import PropTypes from 'prop-types'

function CountriesList({cities, isLoading}) {

    if(isLoading) return <Spinner />

    if(!cities.length) return <Message message='Click anywhere on the map to get country' />
    

    const countries = cities.reduce((arr, city) => {
        if(!arr.map((el) => el.country).includes(city.country)){
            return [...arr, {country: city.country, emoji: city.emoji}]
        }
        else return arr;
    }, []);

     return (
       <ul className={styles.countryList}>
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