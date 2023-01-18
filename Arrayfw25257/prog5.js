let string= "masai school program"

let space= 0;
for(let i=0;i<string.length;i++){

  if(string[i]== " "){
    space++;
  }
}

console.log("words:",space+1);