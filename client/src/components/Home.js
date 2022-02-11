import React, { useEffect, useState } from 'react';
import axios from "axios";

//state stores in array 
//
export default function Home(props) {
    // let history = useHistory();
    const [places, setPlaces] = useState([]);
    const [locations, setLocations] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        getStores();
        getLocations();
        getThirdpartyAPi();
    }, []);

    const getStores = async () => {
        const res = await axios.get(`http://localhost:8000/stores`);
        setPlaces(res.data.places);
    };

    const getLocations = async () => {
        const res = await axios.get(`http://localhost:8000/locations`);
        setLocations(res.data.locations);
    };

    const getThirdpartyAPi = async () => {

        const options = {
            method: 'GET',
            url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
            params: { i: 'Gin' },
            headers: {
                'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
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

