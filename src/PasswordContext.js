import React, {createContext, useState} from "react";

export const PasswordContext = createContext();

export const PasswordProvider = ({children}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [editUser, setEditUser] = useState(null);

    const clickHandler = () => {
        setIsClicked(true);
        setEditUser(null);
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
    }

    const handleEdit = (user, index) => {
        setIsClicked(true);
        setEditUser({ ...user, index });
    }

    const filteredUsers = users.filter((user) =>
        user.enteredTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <PasswordContext.Provider value={{
            isClicked, clickHandler, closeModalHandler, addPswdHandler,
            searchTerm, searchChangeHandler, users: filteredUsers,
            handleDelete, handleEdit, editUser
        }}>
            {children}
        </PasswordContext.Provider>
    );
}
export default PasswordContext;