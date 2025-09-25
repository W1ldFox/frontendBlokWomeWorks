function combineValue(number, text) {
    if (number < 0) {
        return "Некорректное значение";
    }
    return number + " " + text;
}

console.log(combineValue(5, "яблок"));
console.log(combineValue(-3, "яблок"));



function doubleNumber(number) {
    return number * 2;
}

console.log(doubleNumber(3));




function convertToNumber(text) {
    return Number(text);
}
console.log(convertToNumber("42"));



function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return "Массив пустой";
    }
    return Math.max(...numbers);
}


console.log(findMaxNumber([1, 5, 9, 2])); 
console.log(findMaxNumber([]));          
