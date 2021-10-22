
const { showHelpOnFail, array } = require("yargs");

 function koszones(emberek){  
    let darabolt=emberek.split(", ");
    if(emberek==""){      //üres
    return "Hello, my friend.";
    }
    if(emberek==emberek.toUpperCase() && darabolt.length==1){  //1 db uppercase
      return "HELLO, "+emberek+"!";
      }
    let feltetel=0;
    for(let k=0;k<darabolt.length;k++){  //ellenőrzés h van e benne ordibálás
        if(darabolt[k]==darabolt[k].toUpperCase())
        feltetel++;
    }
    if(darabolt.length>1 &&  feltetel>0) {  //többelemű akár kis, akaár nagybetűs elemekkel
        
        let kis=[];
        let nagy=[];
        let i=0;
        let j=0;
        let index;
        let kisreturn="";
        let nagyreturn="";
        for ( index = 0; index < darabolt.length; index++) {
            if(darabolt[index]==darabolt[index].toUpperCase()){        //nagy és kisbetűs nevek elválasztása
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
   if(kis.length==1 && nagy.length>=2){  //1db kis, és bármennyi nagy
    return "Hello, "+kis[kis.length-1]+". AND HELLO"+nagyreturn+" AND "+nagy[nagy.length-1]+"!"
   }
   else if(kis.length==0){ //0db kis és bármennyi nagy
    return "HELLO"+nagyreturn+" AND "+nagy[nagy.length-1]+"!"
   }
   else if(nagy.length==1 && kis.length>=2){   //bármennyi kis és 1db nagy
    return "Hello"+kisreturn+" and "+kis[kis.length-1]+". AND HELLO, "+nagy[nagy.length-1]+"!"
   }
        return "Hello"+kisreturn+" and "+kis[kis.length-1]+". AND HELLO"+nagyreturn+" AND "+nagy[nagy.length-1]+"!" //bármennyi nagy és kis
    }
    if(darabolt.length>1){ //többelemű, csak kisnevekkel
        let returnstring="";
        let index;
        for ( index = 0; index < darabolt.length-1; index++) {
             returnstring+=", "+darabolt[index];
            
        }
    return "Hello"+returnstring+" and "+darabolt[index]+".";
    }

    return "Hello, "+emberek+".";  //1db kis név
    

}
module.exports = koszones;



function nevek() {
    let emberek = prompt();
    let text;
    
    text=koszones(emberek);
    document.getElementById("demo").innerHTML = text;
    
  }
 
