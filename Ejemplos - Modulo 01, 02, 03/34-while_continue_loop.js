
let i, n = 0, res;
const MAX = 10;

num: while (n <= MAX) {
        res = 1;
        i = n;
        while (true) {
            if (0 >= i--) {
                console.log("2^" + n++ + " = " + res);
                continue num;
            }
            res *= 2;
        }
}

