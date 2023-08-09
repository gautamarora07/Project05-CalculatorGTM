class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) {
      if (number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === '') return
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '–':
          computation = prev - current
          break
        case '×':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('#number')
  const operationButtons = document.querySelectorAll('#operator')
  const equalsButton = document.querySelector('#equal')
  const deleteButton = document.querySelector('#del')
  const allClearButton = document.querySelector('#allClear')
  const previousOperandTextElement = document.querySelector('.prevOpr')
  const currentOperandTextElement = document.querySelector('.currOpr')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    });

    button.addEventListener("keydown", function(event){
        buttonClick(event.target.innerText);
    
    });
  })
  
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })
/*var total = 0;
var buffer = 0;
var prevOperator;


/*document.querySelector('input').value = "hey";*/
/*
function buttonClick(value){
    if(isNaN(value)){
        console.log(value);
        handleSymbol(value); 
    }
    else{
        handleNumber(value);
    }

    document.querySelector('#inp_screen').innerText = buffer;
}

function handleSymbol(symbol)
{
    switch(symbol)
    {
        case 'C' :
            buffer = '0';
            total= 0;
            break;
        case '=':
            if(prevOperator === null)
            {return;}
            flushOperation(parseInt(buffer));
            prevOperator = null;
            buffer = total;
            total = 0 ;
            break;

        case '◄':
            if(buffer.length === 1)
            buffer = '0';
            else
            buffer = buffer.substring(0, buffer.length - 1);
            break;

        case '–':
        case '+':
        case '÷':
        case '×':
                handleMath(symbol);
                break;
    }
}

function handleMath(symbol)
{  console.log(`symbol = ${symbol}`);
if(buffer === '0')
    return ;

    const intBuffer = parseInt(buffer);

    if(total === 0)
        total = intBuffer;
    else
    flushOperation(intBuffer);

    prevOperator = symbol;
    buffer ='0';

}


function flushOperation(intBuffer)
{

    if(prevOperator === '+')
        total += intBuffer;
    else if(prevOperator === '–')
        total -= intBuffer;
    else if(prevOperator === '×')
        total *= intBuffer;
    else if(prevOperator === '÷')
        total /= intBuffer;
        
        console.log(`flushOperation intBuffer = ${intBuffer}`);
}

function handleNumber(numberString)
{   
    if(buffer === '0')
        buffer = numberString;
    else
        buffer += numberString;
console.log(`handleNumber numberString = ${numberString}`);
}

function init()
{
     document.querySelector('.btns-box').addEventListener("click", function(event){
   //     console.log(event.target.innerText);
        buttonClick(event.target.innerText);

       
     });
}

document.querySelector('.btns-box').addEventListener("keydown", function(event){
    buttonClick(event.target.innerText);

});

try {
       init();     
} catch (error) {
        buffer = 'error!';   
}

*/

/*var string = "";
const buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach( (key) => {
    key.addEventListener("click", (event)=>
    {

        console.log(event.target.getAttribute("class"));
      
        if( event.target.innerHTML === '=')
        {
            string = eval(string);
            document.getElementById("inp_screen").value = string;
        }
        else if( event.target.getAttribute("id") === 'del')
        {
            string = string.substring(0, string.length-1);
            document.getElementById("inp_screen").value = string;
        }
        else if( event.target.getAttribute("id") === 'allClear')
        {
            string = "";
            document.getElementById("inp_screen").value = string;
        }
        else
        {
            string = string + event.target.innerHTML;
            document.getElementById("inp_screen").value = string;
        }
    });

} );*/ 