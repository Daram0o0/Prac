const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(BigInt)
console.log((a / b).toString())
console.log((a % b).toString())
