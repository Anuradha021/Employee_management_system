const employees = [
  {
      "id": 1,
      "email": "e@e.com",
      "password": "123",
      "firstname": "Amit",
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Update Client Database",
              "description": "Update the database with recent client information.",
              "date": "2024-10-25",
              "category": "Database"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Prepare Sales Report",
              "description": "Prepare and submit the monthly sales report.",
              "date": "2024-10-15",
              "category": "Reporting"
          }
      ]
  },
  {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstname": "Priya",
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Organize Inventory",
              "description": "Organize and audit warehouse inventory.",
              "date": "2024-10-26",
              "category": "Inventory"
          }
      ]
  },
  {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstname": "Rahul",
      "taskNumbers": {
          "active": 3,
          "newTask": 1,
          "completed": 1,
          "failed": 1
      },
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": true,
              "title": "Client Outreach",
              "description": "Reach out to clients to discuss service renewals.",
              "date": "2024-10-20",
              "category": "Client Relations"
          }
      ]
  },
  {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstname": "Sneha",
      "taskNumbers": {
          "active": 0,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      },
      "tasks": [
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "title": "Team Meeting",
              "description": "Organize and lead the monthly team meeting.",
              "date": "2024-10-18",
              "category": "Meetings"
          }
      ]
  },
  {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstname": "Rohit",
      "taskNumbers": {
          "active": 1,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      },
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "title": "Social Media Campaign",
              "description": "Design and launch a social media campaign for the new product.",
              "date": "2024-10-27",
              "category": "Marketing"
          }
      ]
  }
];

  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ]
  export  const setLocalStorage =() =>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStroage = ()=>{
 const data = localStorage.getItem('employees' )
 //console.log(JSON.parse(data))
 return {employees,admin}
  }