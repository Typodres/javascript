function average(a, b) {
    const avg = (a + b) / 2;
    return avg;
}

function square(x) {
    const sq = x * x;
    return sq;
}

function cube(x) {
    const cb = x * x * x;
    return cb;
}
 
function calculate() {
    const result = [];
    for (let i = 0; i <= 9; i++) {
        square(i);
        cube(i);
        average(square(i), cube(i));
        result.push(average(square(i), cube(i)));
    }
    return result;
}
console.log(calculate());