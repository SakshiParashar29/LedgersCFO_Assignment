# LedgersCFO - Compliance Task Manager

A simple web app to track compliance tasks for multiple clients.

---

## Live Demo

Frontend: [https://ledgers-cfo-assignment-green.vercel.app/]
Backend: [https://ledgerscfo-assignment.onrender.com/]

---

## Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)

---

## Features

- View all clients
- View tasks for a selected client
- Add new compliance tasks
- Update task status (Pending → In Progress → Completed)
- Filter tasks by status and category
- Overdue tasks highlighted in red
- Summary stats (Total / Pending / In Progress / Overdue / Completed)
- Pre-seeded client and task data

---

## Project Structure
```
LedgersCFO/
├── Backend/
│   ├── Controllers/
│   │   ├── client_controller.js
│   │   └── task_controller.js
│   ├── Routes/
│   │   ├── client_routes.js
│   │   └── task_routes.js
│   ├── Model/
│   │   ├── client_model.js
│   │   └── task_model.js
│   ├── database/
│   │   ├── db.js
│   ├── data/
│   │   └── clients.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── Frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ClientList.jsx
    │   │   ├── TaskList.jsx
    │   │   ├── TaskCard.jsx
    │   │   ├── TaskForm.jsx
    │   │   └── TaskFilters.jsx
    │   ├── services/
    │   │   └── api.js
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repository
```
git clone https://github.com/SakshiParashar29/LedgersCFO_Assignment.git
cd LedgersCFO
```

### 2. Backend Setup
```
cd Backend
npm install
```

Create a `.env` file in the Backend folder:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:
```
npm run dev
```

### 3. Seed the database (optional but recommended)
```
node database/seed.js
```

### 4. Frontend Setup
```
cd Frontend
npm install
npm run dev
```

### 5. Open the app
```
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/clients | Get all clients |
| POST | /api/clients/add | Add clients from data file |
| GET | /api/tasks/:clientId | Get tasks for a client |
| POST | /api/tasks | Create a new task |
| PATCH | /api/tasks/:id | Update task status |

---

## Tradeoffs & Assumptions

**Tradeoffs:**
- No authentication — this is an internal tool for LedgersCFO employees only, so auth was skipped to keep it simple and focus on core functionality
- Clients are pre-seeded instead of added from frontend — in a real product, there would be an admin panel to manage clients
- No pagination — kept simple since the assignment focuses on working functionality over scale

**Assumptions:**
- The app is used by LedgersCFO employees internally to manage their client's compliance tasks
- Clients are onboarded by the internal team (pre-seeded), not by the clients themselves
- Task status has three states: Pending, In Progress, Completed
- A task is considered overdue if its due date has passed and it is not completed

---

## Author
Sakshi
