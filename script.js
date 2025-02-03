const container = document.querySelector(".container")

const display = document.createElement("div");
display.classList.add("display");
display.textContent = "45369413"
container.appendChild(display);

const row1 = document.createElement("div");
row1.classList.add("rows");
container.appendChild(row1);
    const button1 = document.createElement("button");
    button1.classList.add("button");
    button1.textContent = "1"
    const button2 = document.createElement("button");
    button2.classList.add("button");
    button2.textContent = "2"
    const button3 = document.createElement("button");
    button3.classList.add("button");
    button3.textContent = "3"
    const buttonA = document.createElement("button");
    buttonA.classList.add("button");
    buttonA.textContent = "+"

    row1.appendChild(button1);
    row1.appendChild(button2);
    row1.appendChild(button3);
    row1.appendChild(buttonA);


const row2 = document.createElement("div");
row2.classList.add("rows");
container.appendChild(row2);
    const button4 = document.createElement("button");
    button4.classList.add("button");
    button4.textContent = "4"
    const button5 = document.createElement("button");
    button5.classList.add("button");
    button5.textContent = "5"
    const button6 = document.createElement("button");
    button6.classList.add("button");
    button6.textContent = "6"
    const buttonS = document.createElement("button");
    buttonS.classList.add("button");
    buttonS.textContent = "-"

    row2.appendChild(button4);
    row2.appendChild(button5);
    row2.appendChild(button6);
    row2.appendChild(buttonS);

const row3 = document.createElement("div");
row3.classList.add("rows");
container.appendChild(row3);
    const button7 = document.createElement("button");
    button7.classList.add("button");
    button7.textContent = "7"
    const button8 = document.createElement("button");
    button8.classList.add("button");
    button8.textContent = "8"
    const button9 = document.createElement("button");
    button9.classList.add("button");
    button9.textContent = "9"
    const buttonX = document.createElement("button");
    buttonX.classList.add("button");
    buttonX.textContent = "X"

    row3.appendChild(button7);
    row3.appendChild(button8);
    row3.appendChild(button9);
    row3.appendChild(buttonX);

const row4 = document.createElement("div");
row4.classList.add("rows");
container.appendChild(row4);
    const buttonE = document.createElement("button");
    buttonE.classList.add("button");
    buttonE.textContent = "="
    const button0 = document.createElement("button");
    button0.classList.add("button");
    button0.textContent = "0"
    const buttonC = document.createElement("button");
    buttonC.classList.add("button");
    buttonC.textContent = "Clear"
    const buttonD = document.createElement("button");
    buttonD.classList.add("button");
    buttonD.textContent = "/"

    row4.appendChild(buttonE);
    row4.appendChild(button0);
    row4.appendChild(buttonC);
    row4.appendChild(buttonD);




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