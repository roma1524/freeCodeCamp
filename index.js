// step 69

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber ) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
}

// step 70

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2*rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// step 71

for (let i = 0; i < count; i += 1) {}

// step 72

for (let i = 0; i < count; i++) {}

// step 73

for (let i = 1; i < count; i++) {
    rows.push(padRow(i + 1, count));
}

// step 74

for (let i = 1; i < count; i++) {
    rows.push(padRow(i, count));
}

// step 75

for (let i = 1; i <= count; i++) {
    rows.push(padRow(i, count));
}

// step 82

if ("") {
} else if(5 < 10) {
    console.log("5 is less than 10");
}

// step 83

if ("") {
    console.log("Condition is true");
} else if (5 > 10) {
    console.log("5 is less than 10");
} else {
    console.log("This is the else block");
}

// step 88

while (continueLoop) {
    done++;
    if(done == count){

    }
}

// step 102

for (let i = count; i > 0; i = i - 1) {
    rows.push(padRow(i, count));
}

// step 103

for (let i = count; i > 0; i -= 1) {
    rows.push(padRow(i, count));
}

// step 104

for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}

// step 108

const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);

const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);

// step 113

for (let i = 1; i <= count; i++) {
    if(inverted) {
        rows.unshift(padRow(i, count));
    }
}

// step 116

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}