var createCounter = function (n) {
    let x = n - 1;
    return function () {
        x += 1;
        return x;
    };
};


const counter = createCounter(10)
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
console.log(counter()); // 13
