import React, { createContext, useEffect, useState } from 'react';
import { getLocalStroage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Initialize local storage only if it's empty
        if (!getLocalStroage()) {
            setLocalStorage();
        }

        // Load data from local storage
        const { employees, admin } = getLocalStroage();
        setUserData({ employees, admin });
    }, []);

    useEffect(() => {
        // Listen for storage changes to update context data
        const handleStorageChange = () => {
            const { employees, admin } = getLocalStroage();
            setUserData({ employees, admin });
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    // Add a function to update employees
    const updateEmployees = (updatedEmployees) => {
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        setUserData((prevData) => ({ ...prevData, employees: updatedEmployees }));
    };

    return (
        <AuthContext.Provider value={{ userData, updateEmployees }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
