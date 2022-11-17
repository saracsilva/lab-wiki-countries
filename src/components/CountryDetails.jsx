import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  let { country } = useParams();
  console.log({ country });
  const [currentCountry, setCurrentCountry] = useState('');
  useEffect(() => {
    const filteredCountry = countries.find(
      (oneCountry) => oneCountry.alpha3Code === country
    );

    setCurrentCountry(filteredCountry);
  }, [country]);
  return (
    <>
      <div>{!currentCountry && <h3>Project not found!</h3>} </div>
      {currentCountry && (
        <div className="col-7">
          <h1>{currentCountry.name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: 30 }}>Capital</td>
                <td>Paris</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  551695 km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <li>
                      <Link to="/AND">Andorra</Link>
                    </li>
                    <li>
                      <Link to="/BEL">Belgium</Link>
                    </li>
                    <li>
                      <Link to="/DEU">Germany</Link>
                    </li>
                    <li>
                      <Link to="/ITA">Italy</Link>
                    </li>
                    <li>
                      <Link to="/LUX">Luxembourg</Link>
                    </li>
                    <li>
                      <Link to="/MCO">Monaco</Link>
                    </li>
                    <li>
                      <Link to="/ESP">Spain</Link>
                    </li>
                    <li>
                      <Link to="/CHE">Switzerland</Link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
