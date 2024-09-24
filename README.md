# Nexus: A Powerful Project Management Platform

Nexus is designed to simplify project management and team collaboration. This platform provides robust features for task tracking, user management, project progress, and secure payments, offering a comprehensive solution for both small teams and large enterprises.

## Key Features

- **Project and Task Management**: Easily create, track, and manage projects and tasks.
- **User Profiles and Team Collaboration**: Enable seamless team collaboration with user profiles and role-based access.
- **Secure Payment Integration**: Integration with Razorpay (or other payment gateways) for secure payments.
- **Responsive UI**: Powered by Shadcn UI and Tailwind CSS for a dynamic and responsive interface.
- **Secure User Authentication**: Utilizes JWT for secure authentication and authorization.

## Technologies Used

### Front-end

- **React**: A JavaScript library for building dynamic user interfaces.
- **Shadcn UI**: A component library providing pre-built UI elements for faster development.
- **Tailwind CSS**: A utility-first CSS framework for responsive and rapid UI styling.
- **Redux**: State management solution ensuring consistent data flow across the app.

### Back-end

- **Spring Boot**: A Java framework for creating RESTful APIs and microservices.
- **JWT (JSON Web Token)**: Used for secure authentication and authorization.
- **Spring Data JPA**: For seamless interaction with the MySQL database.

### Database

- **PostgreSQL**: A relational database management system for storing data related to projects, tasks, users, and payments.

### Payment Gateway

- **Razorpay**: For handling secure online payments within the project management system.

## Installation

### Prerequisites

- Node.js and npm installed for front-end.
- Java (JDK 11+) installed for Spring Boot back-end.
- PostreSQL installed and running.

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nexus.git
   cd nexus/frontend

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the front-end server
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the back-end directory

   ```bash
   cd Nexus-backend

   ```

2. Configure the PostgreSQL database connection in `application.properties`
   ```bash
   spring.datasource.url=jdbc:postgresql://localhost:5432/nexus
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
   ```
3. Install dependencies:
   ```bash
   mvm install 


