import './view.css';

import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

export const Cust = () => {
    const [users, setUser] = useState([]); //blank array initially

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);
    }

    return (
        <div>
            <h1>Customers</h1>
            <table class="table " style={{textAlign: 'left', color: 'white'}}>
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Transact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.balance}</td>
                                <td>
                                    <Link class="btn btn-outline-light" to={`/transact/${user.id}`}>Send</Link>    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Cust;
