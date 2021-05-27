import React, { useState } from 'react';
import APIManager from '../../services/Api/';

const ExampleComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await APIManager.registerUser(email, password);
        console.log(response);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" id="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ExampleComponent;
