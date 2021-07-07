import React,{useState,useEffect} from 'react'
import axios from '../Axios'
import {API_KEY} from '../Constants/Constants'
import './Registrations.css'
import {Link , useHistory} from 'react-router-dom'

function Registrations() {

const [register,setRegister] = useState([])
const [student, setStudent] = useState([])
const [subject, setSubject] = useState([])
const[change,setChange] = useState([])
const [changes,setChanges] = useState([])
const[active,setActive]= useState(false)
const[active2,setActive2]= useState(false)






function refreshPage(){
window.location.reload(false)

}
useEffect(() => {
    axios.get(`registration/?api_key=${API_KEY}`).then((response) => {
        console.log(response.data)
        setRegister(response.data.registrations)
    })
}, [])
useEffect(() => {
    axios.get(`students/?api_key=${API_KEY}`).then((response) => {
        
        setStudent(response.data.students)
    })
}, [])
useEffect(() => {
    axios.get(`subjects/?api_key=${API_KEY}`).then((response) => {
        console.log(response.data)
        setSubject(response.data.subjects)
    })
}, [])



function postRegister(){
     axios.post(`registration/?api_key=${API_KEY}`,`student=${change}&subject=${changes}`).then((res)=>
     console.log(res.data)
    
     ).catch((err)=> console.log(err.res.data));
}




    return (
        <div>
            <div className="nav1">

                <Link to='/'>
            <i class="fas fa-home fa-2x"></i></Link>
          
            </div>
            
<div className='new-head1'>
    <h3>Registrations</h3>
</div>

           <div className="reg-stud">
                <h3 className='tit-head'>Register  student and subject</h3>
                <div className="studen">
                <div className='dropdown'>
            <div className="dropbtn" onClick={()=>setActive(!active)}>
                Student
                <i class="fas fa-caret-down"></i>
                 </div>
                 {active && (
                <div className="dropdown-content">
                    {student.map((obj)=>
                    <p onClick={()=>{setChange(obj.id) ;setActive(!active)}} className="dropdown-items">{obj.name}</p>)}
                   
                </div>)}
           
        </div>



      
       
        <div className='dropdown2'>
            <div className="dropbtn2" onClick={()=>setActive2(!active2)}>
                Subject
                <i class="fas fa-caret-down"></i>
                 </div>
                 {active2 && (
                <div className="dropdown-content">
                    {subject.map((obj2)=>
                    <p onClick={()=>{setChanges(obj2.id); setActive2(!active2)}} className="dropdown-items">{obj2.name}</p>)}
                    
                </div>)}

                <div className='register-btn'>
                    <button className='cls-btn4' onClick={()=>{postRegister(); refreshPage() }}>Register</button>
                </div>
           
        </div>

            </div>



            <div className="register">

                
                  {register.map((obj)=>
                  <div className='det-reg'>
                  <p>Reg Id : {obj.id}</p>
                  <p>Student id : {obj.student}</p>
                  <p>Subject id : {obj.subject}</p>
                  <button onClick={()=>{
                   axios.delete(`registration/${obj.id}?api_key=${API_KEY}`).then((res)=>
                   console.log(res.data)
               ).then(alert('Registration deleted')).then(refreshPage)
                  
                }} className="dlt1-btn">Delete</button>
                  </div>)}

            </div>
           

           

        </div></div>
    )
}

export default Registrations
