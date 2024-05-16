import React from 'react';
import './UserList.css'; 

const UserList = ({ users, onDelete, onEdit }) => {
    return (
        <div className="user-list-container">
            <ul className="user-list">
                {users.map((user, index) => (
                    <li key={index} className="user-list-item">
                       {user.enteredTitle} - {user.enteredPswd}
                        <button onClick={() => onDelete(index)}>Delete</button> 
                        <button onClick={() => onEdit(index)}>Edit</button> 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList;
