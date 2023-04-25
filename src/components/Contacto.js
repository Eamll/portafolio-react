// import React, { useState } from 'react';

export const Contacto = () => {
    // const [formStatus, setFormStatus] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/.netlify/functions/submitForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("Form submitted successfully");
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            <h4>Contacto</h4>
            <form onSubmit={handleSubmit} netlify data-netlify="true" name="contact">
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
            {/* {formStatus && <p>{formStatus}</p>} */}
        </div>
    );
};
