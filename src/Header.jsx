import React from 'react'
import icon from './assets/waveicon.png';
import Zone from './Zone'

function Header(){
    return(
       <header className='header'>
      <div className='welcome'>
        <h1>
         <img src={icon} alt='wave' className='wave-icon'/>
         Welcome&nbsp;<span className='highlight'>Paula,</span> </h1>
         <Zone />
      </div>
      <p>Welcome back. Manage all zones of your fitness business here.</p>
     </header>
    )
}
export default Header