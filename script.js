let number1;
let operator;
let number2;

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

function updateCanvas(targetText) {
    let resultDiv = document.querySelector(".cal-result");
    if (targetText === 'C') {
        resultDiv.innerHTML = "";
    } else {
        resultDiv.textContent += targetText;
    }
}

let buttons = document.querySelector(".cal-buttons");
buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case 'num0':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'num1':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'num2':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'num3':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'num4':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'num5':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'num6':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'num7':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'num8':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'num9':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'divide':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'multiply':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'substract':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'add':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'result':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
        case 'clear':
            console.log(`You pressed ${target.textContent}`);
            updateCanvas(target.textContent);
            break;
    }
})

function operate(num1, operation, num2) {
    switch (operation.toLowerCase()) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}