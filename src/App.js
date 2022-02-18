
import './App.css';
import {useEffect, useState} from 'react'
import Header from './Components/Header/Header'
import Table from './Components/Table/Table'
import Modal from './Components/Modal/Modal'

import Login from './Components/Login/Login';

import {useSelector} from "react-redux"
const App = () => {

  const [modalOpen, setModalOpen] = useState(false)
  const [login,setLogin] = useState(true)
  const loginData = useSelector(state=> state.login)

 useEffect(()=>{
    setLogin(loginData)
 },[loginData])
  return <div className ="app-container">
          
          
      
          
          {login ? 
          
          
          <>
          <Header openModal = {setModalOpen}/>
          <Table/>
          {modalOpen && <Modal closeModal = {setModalOpen}/>}
          </>
          
         
          
          :
          
          <Login/>}
          
          
         
        </div>
  
}

export default App;
