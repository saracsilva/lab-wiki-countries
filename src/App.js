import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesData from './countries.json';

function App() {
  const [countries, setCountries] = useState(countriesData);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route
              path="/"
              element={
                <CountriesList
                  setCountries={setCountries}
                  countries={countries}
                />
              }
            />
            <Route
              path="/country-details/:country"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
