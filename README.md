Project Demo Link - https://www.youtube.com/watch?v=SBOp9Uc7oCc


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

* **Backend**: Node.js, Express.js, WebSockets
* **Frontend**: React, Monaco Editor, React Query (Queries & Mutations)
* **Database**: MongoDB
* **Containerization**: Docker
* **CLI Tools**: Exterm for terminal emulation

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v14+
* [Docker](https://www.docker.com/) v20+
* [MongoDB](https://www.mongodb.com/) (local or Atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/30Abhi/CodeSandbox.git
   cd CodeSandbox
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory and set the following:

   ```env
   MONGODB_URI=<your-mongo-connection-string>
   PORT=4000
   ```

4. **Start MongoDB**

   ```bash
   # If running locally
   mongod --dbpath /path/to/your/db
   ```

5. **Start Docker daemon**
   Ensure Docker is running before launching the app.

### Running the App

* **Development mode**

  ```bash
  npm run dev
  ```

  Runs both backend and frontend with hot-reloading.

* **Production mode**

  ```bash
  npm start
  ```

The backend will be available at `http://localhost:4000` and the frontend at `http://localhost:3000` by default.

---

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

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please check [issues](https://github.com/30Abhi/CodeSandbox/issues) and follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

[MIT](https://opensource.org/licenses/MIT)

---

## 🔗 Links

* **GitHub Repo**: [30Abhi/CodeSandbox](https://github.com/30Abhi/CodeSandbox)
