import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import UserList from "./UserList";
import "./PswdKpr.css";

const PswdKpr = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editUser, setEditUser] = useState(null);

    const clickHandler = () => {
        setIsClicked(true);
        setEditUser(null); // Reset editUser when adding new password
    }

    const closeModalHandler = () => {
        setIsClicked(false);
        setEditUser(null);
    }

    const addPswdHandler = (newUser) => {
        if (editUser !== null) {
            const updatedUsers = [...users];
            updatedUsers[editUser.index] = newUser;
            setUsers(updatedUsers);
        } else {
            setUsers(prevUsers => [...prevUsers, newUser]);
        }
        setIsClicked(false);
        setEditUser(null);
    }

    const searchChangeHandler = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    const handleEdit = (user) => {
        
        setIsClicked(true);
        setEditUser(user);
    };

    const filteredUsers = users.filter((user) => 
        user.enteredTitle.includes(searchTerm)
    );

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
                    onAddPswd={addPswdHandler}
                    editUser={editUser}
                />
            )}
            <UserList users={filteredUsers} onDelete={handleDelete} onEdit={handleEdit} />
        </Fragment>
    )
}

export default PswdKpr;
