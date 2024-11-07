import { useState, useContext } from "react";
import NewTask from "../TaskList/NewTask";
import { AuthContext } from '../context/AuthProvider';

const CreateTask = () => {
  const { userData, updateEmployees } = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = { 
      taskTitle, 
      taskDescription, 
      taskDate, 
      category, 
      active: false, 
      newTask: true, 
      failed: false, 
      completed: false 
    };

    const data = [...userData.employees]; // Copy of employees from context

    // Check if the assigned employee exists and add the task
    data.forEach((employee) => {
      if (assignTo === employee.firstname) {
        employee.taskNumbers.newTask += 1;
        employee.tasks.push(newTask);
      }
    });

    // Update the employees in context and localStorage
    updateEmployees(data);

    // Clear form fields
    setAssignTo('');
    setCategory('');
    setTaskDate('');
    setTaskDescription('');
    setTaskTitle('');
  };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
        {/* Input fields for task creation */}
        {/* ... (remaining form fields here, no changes needed) */}
        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
