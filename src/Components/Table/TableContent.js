import React from 'react';
import './tableContent.css'
import { MdDelete} from "react-icons/md";
import {deleteData} from "../../Redux"
import { useDispatch} from "react-redux"

function TableContent({data,setDataz}){
   const dispatch = useDispatch()
   function handleChange(id){
      
        dispatch(deleteData(id))
   }
    return (
        
        data.map(item=>{
            return(
                <tr>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.status}</td>
                    <td>{item.last_updated}</td>
                    <td>{item.notes}</td>
                    <button onClick={()=>handleChange(item.id)} className="item_button" ><MdDelete/></button>
                </tr>
            )
        }) 
      
    )
   
}

export default TableContent;