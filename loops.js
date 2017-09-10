function forLoop(array) {
    for (var i = 1; i <= 25; i++) {
        if (i === 1) {
            array.push("I am 1 strange loop");
        } else {
            array.push(`I am ${i} strange loops.`);
        }
    }
    return array;
}

function whileLoop(n) {
    var counter = 0;
    while (n > counter) {
        console.log(--n);
    }
    return 'done';
}
