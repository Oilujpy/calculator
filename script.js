let num1;
let num2;
let operator;

function add(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        return Number(n1) + Number(n2);
    } else {
        return n1 + n2;
    }
}

function substract(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        return Number(n1) - Number(n2);
    } else {
        return n1 - n2;
    }
}

function multiply(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        return Number(n1) * Number(n2);
    } else {
        return n1 * n2;
    }
}

function divide(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        return n2 === "0" ? `Nope! Can't divide by ${n2} Harry.` : Number(n1) / Number(n2);
    } else {
        return n1 / n2;
    }
}

function operate(num1, operation, num2) {
    switch (operation) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "×":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
    }
}

function updateCanvas(targetText) {
    const resultDiv = document.querySelector(".cal-result");
    if (targetText === 'C') {
        resultDiv.innerHTML = "";
    } else {
        resultDiv.textContent += `${targetText}`;
    }
}

function clearCanvas() {
    const resultDiv = document.querySelector(".cal-result");
    resultDiv.textContent = "";
}

function setValues() {
    const resultDiv = document.querySelector(".cal-result");
    variables = resultDiv.textContent.split('');
    if (variables.includes("+")) {
        num1 = variables.slice(0,variables.indexOf("+")).join('');
        operator = variables.slice(variables.indexOf("+"),variables.indexOf("+")+1).join('');
        num2 = variables.slice(variables.indexOf("+")+1).join('');
    } else if (variables.includes("-")) {
        num1 = variables.slice(0,variables.indexOf("-")).join('');
        operator = variables.slice(variables.indexOf("-"),variables.indexOf("-")+1).join('');
        num2 = variables.slice(variables.indexOf("-")+1).join('');   
    } else if (variables.includes("×")) {
        num1 = variables.slice(0,variables.indexOf("×")).join('');
        operator = variables.slice(variables.indexOf("×"),variables.indexOf("×")+1).join('');
        num2 = variables.slice(variables.indexOf("×")+1).join('');   
    } else {
        num1 = variables.slice(0,variables.indexOf("÷")).join('');
        operator = variables.slice(variables.indexOf("÷"),variables.indexOf("÷")+1).join('');
        num2 = variables.slice(variables.indexOf("÷")+1).join('');   
    }
}

let buttons = document.querySelector(".cal-buttons");
buttons.addEventListener("click", (event) => {
    let target = event.target;
    let currentValue = target.textContent;
    switch(target.id) {
        case 'num0':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'num1':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'num2':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'num3':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'num4':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'num5':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'num6':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'num7':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'num8':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'num9':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'divide':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'multiply':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'substract':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'add':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
        case 'result':
            setValues();
            clearCanvas();
            updateCanvas(operate(num1, operator, num2));
            break;
        case 'clear':
            console.log(`You pressed ${currentValue}`);
            updateCanvas(currentValue);
            break;
    }
})