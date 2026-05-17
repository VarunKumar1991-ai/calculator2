let display = document.getElementById("display");

function appendNumber(num) {
    if (display.value === "0") {
        display.value = num;
    } else {
        display.value += num;
    }
}

function appendOperator(op) {
    let lastChar = display.value.slice(-1);

    if ("+-*/%".includes(lastChar)) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
    }
}

function appendDot() {
    let parts = display.value.split(/[\+\-\*\/]/);
    let lastPart = parts[parts.length - 1];

    if (!lastPart.includes(".")) {
        display.value += ".";
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}

// 🔥 Real calculator % behavior
function handlePercentage(expression) {
    return expression.replace(/(\d+(\.\d+)?)%/g, (match, num) => {
        return `(${num}/100)`;
    });
}

function calculate() {
    try {
        let expr = display.value;

        // Convert ÷ to /
        expr = expr.replace(/÷/g, "/");

        // Handle %
        expr = handlePercentage(expr);

        display.value = eval(expr);
    } catch {
        display.value = "Error";
    }
}