import React from 'react'

export const Servicios = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Servicios</h1>
            <section className='services'>
                <article className='service'>
                    <h2>Desarrollo Web Full Stack</h2>
                    <p>Desarrollo de aplicaciones web completas utilizando el MERN Stack y otras tecnologías.</p>
                </article>
                <article className='service'>
                    <h2>Desarrollo de API</h2>
                    <p>Creación y diseño de APIs RESTful para conectar tu aplicación a bases de datos y otros servicios.</p>
                </article>
                <article className='service'>
                    <h2>Desarrollo de aplicaciones móviles</h2>
                    <p>Desarrollo de aplicaciones móviles multiplataforma utilizando Flutter y Dart.</p>
                </article>
                <article className='service'>
                    <h2>Diseño Web</h2>
                    <p>Diseño de sitios web atractivos y funcionales utilizando HTML, CSS y JavaScript.</p>
                </article>
                <article className='service'>
                    <h2>Integración de bases de datos</h2>
                    <p>Integración de bases de datos como MySQL, PostgreSQL y Firebase en tus proyectos web y móviles.</p>
                </article>
            </section>
        </div>
    )
}
