const initialMemoryUsage = process.memoryUsage()['heapUsed']
const yourName = process.argv
const environment = process.env.NODE_ENV

for (let i = 0; i <= 10000; i++) {

}

const currentMemmoryusage = process.memoryUsage()['heapUsed']

console.log(`Hai, ${yourName[2]}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemmoryusage}`);


