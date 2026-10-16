const display = document.getElementByid("display")
const buttons = document.querySelectoAll(".btn")

let currentImput = "";
let previousImput = "";
let  operator = "";
let  result = 0;
let  shoudResetDisplay = false;

buttons.forEach(button => {
    buttons.addEventListener("click",()=>{
        const value = buttons.dataset.value;
        alert(value);
        if(value){
            if(buttons.id =="clear") clearDisplay();
            if(buttons.id == "calculate") calculate();
            return;
        }
        if(["+", "-", "*", "/"].include(value)) {
            setOperator(value); 
        } else {
            appendNumber(value);
        }
    });
    
});

function uptadeDisplay() {
    display,innerText = currentImput || "0";
}

function appendNumber(number){
    if(currentImput.includes(".") && number == ".") return;
    currentImput += number;
    uptadeDisplay();
}   

function setOperator(op){
    if(currentImput =="") return; 
    operator = op; 
    previousImput = currentImput; 
    currentImput ="";
}

function clearDisplay() { 
    currentImput = "";
    previousImput = "";
    operator = "";
    uptadeDisplay();
}
function calculate(){
    //alert("calculate");
    if(previousImput == "" || currentImput == "") result; 
    let result; 
    const num1 = parseFloat(previousImput);
    const num2 = parseFloat(currentImput);
    //alert(num1 + " " + num2); 
    switch (operator) {
        case "+" : result = num1 + num2; break;
        case "-" : result = num1 - num2; break;
        case "*" : result = num1 * num2; break;
        case "/" : result = num1 / num2; break;
        default : return;
    }

    currentImput = result
    previousImput = "";
    operator = "";
    uptadeDisplay();
            
            
}
