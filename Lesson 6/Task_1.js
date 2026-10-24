// Function declaration
function getRectangleArea(width, height) {
    return width * height;
}

console.log(getRectangleArea(5, 10));

// Function expression
const getRectangleAreaExpression = function (width, height) {
    return width * height;
};

console.log(getRectangleAreaExpression(5, 10));

// Arrow function
const getRectangleAreaArrow = (width, height) => width * height;

console.log(getRectangleAreaArrow(5, 10));
