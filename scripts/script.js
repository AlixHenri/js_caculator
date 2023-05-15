//Variables
const previousOperation = document.querySelector('#previous-operation');
const currentOperation = document.querySelector("#current-operation");
const button = document.querySelectorAll("#button-container button");

//Intialize calculator
class Calculator{
    constructor(previousOperation, currentOperation){
        this.previousOperation = previousOperation;
        this.currentOperation = currentOperation;
        this.currentOperation = "";
    }

    addDigit(digit){
        console.log(digit);
        this.currentOperation = digit;
        this.updateScreen();
    }
    
    updateScreen(){
        currentOperation.innerText += this.currentOperation;
    }
}

const calc = new Calculator(previousOperation, currentOperation);

//Return innerText as a value of each button and pressed 
button.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{

        const value = e.target.innerText; 

        //Convert innerText value into number and operations
        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        }else{

        }
    });
});