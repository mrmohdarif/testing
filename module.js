function app() {
  console.log("Hello from the app module!");
}

 function add(a,b){
    console.log(a+b);
    
}

 function mul(a,b){
    console.log(a*b);   
}

module.exports={app,add,mul}