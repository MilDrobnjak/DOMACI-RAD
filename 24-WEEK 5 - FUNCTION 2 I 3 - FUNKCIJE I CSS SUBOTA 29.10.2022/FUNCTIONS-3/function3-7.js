function perfectN(n) {
    var b = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            b += i;
        }
    }
    if (b == n) {
        return "Number is perfect!";
    }
    else {
        return "Number is NOT perfect!";
    }
}
console.log(perfectN(8228));