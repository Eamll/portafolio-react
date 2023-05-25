import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ThankYou = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/contacto');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <h1>Thank you for submitting the form!</h1>
            <p>You will be redirected to the contact page in 3 seconds.</p>
        </div>
    );
};


