import React,{useState} from 'react'
import { useDispatch} from "react-redux"
import {getName,login} from "../../Redux"
import './login.css'

function Login() {
    const dispatch = useDispatch()
    function handleChange(e){
        
        e.preventDefault()
        if(name !== ""){
        setAlert(false)
        dispatch(getName(name))
        dispatch(login())}
        else{
            setAlert(true)
        }
        
    }
    const [name,setName] = useState("")
    const [alert,setAlert] = useState(false)
  return (
    <div className="login-page">
  <div className="form">
    <form className="register-form">
      <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button onClick={(e)=>handleChange(e)}>Login</button>
      <p>{alert ?"Enter a name!!!":""}</p>
      
    </form>
    
  </div>
</div>
  )
}

export default Login