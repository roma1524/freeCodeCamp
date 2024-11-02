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
