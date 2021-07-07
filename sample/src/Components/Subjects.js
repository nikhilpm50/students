import React, {  useEffect, useState } from 'react'
import axios from '../Axios'
import { Link } from 'react-router-dom'
import { API_KEY } from '../Constants/Constants'

import './Subject.css'




function Subjects() {
    const [subject, setSubject] = useState([])
   
    const [sub,setSub] = useState('')
    const [sub1,setSub1] = useState('')
    const [sub2,setSub2] = useState('')
    const [modal,setModal] = useState(false)
    
    const toggleModal=()=>{
        setModal(!modal)
    }

    useEffect(() => {
        axios.get(`subjects/?api_key=${API_KEY}`).then((response) => {
            console.log(response.data)
            setSubject(response.data.subjects)
        })
    }, [])

    const userId = (id)=>{
        axios.get(`subjects/${id}?api_key=${API_KEY}`).then((response)=>{
            console.log(response.data)
            
            setSub(response.data.credits )
            
            setSub1(response.data.name )
            setSub2(response.data.teacher )
          
        },[])
    }
    
     

    return (
        <div>
            <div className="header">

            </div>
            <div className='newicon'>
                <Link to='/'>
            <i class="fas fa-home fa-2x"></i></Link>
            </div>
            
            <h2 className="students1">List of Subjects</h2>

            {subject.map((obj) =>
                 <div className='deta'>
                < p className='detailss' > {obj.name}
                   
                        <p className='details1' onClick={() =>{
                            userId(obj.id)
                            toggleModal()
                        }
                           } 
                            > Details</p>
                </p>
                   
                    </div>
            )
            }

{modal && (

     
<div className="modal">
    <div className="overlay" onClick={toggleModal}>
        
        <div className="modal-content">
           
          <h2 className="deti">Subject info</h2>
          <div className='cred'>
           <h3 className='cred1'>Credits :  </h3>
        
         
            </div>  
             <div className="nsub">
           <h3 className='namesub'>Name : </h3>  
           </div> 
           <div className="teach">
           <h3 className='teache'>Teacher : </h3> 
           </div>  
         <button className="cls-btn1">close</button>
            <div className='dynm'>
        <p className='s1'>{sub}</p>
        <p className='s2'>{sub1}</p>
        <p className='s3'>{sub2}</p></div>
        </div>
     
    </div>
    </div>    
)}


           
        </div >
    )
}

export default Subjects