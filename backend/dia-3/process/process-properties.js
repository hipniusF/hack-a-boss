console.log(new Date());
console.log(__filename);

// Process built-in
console.log(process);

// pid
console.log(process.pid);

const pidInterval = setInterval(() => {
	console.log(process.pid);
}, 500);

setTimeout(() => {
	clearInterval(pidInterval);
}, 10000);

// Version
console.log(process.version);

// Platform
console.log(process.platform);

// Custom process COMMAND name
process.title = "Mi web app :D";
