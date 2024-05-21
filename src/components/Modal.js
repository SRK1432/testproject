import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ onClose, onAddPswd, editUser }) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPswd, setEnteredPswd] = useState('');

    useEffect(() => {
        if (editUser) {
            setEnteredTitle(editUser.enteredTitle);
            setEnteredPswd(editUser.enteredPswd);
        } else {
            setEnteredTitle('');
            setEnteredPswd('');
        }
    }, [editUser]);

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredTitle.trim() === '' || enteredPswd.trim() === '') {
            return;
        }
        if (editUser) {
            onAddPswd({ ...editUser, enteredTitle, enteredPswd });
        } else {
            onAddPswd({ enteredTitle, enteredPswd });
        }
        onClose();
    };

    const closeModal = () => {
        onClose();
    };

    return (
        <div className="modal-container">
            <form onSubmit={submitHandler}>
                <div className="input-group">
                    <label htmlFor='title'>Title:</label>
                    <input
                        type='text'
                        id='title'
                        value={enteredTitle}
                        onChange={(e) => setEnteredTitle(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor='password'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        value={enteredPswd}
                        onChange={(e) => setEnteredPswd(e.target.value)}
                    />
                </div>
                <div className="button-group">
                    <button className="btn-submit" type='submit'>
                        {editUser ? 'Update' : 'Add'}
                    </button>
                    <button className="btn-cancel" type='button' onClick={closeModal}>x</button>
                </div>
            </form>
        </div>
    );
};

export default Modal;
