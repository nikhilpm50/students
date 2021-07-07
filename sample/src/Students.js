import React, {  useEffect, useState } from 'react'
import axios from './Axios'
import { Link } from 'react-router-dom'
import { API_KEY } from './Constants/Constants'

import './Students.css'




function Students() {
    const [student, setStudent] = useState([])
    const [stud,setStud] = useState('')
    const [stud1,setStud1] = useState('')
    const [stud2,setStud2] = useState('')
    const [modal,setModal] = useState(false)
    
    const toggleModal=()=>{
        setModal(!modal)
    }
    

    useEffect(() => {
        axios.get(`students/?api_key=${API_KEY}`).then((response) => {
            
            setStudent(response.data.students)
        })
    }, [])

    const userId = (id)=>{
        axios.get(`students/${id}?api_key=${API_KEY}`).then((response)=>{
            console.log(response.data)
            
            setStud(response.data.name )
            
            setStud1(response.data.age )
            setStud2(response.data.email )
          
        },[])
    }
   
    return (
        <div>
            <div className="header">

            </div>
            <div className='new_icon'>
                <Link to='/'>
            <i class="fas fa-home fa-2x"></i></Link>
            </div>
            <div>
            <h2 className="students">List of Students</h2>
                 </div>
            {student.map((obj) =>
                    <div className='det'>
                <p className='details'>{obj.name}
                               
                      
                       <button  onClick={() => {
                          userId(obj.id)
                        toggleModal()
                          
                        }  

                        }  className="details1"> Details</button>

                        
                        </p>
                       
                      
                        </div> 

                     
                       
            )
            }  
      {modal && (

     
              <div className="modal">
                  <div className="overlay" >
                      
                      <div className="modal-content">
                         
                        <h2 className="deti">Student info</h2>
                         <h3 className='name'>Name :  </h3><p className='p1'>{stud}</p>
                         <h3 className='age'>Age : </h3><p className='p2'>{stud1}</p>
                         <h3 className='email'>Email : </h3><p className='p3'>{stud2}</p>
                       <button onClick={toggleModal} className="cls-btn">close</button>
                      </div>
                  </div>
                  </div>    
     )}

        </div >
        
    )
}

export default Students
