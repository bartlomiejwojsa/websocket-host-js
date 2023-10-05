const WebSocket = require('ws');

// Create a WebSocket server that listens on port 8080
const server = new WebSocket.Server({ port: 8080 });

// Event listener for handling incoming WebSocket connections
server.on('connection', (socket) => {
    console.log('Client connected.');
    socket.send(`Sucessfully connected to server`);
    // Event listener for handling incoming WebSocket messages
    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        
        // Send a response message back to the client
        socket.send(`Server received: ${message}`);
    });

    // Event listener for handling WebSocket disconnections
    socket.on('close', () => {
        console.log('Client disconnected.');
    });
});

console.log('WebSocket server is running on port 8080.');