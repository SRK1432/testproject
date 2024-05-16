import React, { Fragment, useState } from 'react';
import UserList from './UserList';
import './Modal.css'; 

const Modal = ({ onClose, onAddPswd, users }) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPswd, setEnteredPswd] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const newUser = { enteredTitle, enteredPswd };
        onAddPswd(newUser);
        console.log(newUser);
        setEnteredTitle('');
        setEnteredPswd('');
    }
    
    const closeModal = () => {
        onClose();
    }

    const handleDelete = (index) => {
        
    }

    const handleEdit = (index) => {
    
    }
   
    return (
        <Fragment>
            <div className="modal-container">
                <div className="input-group">
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        id='title'
                        value={enteredTitle}
                        onChange={(e) => setEnteredTitle(e.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        value={enteredPswd}
                        onChange={(e) => setEnteredPswd(e.target.value)} />
                </div>
                <div className="button-group">
                    <button className="btn-submit" type='submit' onClick={submitHandler}>Add</button>
                    <button className="btn-cancel" type='button' onClick={closeModal}>x</button>
                </div>
            </div>
            <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} /> 
        </Fragment>
    )
}

export default Modal;
