let list = readInput();
console.log(list);
displayStats(list);

function readInput() {
    var inputList = [];
    var inputNumber = "";
    do {
        do {
            inputNumber = prompt("Enter an interger (a negative integer to quit):", "");
        } while (!(checkIntegerNumber(inputNumber) == "positive" || checkIntegerNumber(inputNumber) == "negative"));
        inputList.push(parseInt(inputNumber));
    } while (!(checkIntegerNumber(inputNumber) == "negative"));
    inputList.splice(-1, 1);
    return inputList;
}

function displayStats(numberList) {
    let strShow = numberList.length === 0 ? "For the list empty, the average is 0, the minimum is 0, and the maximum is 0" : calculateAvgMaxMin(numberList);
    alert(strShow);

}

function calculateAvgMaxMin(list) {
    let maxValue = Math.max(...list)
    let minValue = Math.min(...list);
    let average = averageList(list);
    return "For the list " + list + ", the average is " + average + ", the minimum is " + minValue + ", and the maximum is " + maxValue;
}

function averageList(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    let avg = total / list.length;
    return avg.toFixed(2);
}

function checkIntegerNumber(strNumber) {
    let formatNumber = Math.floor(Number(strNumber));
    // Check positive number
    if (Math.sign(strNumber) == 1 && formatNumber !== Infinity && String(formatNumber) === strNumber) {
        return "positive";
        // Check nevtive number
    } else if (Math.sign(strNumber) == -1 && formatNumber !== Infinity && String(formatNumber) === strNumber) {
        return "negative";
        // Check zero number
    } else if (Math.sign(strNumber) == 0 && formatNumber !== Infinity) {
        return "err";
        // Unknow
    } else {
        return "err";
    }
}