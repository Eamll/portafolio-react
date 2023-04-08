import React from 'react'

export const Curriculum = () => {
    return (
        <div className='page'>
            <h1 className='heading'>Curriculum</h1>
            <h2>Experiencia</h2>
            <p>
                Empresa: Consultora Solución<br />
                Cargo: Desarrollador de Tecnología
            </p>
            <p>Responsabilidades:</p>
            <ul>
                <li>Colaboré activamente en el área de tecnología, desarrollando soluciones innovadoras para optimizar y mejorar los procesos de trabajo.</li>
                <li>Implementé y promoví la adopción de nuevas herramientas tecnológicas que contribuyeron a una mayor organización y eficiencia dentro de la empresa.</li>
            </ul>
            <h2>Conocimientos</h2>
            <div class="skills-container">
                <div>
                    <h4>MERN Stack</h4>
                    <ul>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div>
                    <h4>Bases de datos</h4>
                    <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>Firebase</li>
                    </ul>
                </div>
                <div>
                    <h4>Otros conocimientos Back End</h4>
                    <ul>
                        <li>C#</li>
                        <li>Sequelize (ORM)</li>
                        <li>Express JWT</li>
                        <li>JSON Web Token</li>
                    </ul>
                </div>
                <div>
                    <h4>Front End</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div>
                    <h4>Desarrollo móvil multiplataforma</h4>
                    <ul>
                        <li>Flutter-Dart</li>
                    </ul>
                </div>
            </div>

            <h2>Voluntariados</h2>
            <ul>
                <li>
                    <h4>2018-2019/UTEPSA University</h4>
                    <p>The program "CURSO DE COMPUTACIÓN ADULTO MAYOR" teaching elderly people the basics of computers in order for them to adapt to our modern times.</p>
                </li>
                <li>
                    <h4>2021-Current Time/UTEPSA University</h4>
                    <p>The program "EduActivistas" with the support of Switzerland Embassy in order to reduce the breaches between men and women.</p>
                </li>

            </ul>
            {/* <h4>2018-2019/UTEPSA University</h4>
            <p>The program "CURSO DE COMPUTACIÓN ADULTO MAYOR" teaching elderly people the basics of computers in order for them to adapt to our modern times.</p>
            <h4>2021-Current Time/UTEPSA University</h4>
            <p>The program "EduActivistas" with the support of Switzerland Embassy in order to reduce the breaches between men and women.</p> */}
            <ul>

            </ul>
        </div>
    )
}
