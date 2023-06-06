import React, { useState, useEffect }  from 'react';
import getAllCountriesInfo from '../services/countriesService';
import Regions from './Regions';
import Countries from './Countries';


const Main = () => {
// state visada top level - virsuje
    const [countries, setCountries] = useState([]);

    const getData = () => {
        // gauti duomenis is services aprasyto axios get metodo
        getAllCountriesInfo()
        .then(response => {
        setCountries(response)   
    }
        )}
const uniqueRegions = ["All", ...new Set(countries.map((country) => country.region))]
console.log(uniqueRegions);

const filterData = (region) => {
console.log(region);
}
    

    // kada pakviesti, daryti requesta - useEffect
    useEffect(()=>{
        getData();
    }, []);

    
    console.log(countries);


  return (
    <div className ='container'>
        labas
        <Regions regions = {uniqueRegions} filterData={filterData}/>
        <Countries allCountries={countries}/>
    </div>
  )
}


export default Main