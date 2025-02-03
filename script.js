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

// const a = a.value;
// a.value == '';

// const b = b.value;
// b.value == '';

// const op = op.value;
// op.value = '';

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
        return "There has been an error"
    }
}

let a = 6
let b = 3
console.log(operate(3))