

# CodeSandbox

A real‑time collaborative coding environment inspired by Project Idx, enabling multiple users to edit and execute code together seamlessly.

---

## 🧩 Features

* **Real‑Time Collaboration**: Join or create rooms for live coding sessions with multiple users.
* **Integrated File System**: Manage project files and directories within a tree structure.
* **WebSocket‑Powered Rooms**: Low-latency updates and synchronization across participants.
* **Containerized Code Execution**: Isolated, secure execution of user code using Docker containers.

---

## 📦 Tech Stack

* **Backend**: Node.js, Express.js, WebSockets,socket.io
* **Frontend**: React, Monaco Editor, React Query (Queries & Mutations)
* **Database**: MongoDB
* **Containerization**: Docker
* **CLI Tools**: Xterm for terminal emulation

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v14+
* [Docker](https://www.docker.com/) v20+
* [MongoDB](https://www.mongodb.com/) (local or Atlas)




## 📂 Project Structure

```
├── client/           # React frontend
│   ├── src/
│   └── public/
├── server/           # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── docker/           # Docker configuration and scripts
├── .env.example
└── README.md
```

---


---

