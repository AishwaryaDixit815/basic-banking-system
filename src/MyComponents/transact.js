import './view.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

// const financialGoal = (evt.target.validity.valid) ? 
//   evt.target.value : this.state.financialGoal;

export const Transact = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        email: "",
        balance: ""
    });

    const { name, email, balance } = user;

    const onInputChange = e => {
        var result = balance - e.target.value;
        setUser({ ...user, [e.target.name]: result });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    };

    return (
        <form onSubmit={e => onSubmit(e)}>
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label class="col-form-label">Send To</label>
                </div>
                <div class="col-auto">
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected>Choose...</option>
                        <option value="1">Leanne Graham</option>
                        <option value="2">Ervin Howell</option>
                        <option value="3">Clementine Bauch</option>
                        <option value="4">Patricia Lebsack</option>
                        <option value="5">Chelsey Dietrich</option>
                        <option value="6">Mrs. Dennis Schulist</option>
                        <option value="7">Kurtis Weissnat</option>
                        <option value="8">Nicholas Runolfsdottir V</option>
                        <option value="9">Glenna Reichert</option>
                        <option value="10">Clementina DuBuque</option>
                    </select>
                </div>
            </div>
            <br />
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="exampleFormControlInput1" class="col-form-label">Amount</label>
                </div>
                <div class="col-auto">
                    <input type="text" name='balance' pattern="[0-9]*" placeholder="1111" onChange={e => onInputChange(e)}/>
                </div>
            </div>
            <br />
            <button type="submit" class="btn btn-outline-light">Send</button>

        </form>
    )
}

export default Transact
