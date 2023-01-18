let arr="go%.a&.";

let b= "";
for(let i=0;i<arr.length;i++){
  if(arr[i]=="%"){
     b=b+ "h";
   
  }
  else if(arr[i]=="."){
    b=b+ "";
  }
  else if(arr[i]=="&"){
    b=b+ "n";
    
  }
  else{
    b=b+arr[i];
    
}
}
console.log(b);

