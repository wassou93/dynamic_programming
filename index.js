// Fibonacci Memoisation

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));



console.log(fib(50));
console.log(fib(100));

// Grid Traveler Memoisation

const gridTraveler = (m, n, memo = {}) => {
    let key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m - 1, n, memo) +
        gridTraveler(m, n - 1, memo);
    return memo[key];
}

console.log(gridTraveler(1, 1));        // Expects 1
console.log(gridTraveler(2, 3));        // Expects 3
console.log(gridTraveler(3, 2));        // Expects 3
console.log(gridTraveler(3, 3));        // Expects 6
console.log(gridTraveler(4, 3));        // Expects 10
console.log(gridTraveler(18, 18));      // Expects 2333606220 

// Steps to Dynamic Programming - Memoization 
//
// Make it work
// Visualize as trees
// Implement tree as recursion
// test bruteforce solution
//
// Make it efficient
// add a memo object
// add a base case to return memoo values 
// store return values into the memo 

// Target Sum
const canSum = (targetSum, values, memo = {}) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    if (targetSum in memo) return memo[targetSum];
    for (let value of values) {
        if (canSum(targetSum - value, values, memo)) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum(7, [2, 3])); // true 
console.log(canSum(7, [5, 3, 4, 7])); // true 
console.log(canSum(7, [2, 4])); // false  
console.log(canSum(8, [2, 3, 5])); // true 
console.log(canSum(300, [7, 14])); // false 















