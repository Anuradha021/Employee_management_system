import { useContext } from 'react';
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../other/TaskList';
import { AuthContext } from '../../context/AuthProvider';


const EmployeeDashboard = (props) => {
  const { userData } = useContext(AuthContext);
  const employees = userData?.employees || [];

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} /> 
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} employees={employees} />
    </div>
  );
};

export default EmployeeDashboard;
