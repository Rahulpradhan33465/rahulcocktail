import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
     <section className='error'>
         <div className='error-container'>
             <h1>OOPS !.. Its a dead end </h1>
             <Link to='/'>
                 <button className='btn'>Back home</button>
             </Link>
         </div>
     </section>
    )
}

export default Error
