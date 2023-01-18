let password="Joker@007";
let count_special=0;
let count_upper=0;
let count_space=0;

if(password.length<8){
  console.log("Password must contain more than 8 characters");
}
else{
  for(i=0;i<password.length;i++){
    if(password[i]=="$" || password[i]=="%" || password[i]== "@" || password[i]=="&"){
      count_special++;
    }
    else if(password[i]== "A" || password[i]== "B" || password[i]=="C" || password[i]=="J"){
      count_upper++;
    }
    else if(password[i]==" "){
      count_space++;
  }
}}
if(count_special==0){
  console.log("Please include atleast 1 special character");
}
else if(count_upper==0){
  console.log("Please use atleast 1 uppercase character");
}
else if(count_space>0){
  console.log("Please do not use space")
}
else{
  console.log("Your password is strong!");
}