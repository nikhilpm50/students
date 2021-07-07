import React, { useContext, useEffect, useState } from 'react'
import axios from '../Axios'
import { Link } from 'react-router-dom'
import { API_KEY } from '../Constants/Constants'

import './Classrooms.css'




function Classrooms() {
    const[subject,setSubject] = useState([])
    const[change,setChange] = useState([])
    const[changes,setChanges] = useState([])
    const [classroom, setClassroom] = useState([])
    const [cls,setCls] = useState('')
    const [cls1,setCls1] = useState('')
    const [cls2,setCls2] = useState('')
    const [cls3,setCls3] = useState('')
    const [modal,setModal] = useState(false)
    const[active,setActive]= useState(false)
    const[active2,setActive2]= useState(false)
    
    const toggleModal=()=>{
        setModal(!modal)
    }
   
    useEffect(() => {
        axios.get(`subjects/?api_key=${API_KEY}`).then((response) => {
            console.log(response.data)
            setSubject(response.data.subjects)
        })
    }, [])

    useEffect(() => {
        axios.get(`classrooms/?api_key=${API_KEY}`).then((response) => {
            console.log(response.data)
            setClassroom(response.data.classrooms)
        })
    }, [])

    const userId = (id)=>{
        axios.get(`classrooms/${id}?api_key=${API_KEY}`).then((response)=>{
            console.log(response.data)
            
            setCls(response.data.layout )
            
            setCls1(response.data.name )
            setCls2(response.data.size )
            setCls3(response.data.subject)
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
            <h2 className="students1">List of Classroom</h2>

            {classroom.map((obj) =>
                  <div className="deta">
                <p className='detailss' > {obj.name}
                    
                        <p className='details1' onClick={()=>{
                                    userId(obj.id)
                                    toggleModal()
                                    
                        }
                          
                        } > Details</p>

                </p>
                       
                
                </div>

                
            )
            }


{modal && (

  
<div className="modal">
    <div className="overlay" >
       
        <div className="modal-content">
           
           <h2 className="deti">Subject info</h2>
           <div className='cred'>
            <h3 className='cred1'>Layout :  </h3>
         
          
             </div>  
              <div className="nsub">
            <h3 className='namesub'>Name : </h3>  
            </div> 
            <div className="teach">
            <h3 className='teache'>Size : </h3> 
            </div>  
            <div className='size'>
                <h3 className='sub-cls'>Subject :</h3>
                </div>
                
          <button onClick={toggleModal} className="cls-btn1">close</button>
             <div className='dynm'>
         <p className='s1'>{cls}</p>
         <p className='s2'>{cls1}</p>
         <p className='s3'>{cls2}</p></div>
         <p className='s4'>{cls3}</p>
         </div>
         
        
         
    </div>
    </div>
)}
    
    
    
    
       <div className='drop-compo'> 
                         <h3 className='name1'>Assign a subject to a classroom</h3>
                         


                   </div>
         <div className='dropdown-cls'>
                             <div className='dropbtn1'>
                         <div className="dropbtn-cls" onClick={()=>setActive(!active)}>
                                    Subject
                             <i class="fas fa-caret-down"></i>
                                     </div></div>
                             {active && (
                                  <div className="dropdown-content-cls">
                                     {subject.map((obj2)=>
                                 <p onClick={()=>{setChange(obj2.id); setActive(!active)}} className="dropdown-items">{obj2.name}</p>)}
                   
                                </div>)}
               
                                <div className='dropdown3'>
            <div className="dropbtn3" onClick={()=>setActive2(!active2)}>
                Classroom
                <i class="fas fa-caret-down"></i>
                 </div>
                 {active2 && (
                <div className="dropdown-content">
                    {classroom.map((obj)=>
                    <p onClick={()=>{setChanges(obj.id);setActive2(!active2)}} className="dropdown-items">{obj.name}</p>)}
                    
                </div>)}
         
        </div> 
                               
                           <button className='cls-sub-ass' onClick={()=>{

                           axios.patch(`classrooms/${changes}?api_key=${API_KEY}`,`subject=${change}`).then((res)=>
                           console.log(res.data)
               
                            ).catch((err)=> console.log(err));
                           }} >Submit</button>
                        </div> 
       


        </div >
        
    )
    
}







export default Classrooms