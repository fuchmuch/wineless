import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavBar from './NavBar';
import StoreDetails from './StoresDetails';

//state stores in array 
//
export default function StoresDetails() {

    const [stores, setStores] = useState([]);
    const [locations, setLocations] = useState([]);
    const [users, setUsers] = useState([]);
    const [id, setId]= useState('')

   

    useEffect(() => {
        getStores();
        getLocations();
        getUsers();
        // getThirdpartyAPI();
    }, []);


    const getUsers = async () => {
        const res = await axios.get(`http://localhost:8000/users`);
        console.log(res.data)
        setUsers(res.data);
    };

    const getStores = async () => {
        const res = await axios.get(`http://localhost:8000/stores`);
        console.log(res.data)
        setStores(res.data);
    };

    const getLocations = async () => {
        const res = await axios.get(`http://localhost:8000/locations`);
        console.log(res.data)
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
            <NavBar />
            <h1>Users list</h1>
            <ul>
                {users.map((user) => {
                    return (
                        <li>
                            <p className='firstname'>{user.first_name}</p>
                            <p className='lastname'>{user.last_name}</p>
                            <p className='profile'><img src={user.photo_url} width="300" height="200"  /></p>
                        </li>
                    )
                })}
            </ul>
            
            <section className="stores-Section">
                {/* <Stores/> */}
                <ul>
                {stores.map((store) => {
                    return (
                        <div>
                    <li>
                        <p>{store.name}</p>
                        <p>{store.location}</p>
                        <p>{store.address}</p>
                        <p ><img src={store.photo_url} width="250" height="400" className='store-image'/></p>
                        <p>{store.description}</p>
                        <p>{store.price}</p>
                        <p>{store.type}</p>
                    </li>
                    </div>
                    )
                        })}
                        </ul>

            </section>

        </div>
    )

};
