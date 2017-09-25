function print(val) {
    document.write(val + '<br>');
}


const a = Number(prompt('Enter a'));
const b = Number(prompt('Enter b'));
const c = Number(prompt('Enter c'));

function discr(a, b, c) {

    return (b * b) - (4 * a * c);
}

function solve(a, b, c) {
    const d = discr(a, b, c);
    if (d > 0) {
        const x1 = (-b - Math.sqrt(d)) /( 2 * a);
        const x2 = (-b + Math.sqrt(d)) / (2 * a);
        return 'x1=' + x1 + '<br>' + 'x2=' + x2;
    }
    else if (d === 0) {
        const x = (-b) / 2 * a;
        return 'x=' + x;
    }
    else {
        return 'No roots';
    }
}
const result = solve(a, b, c);
print(result);
