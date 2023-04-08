import React from 'react';

export const Contacto = () => {
    return (
        <div>
            <h4>Contacto</h4>
            <form className="contact" method="POST" data-netlify="true">
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
