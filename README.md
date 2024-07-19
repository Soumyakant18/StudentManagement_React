# Student Management System

This project implements a basic student management system using a modern web development stack:

- **Frontend:** React.js for a dynamic and user-friendly interface.
- **Backend:** Spring Boot for robust API development and database interaction.
- **Database:** MySQL for efficient student data storage and retrieval.

**Features:**

- **Student Management:**
    - Create new student profiles.
    - View and edit existing student information.
    - Delete student records.



**Prerequisites:**

- Node.js and npm (or yarn) installed (https://nodejs.org/en/download/package-manager)
- Java Development Kit (JDK) (https://www.oracle.com/java/technologies/downloads/)
- MySQL server (https://dev.mysql.com/doc/refman/8.4/en/installing.html)

## Setup:

1. **Clone the Repository:**

   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/student-management-system.git

2. **Backend (Spring Boot):**

- Navigate to the backend directory (e.g., backend or student-management-backend).

- Configure database connection details in application.properties (hostname, port, username, password, database name).
- Install dependencies:

  ```bash
  mvn clean install

- Run the backend server:

  ```bash
  mvn spring-boot:run

- Access the backend API (default port: 8080) in your browser, e.g., http://localhost:8080/students (adjust the URL based on your configuration).


3. **Frontend (React):**
   
 -  Navigate to the frontend directory (e.g., frontend or student-management-frontend).

 - Install dependencies:

   ```bash
   npm install  # or yarn install

 - Start the development server:

   ```bash
   npm start  # or yarn start

 - Access the frontend application in your browser (default port: 3000), e.g., http://localhost:3000.


## Important Note:

  This student management system is currently designed for demonstration purposes only. Since it lacks authentication, the data is accessible to anyone who can access the application. In a production environment, implementing user authentication and access control is crucial to protect student data.


## Contributing
We welcome contributions to this project! Please create a pull request to share your improvements, especially if you'd like to add features like user authentication or additional functionalities.

## Contact
If you have any questions or feedback, feel free to contact us:

- Email: soumykantarout@gmail.com




