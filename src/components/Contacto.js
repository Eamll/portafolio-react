import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Contacto = () => {
    const formEndpoint = 'https://getform.io/f/23e33eb5-d5fd-448c-8141-f4572037a747';
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);

        const form = event.target;
        const formData = new FormData(form);
        const data = new URLSearchParams([...formData.entries()]);

        try {
            const response = await axios.post(formEndpoint, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            if (response.status === 200) {
                console.log('Form submitted successfully');
                navigate('/thank-you');
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error(error);
        }

        setSubmitting(false);
    };

    return (
        <div>
            <h4>Contacto</h4>
            <form onSubmit={handleSubmit} name='contact'>
                <input type='hidden' name='form-name' value='contact' />

                <div>
                    <label htmlFor='name-form'>Nombre</label>
                    <input type='text' name='name' required id='name-form' />
                </div>
                <div>
                    <label htmlFor='lastname-form'>Apellidos</label>
                    <input type='text' name='apellidos' id='lastname-form' />
                </div>
                <div>
                    <label htmlFor='email-form'>Email</label>
                    <br />
                    <input type='email' name='email' required id='email-form' />
                </div>
                <div>
                    <label htmlFor='message-form'>Motivo de contacto</label>
                    <textarea name='message' rows='7' id='message-form'></textarea>
                </div>
                <button type='submit' disabled={submitting}>
                    {submitting ? 'Enviando...' : 'Enviar'}
                </button>
            </form>
        </div>
    );
};
