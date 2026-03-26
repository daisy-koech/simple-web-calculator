// functions for each operation
function add (a,b) { return a + b; }
function subtract (a,b) { return a - b; }
function multiply (a, b) { return a * b; }
function divide (a, b) {
    if (b === 0) {
        
        return null;
    }
    return a / b;
}

// Array to store history of calculations
const calculationHistory = [];

function calculate (operator) {
    const a = Number(document.getElementById('input1').value);
    const b = Number(document.getElementById('input2').value);
    let result;
    if (operator === "+") {
        result = add (a, b);
    }
    else if (operator === "-") {
        result = subtract (a, b);
    }
    else if (operator === "*") {
        result = multiply (a, b);
    }
    else if (operator === "/") {
        result = divide (a, b);
    }
    else {
        return "Invalid entry";
    }

const entry = {
    operation: operator,
    operands: [a,b],
    result: result
};

calculationHistory.push(entry);
// return result;

document.querySelector('.result h3').innerText = "Result: " + result;

const list = document.querySelector('.history ul');
list.innerHTML += "<li>" + a + "" + operator + "" + b + "=" + result + "</li>";
}

// // Testing
// calculation ("+", 10, 10);
// calculation ("/", 5, 0)
// calculation ("*", 4, 3)

// console.log("Calculation History:", calculationHistory)