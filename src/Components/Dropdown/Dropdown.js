import React,{useState} from 'react'

function Dropdown({handleData,options}) {
    const [menu,setMenu] = useState(false)

  return (
      <div >
  <select  name ={menu} onChange={(e)=>handleData(e.target.value)}>
 
  {options.map(option=>{
    return(
      
      <option value={option}>{option}</option>
      
    )
  })}
 </select>
    
    </div>
  )
}

export default Dropdown