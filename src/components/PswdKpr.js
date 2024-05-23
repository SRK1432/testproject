import React, {useContext} from "react";
import Modal from "./Modal";
import UserList from "./UserList";
import {PasswordContext} from "../PasswordContext";
import "./PswdKpr.css";

const PswdKpr=() => {
    const {
        isClicked, clickHandler, closeModalHandler, searchTerm, searchChangeHandler, users,
        editUser
    } = useContext(PasswordContext);

    return (
        <>
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
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={searchChangeHandler}
                    />
                </div>
            </div>
            {isClicked && (
                <Modal
                    onClose={closeModalHandler}
                    editUser={editUser}
                />
            )}
            <UserList />
        </>
    )
}

export default PswdKpr;
