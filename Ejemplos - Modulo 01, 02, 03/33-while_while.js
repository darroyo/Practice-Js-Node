
let i, n = 0, res;
const MAX = 10;

while (n <= MAX) {
    res = 1;
    i = n;
    while (0 < i--) {
        res *= 2;
    }
    console.log("2^" + n++ + " = " + res);
}

