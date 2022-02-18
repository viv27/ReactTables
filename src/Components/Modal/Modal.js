import React,{useState} from 'react';
import { useDispatch} from "react-redux"
import {newUser} from "../../Redux"
import "./modal.css"
import { AiFillCloseCircle } from "react-icons/ai";
function Modal({closeModal}){
    const [name,setName] = useState("")
    const [company,setCompany] = useState("")
    const [status,setStatus] = useState("")
    const [notes,setNotes] = useState("")
    
    
    console.log(name,company,status,notes)
    const dispatch = useDispatch()

    // get current date
    function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
    }

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

    // send user detail to redux
    function handleChange(){
        const neww = {
            name:name,
            company:company,
            status:status,
            notes:notes,
            last_updated:formatDate(new Date()),
            id: new Date()
        }
        if(neww.name !== ""){
        dispatch(newUser(neww))
        }
       closeModal(false) 
    }
    return (
        <div className="modalBackground">
        <div className="modalContainer">
        <div className="modal_close">
            <button onClick={()=>closeModal(false)}><AiFillCloseCircle/></button>
        </div>
        <div className="modal_body">
        <label for ="name"> First Name </label>
        <input value ={name} onChange={e => setName(e.target.value)} id="name"></input>
        <label for ="company"> Team </label>
        <input value ={company} onChange={e => setCompany(e.target.value)} id="company"></input>
        <label for ="status"> Status </label>
        <input value ={status} onChange={e => setStatus(e.target.value)} id ="status"></input>
        <label for ="notes"> Notes </label>
        <input value ={notes} onChange={e => setNotes(e.target.value)} id ="notes"></input>
        
        </div>
        <div className="modal_footer">
            <button className="modal_footer_closeBtn" onClick={()=>closeModal(false)}>Cancel</button>
            <button onClick={()=>handleChange()} className="modal_footer_saveBtn">Save</button>
        </div>
        </div>
        </div>
        
    )
    
}

export default Modal;