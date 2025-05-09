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