import React from 'react';
// import { useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './dogs.css';
import Component from './profile'
import FetchDog from './dogs';
import Appointment from './appointment'

// function AfterAppointment(){
//     const [afterLoading, setAfterLoading] = useState(true);

//     const cancel = () =>{
//         setAfterLoading(false);
//     }

//     return(
//         <div>
//             {afterLoading? 
//                 <Appointment/>
//                 cancel() : 
//                 <div>
//                     <h1>Appointment Booked Successfully</h1>
//                     <button type='button' onClick={<Appointment/>}>Cancel Appointment</button>
//                 </div>
//             }
//         </div>
//     )
// }

const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<Component/>);
// root.render(<FetchDog/>);
root.render(<Appointment/>);