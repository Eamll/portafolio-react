import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/contacto', { replace: true });
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <h1>!Muchas gracias por su mensaje!</h1>
            <p>Será redirigido a la página de contacto en 3 segundos.</p>
        </div>
    );
};


