let inputNumber, formatNumber;
do {
    inputNumber = prompt("Enter a postive integer", "");
    formatNumber = Math.floor(Number(inputNumber));
} while (!(formatNumber !== Infinity && String(formatNumber) === inputNumber && formatNumber > 0));
showPrimes(parseInt(inputNumber));

function showPrimes(nunber) {
    if (nunber == 1) {
        alert("For n = 1 don't have prime numbers");
    } else {
        let primeList = [];
        for (let i = 2; i <= nunber; i++) {
            if (!isPrime(i)) continue;
            primeList.push(i);
        }
        alert("For n = " + nunber + " prime numbers are " + primeList);
    }

}
function isPrime(nunber) {
    for (let i = 2; i < nunber; i++) {
        if (nunber % i == 0) return false;
    }
    return true;
}
