let arr=[1,2,3,4,5];
let count=0;
let count1=0;
for(i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    count=count+arr[i];
  }
  else{
    count1=count1+arr[i];
  }
}
if(count>count1){
  console.log("Even is greater");
}
else{
  console.log("Odd is greater");
}