import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


function Home() {
  
    

    return (
        <div>
          <div className="header">

          </div>  
          <div className='stud'>
              <Link to='/students'>
          <i class="fas fa-user-graduate fa-7x"></i></Link>
         
          
          </div>
          <div className='sub'>
              <Link to='/subjects'>
          <i class="fas fa-book-reader fa-7x"></i></Link>
          
          </div>
            <div className='class'>
                <Link to='/classroom'>
            <i class="fas fa-chalkboard-teacher fa-7x"></i></Link>
            
            </div>
            <div className='registrar'>
              <Link to='/registrations'>
            <i class="fas fa-book fa-7x"></i></Link>
            </div>
           
            <h3 className="stud-h">
                Student Details
            </h3>
            <h3 className="sub-h">
                Subject Details
            </h3>
            <h3 className="class-h">
                Classroom Details
            </h3>
            <h3 className='registrar-h'>
               Registrations
            </h3>
            
           </div>
           
    )
}

export default Home
