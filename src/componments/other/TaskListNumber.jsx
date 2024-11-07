import React from 'react'

const TaskListNumber = ({ data = { taskNumbers: { newTask: 0, completed: 0, active: 0, failed: 0 } } }) => {

    console.log("TaskListNumber data:", data); // Debugging line
    const taskNumbers = data.taskNumbers || { newTask: 0, completed: 0, active: 0, failed: 0 };
  
  return (
    <div className=' mt-10  flex  justify-between gap-5 screen '>
        <div className=' rounded-xl w-[45%] py-6 px-9  bg-red-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className=' rounded-xl w-[45%] py-6 px-9  bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className=' rounded-xl w-[45%] py-6 px-9  bg-green-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Accepted  Task</h3>
        </div>
        <div className=' rounded-xl w-[45%] py-6 px-9  bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
