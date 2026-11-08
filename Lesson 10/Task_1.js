function printWithDelay(text, ms) {
    setTimeout(() => {
        console.log(text);
    }, ms);
}

printWithDelay('Hello after 2 seconds', 2000);
