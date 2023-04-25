import React from 'react';

export const Contacto = () => {

    function handleSubmit(event) {
        event.preventDefault();

        // create a new FormData object from the form data
        const formData = new FormData(event.target);

        // send a POST request with the form data to the Netlify form submission endpoint
        fetch('/', {
            method: 'POST',
            body: formData,
        })
            .then(() => {
                // if the submission was successful, do something (e.g. show a success message)
                console.log('Form submitted successfully');
            })
            .catch((error) => {
                // if the submission failed, do something (e.g. show an error message)
                console.error(error);
            });
    }

    return (
        <div>
            <h4>Contacto</h4>
            <form onSubmit={handleSubmit} data-netlify="true" name="contact">
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
        </div>
    )
}
