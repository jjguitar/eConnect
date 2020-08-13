import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/Terms.scss';
import logo from '../assets/images/logo.png';

const Terms = () => (
  <>
    <div className='terms__logo'>
      <Link to='/'>
        <img src={logo} alt='Logo' width='70' height='70' />
      </Link>
    </div>
    <div className='terms'>
      <p>
        En cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios, el presente aviso de privacidad tiene como objeto obtener la autorización expresa e informada del titular para el tratamiento y la transferencia de sus datos personales por parte de Ekklesia VIVA como responsable del tratamiento.
        {' '}
        <br />
        {' '}
        De acuerdo a la normatividad citada, Ekklesia VIVA queda autorizado de manera expresa e inequívoca para mantener y manejar la información suministrada, solo para aquellas finalidades para las que se encuentra facultado y respetando en todo caso, la normatividad vigente sobre protección de datos personales.
        {' '}
        <br />
        {' '}
        Autorizo de manera libre y voluntaria el Tratamiento de Datos Personales conforme a la Ley 1581 de 2012 (Ley de Habeas Data)
      </p>
    </div>
  </>
);

export default Terms;
