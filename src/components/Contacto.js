import React, { useState } from 'react';

export const Contacto = () => {
    const [formStatus, setFormStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        try {
            const response = await fetch('/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setFormStatus('Form submitted successfully');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            setFormStatus(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h4>Contacto</h4>
            <form onSubmit={handleSubmit} data-netlify="true" name="contact">
                <input type="hidden" name="form-name" value="contact" />

                <div>
                    <label htmlFor="name-form">Nombre</label>
                    <input type="text" name="name" required id="name-form" />
                </div>
                <div>
                    <label htmlFor="lastname-form">Apellidos</label>
                    <input type="text" name="apellidos" id="lastname-form" />
                </div>
                <div>
                    <label htmlFor="email-form">Email</label><br></br>
                    <input type="email" name="email" required id="email-form" />
                </div>
                <div>
                    <label htmlFor="message-form">Motivo de contacto</label>
                    <textarea name="message" rows="7" id="message-form"></textarea>
                </div>
                <div>
                    <div data-netlify-recaptcha="true"></div>
                </div>
                <button type="submit">Enviar</button>
            </form>
            {formStatus && <p>{formStatus}</p>}
        </div>
    );
};
