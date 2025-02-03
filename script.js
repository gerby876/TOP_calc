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
        c = a % b;
        return c;
    };
};

const a = a.value;
a.value == '';

const b = b.value;
b.value == '';