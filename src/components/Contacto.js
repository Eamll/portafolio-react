// ContactForm.js
import React, { useState } from 'react';

export const Contacto = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({ 'form-name': form.getAttribute('name'), ...formData }),
            });

            if (response.ok) {
                // Handle successful form submission
                console.log('Form submitted successfully');
                setFormData({});
            } else {
                // Handle errors
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const encode = (data) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };

    return (
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} value={formData.name || ''} />
                </label>
            </p>
            <p>
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleChange} value={formData.email || ''} />
                </label>
            </p>
            <p>
                <label>
                    Message:
                    <textarea name="message" onChange={handleChange} value={formData.message || ''}></textarea>
                </label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
};


