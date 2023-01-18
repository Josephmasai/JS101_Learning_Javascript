let arr=["a,b,c,d,e,f,g,h"];
let b="";
for(let i=0;i<arr.length;i++){
  if(arr[i]="undefined"){
    arr[i-1]=b;
    arr[i+1]=b
  }
  console.log(arr[i-1],"<----",arr[i],"---->",arr[i+1]);

    
  }

  
  