import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c]  rounded p-5 mt-7 '>
         <div className=' bg-red-400 mb-2 flex justify-between rounded py-2 px-4'>
            <h2 className=' text-lg font-medium w-1/5 '> Employee Name </h2>
                <h3 className='text-xl font-medium w-1/5 '> New Task </h3>
                <h3 className='text-xl font-medium w-1/5 '>ActiveTask </h3>
                <h5 className='text-xl font-medium w-1/5 '>Completed</h5>
                <h5 className='text-xl font-medium w-1/5 '>Failed</h5>
            </div>
        <div className=''>
        {authData.employees.map(function(elem,idx){

return    <div key ={idx} className=' border-2 border-emerald-500 mb-2 flex justify-between rounded py-2 px-4'>
<h2 className=' text-xl font-medium w-1/5 '> {elem.firstname}</h2>
    <h5 className='text-xlfont-medium w-1/5 text-blue-600'> {elem.taskNumbers.newTask}</h5>
    <h5 className='text-xl font-medium w-1/5 text-yellow-400'> {elem.taskNumbers.active}</h5>
    <h5 className='text-xl font-medium w-1/5 text-white'>{elem.taskNumbers.completed}</h5>
    <h3 className='text-xl font-medium w-1/5 text-red-600'> {elem.taskNumbers.failed}</h3>
</div>
})}
        </div>
           
       
      
      
    </div>
  )
}

export default AllTask
