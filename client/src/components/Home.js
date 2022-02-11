import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavBar from './NavBar'; 

//state stores in array 
//
export default function Home(props) {
    // let history = useHistory();
    const [stores, setStores] = useState([]);
    const [locations, setLocations] = useState([]);
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);


    useEffect(() => {
        getStores();
        getLocations();
        getUsers();
        // getThirdpartyAPi();
    }, []);

    const getUsers = async () => {
        const res = await axios.get(`http://localhost:8000/users`);
        console.log(res.data)
        setUsers(res.data);
    };

    const getStores = async () => {
        const res = await axios.get(`http://localhost:8000/stores`);
        setStores(res.data.stores);
    };

    const getLocations = async () => {
        const res = await axios.get(`http://localhost:8000/locations`);
        setLocations(res.data.locations);
    };

    // const getThirdpartyAPi = async () => {

    //     const options = {
    //         method: 'GET',
    //         url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
    //         params: { i: 'Gin' },
    //         headers: {
    //             'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
    //             'x-rapidapi-key': '8ed94299d9mshd53a990809aa677p1aa9c5jsndfd4dbcda52c'
    //         }
    //     };

    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });

    // setStores(res.data.Stores);

    return (
        <div>
            <NavBar/>
            <h1>hello</h1>
            <ul>
        {users.map((user)=> {
            return(
            <li>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p><img src={user.photo_url}/></p>
            </li>
            )
        }) }
            </ul>
        </div>
    )

};
