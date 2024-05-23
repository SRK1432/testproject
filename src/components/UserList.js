import React, {useContext} from 'react';
import {PasswordContext} from "../PasswordContext";
import './UserList.css';

const UserList=() => {
    const {users, handleDelete,handleEdit} = useContext(PasswordContext);

    return (
        <div className="user-list-container">
            <ul className="user-list">
                <strong>All Passwords:</strong>
                {users.map((user, index) => (
                    <li key={index} className="user-list-item">
                        {user.enteredTitle} - {user.enteredPswd}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleEdit(user, index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;
