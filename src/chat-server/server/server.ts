import { Server } from 'socket.io';

const io = new Server(3001);

io.on('connection', (socket) => {
	console.log(`User connected: ${socket.id}`);

	socket.on("chat message", (message: string) => {
		console.log(`Message from ${socket.id}: ${message}`);
	});

	socket.on("disconnect", () => {
		console.log(`User ${socket.id} disconnected`);
	});
});

console.log("Server is running on port 3001");
