let firstnumber;
let secondnumber;
let step = 0;
let operation;
let result = 0;
let Array1 = [];
let Array2 = [];
let memory = 0;

const display = document.getElementById('display');

function getNumber(num) {
    if (step === 0 || step === 1) {
        Array1.push(num);
        step = 1;
        firstnumber = Number(Array1.join(''));
        display.value = firstnumber;
    } else if (step === 2) {
        Array2.push(num);
        secondnumber = Number(Array2.join(''));
        display.value = secondnumber;
    }
}

function getOperator(op) {
    step = 2;
    operation = op;
}

function clearData() {
    display.value = 0;
    step = 0;
    result = 0;
    firstnumber = null;
    secondnumber = null;
    operation = null;
    Array1 = [];
    Array2 = [];
}

function toggleSign() {
    if (step === 1) {
        firstnumber = -firstnumber;
        display.value = firstnumber;
        Array1 = [firstnumber];
    } else if (step === 2) {
        secondnumber = -secondnumber;
        display.value = secondnumber;
        Array2 = [secondnumber];
    }
}

const getEquals = () => {
    if (operation === '+') {
        result = firstnumber + secondnumber;
    } else if (operation === '-') {
        result = firstnumber - secondnumber;
    } else if (operation === '×') {
        result = firstnumber * secondnumber;
    } else if (operation === '/') {
        result = firstnumber / secondnumber;
    } else if (operation === '%') {
        result = firstnumber % secondnumber;
    } else if (operation === '^') {
        result = Math.pow(firstnumber, secondnumber);
    }
    display.value = result;
    firstnumber = result;
    secondnumber = null;
    Array1 = [result];
    Array2 = [];
    step = 1;
};

function calculateSqrt() {
    if (step === 1) {
        firstnumber = Math.sqrt(firstnumber);
        display.value = firstnumber;
        Array1 = [firstnumber];
    }
}

function calculateSquare() {
    if (step === 1) {
        firstnumber = Math.pow(firstnumber, 2);
        display.value = firstnumber;
        Array1 = [firstnumber];
    }
}

function clearMemory() {
    memory = 0;
}

function recallMemory() {
    display.value = memory;
    if (step === 0 || step === 1) {
        firstnumber = memory;
        Array1 = [memory];
    } else if (step === 2) {
        secondnumber = memory;
        Array2 = [memory];
    }
}

function addToMemory() {
    memory += parseFloat(display.value);
}

function subtractFromMemory() {
    memory -= parseFloat(display.value);
}

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();
