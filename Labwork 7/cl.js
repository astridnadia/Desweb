function myFunction() {
  var x,y,z,operator;
  x=prompt("Masukkan angka pertama");
  y=prompt("Masukkan angka kedua");
  operator=prompt("Masukkan operator");
  
  if(operator=="+"){
    z=Number(x)+Number(y);
  }
  else if(operator=="/"){
    z=Number(x)/Number(y);
  }
  else if(operator=="*"){
    z=Number(x)*Number(y);
  }
  else if(operator=="-"){
    z=Number(x)-Number(y);
  }
  
  return z;
    }
document.getElementById("demo").innerHTML =myFunction();