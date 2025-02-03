const container = document.querySelector(".container")

const display = document.createElement("div");
display.classList.add("display");
container.appendChild(display);

function rows() {
    for (i=0; i<4; i++) {
    const row = document.createElement("div");
    row.classList.add("rows");
    container.appendChild(row);
    };
};

rows()




function add(a, b) {
    c = a + b;
    return c;
};

function subtract(a, b) {
    c = a - b;
    return c;
};

function multiply(a, b) {
    c = a * b;
    return c;
};

function divide(a, b) {
    if (b == 0) {  // When this was just b = 0 the function passed over this when b!= 0  but then set b to 0 for the else.
        return "You have ended the world... well done!";
    } else {
        c = a / b;
        return c;
    };
};

function operate(op) {
    if (op == 0) {
        add(a, b);
        return c
    } else if (op == 1) {
        subtract(a, b);
        return c
    } else if (op == 2) {
        multiply(a, b);
        return c
    } else if (op == 3) {
        divide(a, b);
        return c
    } else {
        return "There has been an error";
    };
};

inputA = "6"
let a = inputA

inputB = "2"
let b = inputB

operator = "2"
let op = operator


console.log(operate(op))