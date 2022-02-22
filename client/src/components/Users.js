import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Users() {
    const [user, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [id, setId] = useState('')


    const getUsers = async () => {
        const res = await axios.get(`http://localhost:8000/users`);
        setUsers(res.data);
        getId(res.data)
    };

    const getUser = async () => {
        console.log('this is get store function>>>>', id)
        const res = await axios.get(
            `http://localhost:8000/users/${id}`
        );
        setSelectedUser(res.data);
    };

    const deleteUsers = async (userId) => {
        console.log(`this is line 35 ${userId}`);
        const res = await axios.delete(`http://localhost:8000/users/${userId}`);
        deleteUsers(res.data)
    };

    useEffect(() => {
        getUsers();
        return () => { }
    }, [])

    useEffect(() => {
        if (id) getUser()
        return () => { }
    }, [id])
}

if (!users.length) return <div>Loading..</div>
return <div>
    {users.map(user => {
        return <div>
            <div>
                <h1>{store.name}</h1>
                <img src={store.photo_url} />
            </div>


        </div>
    })}
</div>


