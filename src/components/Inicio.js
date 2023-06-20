import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListaTrabajos'


export const Inicio = () => {
    return (
        <div className='home'>
            <h1>
                Hola, soy <strong>Alexander Morales</strong>, me apasiona el <strong> desarrollo de aplicaciones Web </strong>y
                estoy en último año de carrera de Ing. de Sistemas.
            </h1>
            <h2 className='title'>
                Tengo muchas ganas de ampliar mis conocimientos para ofrecer soluciones óptimas a las problemáticas que se presenten.<br /><br /> <Link to="/contacto">¡Contacta conmigo!</Link>
            </h2>
            <section className='last-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Estos son algunos de mis trabajos de desarrollo web</p>
                <ListadoTrabajos limite="2" />
            </section>
        </div>
    )
}
