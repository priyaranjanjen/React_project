// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './dogs.css';
import Component from './profile'
import FetchDog from './dogs';
import Appointment from './appointment'


const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<Component/>);
// root.render(<FetchDog/>);
root.render(<Appointment/>);