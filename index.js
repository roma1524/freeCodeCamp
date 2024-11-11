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

// Review JavaScript Fundamentals by Building a Gradebook App
// step 1

function getAverage(scores) {
    const allScore = scores.reduce((acc, item) => {
        return acc + item
    }, 0)

    return allScore / (scores.length);
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// step 2

function getGrade(score) {
    if(score === 100) {
        return "A++";
    } else if( score >= 90 & score <= 99) {
        return "A";
    } else if( score >= 80 & score <= 89) {
        return "B";
    } else if( score >= 70 & score <= 79) {
        return "C";
    } else if( score >= 60 & score <= 69) {
        return "D";
    } else if( score >= 0 & score <= 59) {
        return "F";
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// step 3

function hasPassingGrade(score) {
    if(score <= 56) {
        return false;
    } else {
        return true;
    }
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

// step 4

function studentMsg(totalScores, studentScore) {
    let msg = '';

    if(hasPassingGrade(studentScore)) {
        msg = `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`
    } else {
        msg = `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`
    }

    return msg;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

// Learn Basic JavaScript by Building a Role Playing Game

function buyHealth() {

    if(gold >= 10) {

        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;

    }
}