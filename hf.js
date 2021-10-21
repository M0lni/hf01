/* function sum(a, b) {
    return a + b;
  }
  module.exports = sum;
 */
  // csak tesztelgetem a githubot

  
  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});