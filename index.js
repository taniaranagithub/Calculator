let s = document.querySelectorAll(".span");
let a = s.length
console.log(a)
  let i = 0;

while(i < a){
  s[i].onclick = function(e){
    if(e.target.innerHTML == "="){
      let value = document.getElementById("Calcular").value
      let value2 = eval(value) 
      document.getElementById("Calcular").value = value2
    } else if(e.target.innerHTML == "C"){
      document.getElementById("Calcular").value ="";

    }
    else document.getElementById("Calcular").value += e.target.innerHTML
    
  }
  console.log(i)
    i++
}
// document.getElementById("span1").addEventListener("click",(e)=>{
//     document.getElementById("calcular").value += e.target.innerHTML
// })