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
    return "Hello, my friend.";
    }
    if(emberek==emberek.toUpperCase() && darabolt.length==1){
      return "HELLO, "+emberek+"!";
      }
    let feltetel=0;
    for(let k=0;k<darabolt.length;k++){
        if(darabolt[k]==darabolt[k].toUpperCase())
        feltetel++;
    }
    if(darabolt.length>1 &&  feltetel>0) {
        
        let kis=[];
        let nagy=[];
        let i=0;
        let j=0;
        let index;
        let kisreturn="";
        let nagyreturn="";
        for ( index = 0; index < darabolt.length; index++) {
            if(darabolt[index]==darabolt[index].toUpperCase()){
                nagy[i]=darabolt[index];
                i++;
            }
            else{
                kis[j]=darabolt[index];
                j++;
            }
        }
        for ( index = 0; index < kis.length-1; index++) {
            kisreturn+=", "+kis[index];
           
       }
       for ( index = 0; index < nagy.length-1; index++) {
        nagyreturn+=", "+nagy[index];
       
   }
   if(kis.length==1 && nagy.length>=2){
    return "Hello, "+kis[kis.length-1]+". AND HELLO"+nagyreturn+" AND "+nagy[nagy.length-1]+"!"
   }
   else if(kis.length==0){
    return "HELLO"+nagyreturn+" AND "+nagy[nagy.length-1]+"!"
   }
   else if(nagy.length==1 && kis.length>=2){
    return "Hello"+kisreturn+" and "+kis[kis.length-1]+". AND HELLO, "+nagy[nagy.length-1]+"!"
   }
        return "Hello"+kisreturn+" and "+kis[kis.length-1]+". AND HELLO"+nagyreturn+" AND "+nagy[nagy.length-1]+"!"
    }
    if(darabolt.length>1){
        let returnstring="";
        let index;
        for ( index = 0; index < darabolt.length-1; index++) {
             returnstring+=", "+darabolt[index];
            
        }
    return "Hello"+returnstring+" and "+darabolt[index]+".";
    }

    return "Hello, "+emberek+".";
    

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