/* Problem statement
* You are given an array prices where prices[i] is the price of a given stock on the ith day.
* You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
* Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
        // Initialize variable to store the minimum price seen so far
    let minPrice = Number.MAX_SAFE_INTEGER;
    // Initialize variable to store the maximum profit
    let maxProfit = 0;
    
    // Iterate through the prices
    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price seen so far
        minPrice = Math.min(minPrice, prices[i]);
        // Update the maximum profit
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4])) //Output: 5
console.log(maxProfit([7,6,4,3,1])) //Output: 0

/*
* The implementation tracks the minimum price seen so far and the maximum profit.
* It iterates through the prices array once, updating the minimu price and maximum profit it goes
*/


/*
* Time Complexity - O(n) - where n is the total number of elements in the prices array
* This algorithm assumes you can only buy and sell once. For multiple time the solution changes
*/
