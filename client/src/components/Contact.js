import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                <label htmlFor="message">Message:</label><br />
                <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" required></textarea><br />
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
