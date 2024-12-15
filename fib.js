// Part 1: Recursive Drawing of Shapes in P5.js
function setup() {
    createCanvas(800, 800);
    noFill();
    stroke(0);
    drawCircle(width / 2, height / 2, 200, 4); // Starting circle at center with radius 200 and depth 4
}

function drawCircle(x, y, radius, depth) {
    if (depth === 0) {
        return;
    }

    // Draw the current circle
    ellipse(x, y, radius * 2, radius * 2);

    // Recursive calls for top, bottom, left, and right circles
    drawCircle(x + radius, y, radius / 2, depth - 1);  // Right
    drawCircle(x - radius, y, radius / 2, depth - 1);  // Left
    drawCircle(x, y + radius, radius / 2, depth - 1);  // Bottom
    drawCircle(x, y - radius, radius / 2, depth - 1);  // Top
}

// Part 2: Fibonacci Memoization in P5.js
let memo = {};

function fibonacci(n) {
    // Check if the value is already in the memo
    if (n in memo) {
        return memo[n];
    }

    // Base cases
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    // Recursive calculation with memoization
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
}

function draw() {
    noLoop(); // Prevent continuous drawing

    // Example usage of Fibonacci
    let n = 10;
    console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);
}
