import { io } from 'socket.io-client';
import readline from 'readline';

const socket = io("ws://localhost:3001");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

socket.on("connect", () => {
	console.log("Connect to server");
	console.log("Type your message:");
});

socket.on("chat message", (message: string) => {
	console.log(message);
});

socket.on("disconnect", () => {
	console.log("Disconnect from server");
});

rl.on("line", (input) => {
	if (input.trim()) {
		socket.emit("chat message", input);
		console.log(`You: ${input}`);
	}
});

rl.on("close", () => {
	socket.disconnect();
	process.exit(0);
});
