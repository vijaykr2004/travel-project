# 🌍 Travel Explorer - MERN Travel Booking Website

A full-stack Travel Booking and Tour Management platform built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

Users can browse tour packages, view package details, register/login, send inquiries, and manage their travel plans. Admins can manage packages, inquiries, users, and bookings through an admin dashboard.

---

## 🚀 Live Demo

### Frontend (Netlify)

[**travellexplore.netlify.app**](https://travellexplore.netlify.app/)

### Backend (Render)

https://travel-backend-4hix.onrender.com

---

## 📌 Features

### User Features

* User Registration & Login
* JWT Authentication
* Browse Tour Packages
* Search Packages by Destination
* View Package Details
* Send Travel Inquiries
* User Dashboard
* Responsive Design
* WhatsApp Contact Button

### Admin Features

* Admin Login
* Manage Tour Packages
* View All Inquiries
* Update Inquiry Status
* Delete Inquiries
* View Users
* Dashboard Statistics

---

## 🛠 Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

### Deployment

* Netlify (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

## 📂 Project Structure

```bash
travel-project/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/vijaykr2004/travel-project.git

cd travel-project
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=2020

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start Backend

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:2020/api
```

Start Frontend

```bash
npm run dev
```

---

## API Endpoints

### Authentication

```http
POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile
```

### Packages

```http
GET /api/packages

GET /api/packages/:id
```

### Inquiries

```http
POST /api/inquiries

GET /api/inquiries/my
```

### Admin

```http
GET /api/admin

GET /api/admin/stats
```

---

## MongoDB Collections

```text
users

tourpackages

inquiries

payments
```

---

## Environment Variables

### Backend

```env
PORT=2020

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### Frontend

```env
VITE_API_URL=https://travel-backend-4hix.onrender.com/api
```

---

## Deployment

### Frontend (Netlify)

Build Settings

```text
Base Directory: frontend

Build Command: npm run build

Publish Directory: dist
```

---

### Backend (Render)

```text
Root Directory: backend

Build Command:
npm install

Start Command:
npm start
```

---

## Future Improvements

* Online Payment Gateway Integration
* Booking Management
* Hotel Booking System
* Travel Blog
* Email Notifications
* Review & Rating System
* Admin Analytics Dashboard

---

## Author

### Vijay Kumar Gupta

GitHub:
https://github.com/vijaykr2004

---

## License

This project is licensed under the MIT License.

```
```
