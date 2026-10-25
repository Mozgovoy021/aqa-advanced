function handleNum(num, handleEven, handleOdd) {
    if (num % 2 === 0) {
        handleEven(num);
    } else {
        handleOdd(num);
    }
}

function handleEven(num) {
    console.log(`The number ${num} is even.`);
}

function handleOdd(num) {
    console.log(`The number ${num} is odd.`);
}

handleNum(4, handleEven, handleOdd);
