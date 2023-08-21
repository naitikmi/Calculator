const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "=","&","|","^",">>","<<"];
let output = "";
const calculate = (btnval) => {
  display.focus();
  if (btnval === "=" && output !== "") {
    output = eval(output);
  } else if (btnval === "AC") {  output = ""; 
  } else if (btnval === "DEL") {
      if(output.charAt(output.length-1)==">"||output.charAt(output.length-1)=="<"){
        output = output.toString().slice(0,output.length-2);
      }else{ 
        output = output.toString().slice(0,output.length-1);
      }
  } else {
    if (output === "" && specialChars.includes(btnval)) return;
    output += btnval; }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", function(b){
    calculate(b.target.dataset.value)});
});