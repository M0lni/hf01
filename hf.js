/* function sum(a, b) {
    return a + b;
  }
  module.exports = sum;
 */
  // csak tesztelgetem a githubot

const { showHelpOnFail, array } = require("yargs");

  
 /*  const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
}); */

 function koszones(emberek){
    let darabolt=emberek.split(", ");
    if(emberek==""){
    return "Hello, my friend";
    }
    if(emberek==emberek.toUpperCase()){
    return "HELLO, "+emberek+"!";
    }
    if(darabolt.length>1){
        let returnstring="";
        let index;
        for ( index = 0; index < darabolt.length-1; index++) {
             returnstring+=", "+darabolt[index];
            
        }
    return "Hello"+returnstring+" and "+darabolt[index];
    }

    return "Hello, "+emberek;
    

}
module.exports = koszones;



function nevek() {
    let emberek = prompt();
    let text;
    
    text=koszones(emberek);
    document.getElementById("demo").innerHTML = text;
    
  }
 
  
 /*  if (person == null || person == "") {
    text = "Hello, my friend";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = text; */