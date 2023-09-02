const n = 10;
// Create a new array of size 'n'
let series = new Array(n);

// Fills all places in array with 0
series.fill(0);

// Seed value for 1st element
series[0] = 0;

// Seed value for 2nd element
series[1] = 1;

let i = 2;
while (i < n) {
  // Apply basic Fibonacci formulae
  series[i] = series[i - 1] + series[i - 2];

  // Increment the conditional variable
  i++;
}

console.log(series);
