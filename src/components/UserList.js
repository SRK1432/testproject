import React from 'react';
import './UserList.css';

const UserList = ({ users, onDelete, onEdit }) => {
    const handleDelete = (index) => {
        onDelete(index);
    };

    const handleEdit = (user) => {
        onEdit(user);
    };

    return (
        <div className="user-list-container">
            <ul className="user-list">
                <strong>All Passwords:</strong>
                {users.map((user, index) => (
                    <li key={index} className="user-list-item">
                        {user.enteredTitle} - {user.enteredPswd}
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <button onClick={() => handleEdit(user)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;
