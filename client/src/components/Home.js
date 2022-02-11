import React, { useEffect, useState } from 'react';
import axios from "axios";

//state stores in array 
//
export default function Home(props) {
    let history = useHistory();
    const [places, setPlaces] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        getStores();
        getLocations();
    }, []);

    const getStores = async () => {
        const options = {
            method: 'GET',
            url: 'https://globalwinescore-global-wine-score-v1.p.rapidapi.com/globalwinescores/latest/',
            params: {limit: '100', ordering: '-date'},
            headers: {
              accept: 'application/json',
              // authorization: '<REQUIRED>',
              'x-rapidapi-host': 'globalwinescore-global-wine-score-v1.p.rapidapi.com',
              'x-rapidapi-key': '8ed94299d9mshd53a990809aa677p1aa9c5jsndfd4dbcda52c'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    
        // setStores(res.data.Stores);
    };
   
}
