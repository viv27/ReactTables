import React,{useState,useEffect} from 'react'
import data from '../../data'
import TableContent from './TableContent'
import './table.css'
import Dropdown from '../Dropdown/Dropdown'
import {useSelector, useDispatch} from "react-redux"
import {filterData} from "../../Redux"
function Table(){
    const userData = useSelector(state=> state.userData)
    const filteredData = useSelector(state=> state.filterData)
    const [dataz,setDataz] = useState(userData)
    const [filterDataz,setFilterDataz] = useState(dataz)
    const [query,setQuery] = useState('all')
    const dispatch = useDispatch()
    
    function handleData (query){
        setQuery(query)
    }
    const unique = (value, index, self) => {
  return self.indexOf(value) === index
}   

        let companies = userData.map(t => t.company)
        let uniqueCompanies = companies.filter(unique)
        uniqueCompanies.unshift('all')
        



    useEffect(()=>{
        
         dispatch(filterData(query))
        
    },[query,userData])

    
    
    return (
        
        <div className="table">
        <div className="table_filter">
            
            <Dropdown options ={uniqueCompanies}  handleData={handleData}/>
            <Dropdown options ={['all','active','closed']}handleData={handleData}/>

        </div>
        
        <div className="table_content">
            <thead>
                <tr>
                    <th>Name</th>
                    <th >Company</th>
                    <th >Status</th>
                    <th>Last Updated</th>
                    <th>Notes</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <TableContent data ={filteredData} setDataz={setDataz}/>
            </tbody>
            
        </div>
        
        {console.log("USER DATA",userData)}
        {console.log("F",filteredData)}
        
     
        </div>
        
    )
}

export default Table