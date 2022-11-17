import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries, setCountries }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group">
            {countries.map((country) => (
              <Link
                key={country.name.official}
                className="list-group-item list-group-item-action"
                to={`/country-details/${country.alpha3Code}`}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="something"
                />
                <h5>{country.name.official}</h5>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
