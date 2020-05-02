const os = require("os");

const freemen = os.freemem() / Math.pow(10, 9);
console.log(`Tienes ${freemen}GB libres`);
