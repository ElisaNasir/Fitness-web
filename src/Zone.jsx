import React from 'react'
function Zone(){
    return(
        <div className='zone-container'>
         <select className='zone-dropdown'>
        <option value="All zones">All zones</option>
        <option value="cardio">Cardio Zone</option>
        <option value="yoga">Yoga Zone</option>
        </select>   
        </div>
    )
}
export default Zone