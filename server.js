const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const db = require('./firebase');
const { collection, onSnapshot } = require('firebase/firestore');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  const unsub = onSnapshot(collection(db, 'complaints'), (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    socket.emit('complaintsUpdate', data);
  });

  socket.on('disconnect', () => {
    unsub();
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
