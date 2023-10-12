import React, { useState } from "react";

function DatePicker(){

   const[date,setDate]=useState();


   console.log("date", date);
    return(
        <div>
        <h1>Selected Date</h1>
        <input type="date" onChange={e=>setDate(e.target.value)} />
        
        </div>

    );



}


export default DatePicker;

