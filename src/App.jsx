import React, { useContext, useEffect, useState } from "react";
import Login from "./componments/Auth/Login";
import EmployeeDashboard from "./componments/Dashboard/EmployeeDashboard";
import AdminDashboard from "./componments/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
   const [user, setUser] = useState(null); 
   const authData = useContext(AuthContext);
   const [loggedInUserData, setLoggedInUserData] = useState(null);

   useEffect(() => {
       const loggedInUser = localStorage.getItem("loggedInUser");
       if (loggedInUser) {
           const userData = JSON.parse(loggedInUser);
           setUser(userData.role);
           setLoggedInUserData(userData.data || null); // Ensure data is set if available
           console.log("User role set from localStorage:", userData.role);
       }
   }, []);

   const handleLogin = (email, password) => {
       console.log("Login attempt with email:", email, "password:", password);
       if (email === 'admin@me.com' && password === '123') {
           setUser('admin');
           localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
           console.log("Logged in as admin, stored in localStorage");
       } else if (authData) {
           const employee = authData.employees.find((e) => email === e.email && e.password === password);
           if (employee) {
               setUser('employee');
               setLoggedInUserData(employee);
               localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
               console.log("Logged in as employee, stored in localStorage");
           } else {
               alert("Invalid Credentials");
           }
       }
   };

   return (
       <>
           {!user && <Login handleLogin={handleLogin} />}
           {user === 'admin' && <AdminDashboard  changeUser ={setUser}/>}
           {user === 'employee' && <EmployeeDashboard changeUser ={setUser}  data={loggedInUserData} />}
       </>
   );
};

export default App;
