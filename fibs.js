// Fibonacci Visualization in P5.js

let fibonacciValues = []; // Array to store Fibonacci numbers
let maxIndex = 15; // Number of Fibonacci values to calculate
let spacing = 40; // Spacing between visual elements

function setup() {
    createCanvas(800, 800);
    noLoop(); // No continuous drawing
    calculateFibonacci(maxIndex);
    drawFibonacci();
}

function calculateFibonacci(n) {
    fibonacciValues[0] = 0;
    fibonacciValues[1] = 1;

    for (let i = 2; i <= n; i++) {
        fibonacciValues[i] = fibonacciValues[i - 1] + fibonacciValues[i - 2];
    }
}

function drawFibonacci() {
    background(255);
    translate(width / 2, height / 2);

    let angle = 0; // Starting angle for spiraling
    let radius = 10; // Initial radius for the spiral

    for (let i = 0; i < fibonacciValues.length; i++) {
        let fib = fibonacciValues[i];

        // Draw a circle representing the Fibonacci value
        fill(100, 150, 255, 150);
        noStroke();
        ellipse(radius * cos(angle), radius * sin(angle), fib * 2, fib * 2);

        // Adjust angle and radius for next Fibonacci circle
        angle += PI / 4; // Increment angle for spiral effect
        radius += spacing; // Increment radius

        // Draw labels
        fill(0);
        textAlign(CENTER, CENTER);
        text(fib, radius * cos(angle), radius * sin(angle));
    }
}
