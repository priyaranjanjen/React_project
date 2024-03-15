import React from "react";
import { useState, useEffect } from "react";

function Appointment(){

    const [afterLoading, setAfterLoading] = useState(false);
    const [additionalInput, setAdditionalInput] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        doctor: "",
        where: "",
        when: ""
    })

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === "datetime-local") {
            // Handle datetime-local input separately
            setFormData({...formData, [name]: value});
        } else {
            // For other input types, update formData as usual
            setFormData({...formData, [name]: value});
            // Update additionalInput based on the selected doctor
        }
        if(name === "doctor"){
            setAdditionalInput(value !== "0");
        }
        // console.log(formData);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        api();
    }

    const api = async() =>{

        setLoading(true);

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        // const data = await response.json();
        
        setTimeout(() => {
            setLoading(false);
        },1000)
        setAfterLoading(true);
    }

    const cancelAppointment = () => {
        setAfterLoading(false);
    }

    return(       
        <div>
            {afterLoading? 
           ( <div>
                <h1>Appointment Booked Successfully</h1>
                <button type='button' onClick={cancelAppointment}>Cancel Appointment</button>
            </div>) : 
            (<div>
                <h1>BOOK A SESSION</h1>
                <p>Fill in the Form below to book a virtual session with your doctor</p>
                {loading? 
                    (<h1>Sheduling the Appointment..</h1>) : 

                    (<form onSubmit={handleSubmit}>
                        <h5>Basic Info</h5>

                        First Name - 
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required></input> <br/>
                        Last Name - 
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required></input> <br/>
                        Email - 
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required></input>  

                        <h5>Doctor</h5>
                        <select name="doctor" onChange={handleChange} required>
                            <option selected value="0">Select your Doctor</option>
                            <option value="Dr. X">Dr. X</option>
                            <option value="Dr. Y">Dr. Y</option>
                            <option value="Dr. Z"> Dr. Z</option>
                        </select> <br/>
                        {additionalInput && (
                            <div>
                                <h5>Where ?</h5>

                                <input type="radio" name="where" value="Google Meet" onChange={handleChange} required /> Google Meet
                                <input type="radio" name="where" value="Phone" onChange={handleChange} required /> Phone

                                <h5>When ?</h5>
                                <input type="datetime-local" name="when" value={formData.when} onChange={handleChange} required />

                            </div>
                        )}
                        <br />
                        <button type="submit">Confirm Booking</button>
                    </form>)
                }
            </div>)
            }
        </div>
    )
}

export default Appointment;