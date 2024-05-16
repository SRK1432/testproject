import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import "./PswdKpr.css";

const PswdKpr = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [users, setUsers] = useState([]);

    const clickHandler = () => {
        setIsClicked(true);
    }

    const closeModalHandler = () => {
        setIsClicked(false);
    }

    const addPswdHandler = (user) => {
        setUsers(prevUsers => [...prevUsers, user]);
    }

    return (
        <Fragment>
            <div className="pswdkpr">
                <div>
                    <h2>Password Keeper</h2>
                </div>
                <div>
                    <p>Total Passwords: {users.length}</p> 
                </div>
                <div>
                    <button type="button" onClick={clickHandler}>Add New Password</button>
                </div>
                <div>
                    <label htmlFor="search">Search</label>
                    <input type="text" id="search" />
                </div>
            </div>
            {isClicked && <Modal onClose={closeModalHandler} onAddPswd={addPswdHandler} users={users} />}
        </Fragment>
    )
}

export default PswdKpr;
