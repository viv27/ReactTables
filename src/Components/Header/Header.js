import React from 'react';
import './header.css'
import {useSelector, useDispatch} from "react-redux"
import {login} from "../../Redux"
function Header({openModal}){ 
    const dispatch = useDispatch()
    const name = useSelector(state=> state.name)
    function handleChange(){
        dispatch(login())
    }
    return (
    <div className="headerContainer">
    <div className="header">
        <div className="header_left">
    <h2 className="header_title">Team Members</h2>
    <button onClick ={()=>openModal(true)} className="header_button">Add Members +</button>
        </div>
        <div className="header_right">
    <div className="header_name">{name}</div>
    
        <button onClick={()=> handleChange()}>Logout</button>
        </div>
    </div>
    <hr/>
    </div>

    
    )
}

export default Header;