# 🏆 Sports Statistics Platform

A RESTful backend application developed using Node.js, Express.js, MongoDB, and JWT Authentication for managing Players, Teams, and Matches in a sports environment.

## 👥 Team Members

* Rajshree Dangat
* Sanika Baikar

---

## 📌 Project Overview

The Sports Statistics Platform provides APIs to manage sports-related data including players, teams, matches, and user authentication. The system follows a modular architecture with secure authentication and CRUD operations.

This project was developed collaboratively with clear separation of backend architecture and API layer implementation to simulate a real-world software development workflow.

---

## ✨ Features

* User Registration & Login
* JWT Authentication
* Protected Routes
* Player Management
* Team Management
* Match Management
* MongoDB Database Integration
* RESTful API Design
* Postman API Testing
* Error Handling

---

## 🛠 Technology Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Tools

* Postman
* Git & GitHub
* VS Code

---

## 📂 Project Structure

```text
sports-statistics-platform
│
├── config
│   └── db.js
│
├── controllers
│   ├── authController.js
│   ├── playerController.js
│   ├── teamController.js
│   └── matchController.js
│
├── middleware
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── models
│   ├── userModel.js
│   ├── playerModel.js
│   ├── teamModel.js
│   └── matchModel.js
│
├── routes
│   ├── authRoutes.js
│   ├── playerRoutes.js
│   ├── teamRoutes.js
│   └── matchRoutes.js
│
├── node_modules
│
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
├── README.md
└── documentation.md
```

---

## 🚀 API Modules

### Authentication

* Register User
* Login User

### Players

* Create Player
* Get All Players
* Get Player By ID
* Update Player
* Delete Player

### Teams

* Create Team
* Get All Teams
* Get Team By ID
* Update Team
* Delete Team

### Matches

* Create Match
* Get All Matches
* Get Match By ID
* Update Match
* Delete Match

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Run Application

```bash
node app.js
```

---

## 🧪 API Testing

All APIs were tested using Postman.

Testing includes:

* User Authentication
* JWT Token Verification
* CRUD Operations
* Route Protection
* Error Handling

---

## 🤝 Team Contributions

### Sanika Baikar

Responsible for Backend Core Development:

* Project Setup
* MongoDB Configuration
* Database Connection
* Database Models
* Authentication Logic
* JWT Implementation
* Security Middleware

### Rajshree Dangat

Responsible for API Development & Documentation:

* API Routes Development
* CRUD Controllers
* Route Integration
* Postman Testing
* API Documentation
* GitHub Repository Management
* Project Documentation

---

## 📚 Learning Outcomes

This project helped in understanding:

* Backend Development using Node.js
* REST API Design
* MongoDB Database Operations
* JWT Authentication
* API Testing using Postman
* Team Collaboration using GitHub

---

## 📄 License

This project is licensed under the ISC License.
