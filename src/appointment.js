import React from "react";
import { useState } from "react";

function Appointment(){

    const [selectOption, setSelectedOption] = useState("0")
    const [additionalInput, setAdditionalInput] = useState(false);

    const showWhenWhere = (e) => {
        setSelectedOption(e.target.value);

        selectOption === "0"? setAdditionalInput(true) : setAdditionalInput(false);
    }

    return(
        <div>
            <h1>BOOK A SESSION</h1>
            <p>Fill in the Form below to book a virtual session with your doctor</p>
            <h5>Basic Info</h5>
            <form>
                First Name - 
                <input type="text"></input> <br/>
                Last Name - 
                <input type="text"></input> <br/>
                Email - 
                <input type="email"></input>    
            </form>
            <h5>Doctor</h5>
            <select onChange={showWhenWhere}>
                <option selected value="0">Select your Doctor</option>
                <option value="1">Dr. X</option>
                <option value="2">Dr. Y</option>
                <option value="3"> Dr. Z</option>
            </select> <br/>

            {additionalInput && (
                <div>
                    <h5>Where ?</h5>

                    <input type="radio" name="appointmentType" value="Online" /> Online
                    <input type="radio" name="appointmentType" value="In-Person" /> In-Person

                    <h5>When ?</h5>
                    <input type="datetime-local" />

                </div>
            )}
            <br />
            <button type="submit">Confirm Booking</button>
        </div>
    )
}

export default Appointment;