const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// In-memory storage
let votes = { A: 0, B: 0, C: 0 };
let votedUsers = new Set(); // to prevent duplicate votes

// API: Cast vote
app.post("/vote", (req, res) => {
  const { username, option } = req.body;

  if (votedUsers.has(username)) {
    return res.status(400).json({ message: "You already voted!" });
  }

  if (votes[option] !== undefined) {
    votes[option]++;
    votedUsers.add(username);

    // Send live update
    io.emit("voteUpdate", votes);

    return res.json({ message: "Vote counted!" });
  }

  res.status(400).json({ message: "Invalid option" });
});

// API: Get results
app.get("/results", (req, res) => {
  res.json(votes);
});

// WebSocket: send current results on new connection
io.on("connection", (socket) => {
  socket.emit("voteUpdate", votes);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
