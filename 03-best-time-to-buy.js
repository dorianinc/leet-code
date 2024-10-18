const maxProfit = function (prices) {
  let max = 0;
  let buyingPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (buyingPrice < price) {
      const profit = price - buyingPrice;
      if (profit > max) {
        max = profit;
      }
    } else {
      buyingPrice = price;
    }
  }
  return max;
};

// Test case 1: Basic test case with potential profit
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// Expected output: 5

// Test case 2: No potential profit (prices decrease)
console.log(maxProfit([7, 6, 4, 3, 1]));
// Expected output: 0

// Test case 3: Prices remain the same
console.log(maxProfit([3, 3, 3, 3, 3]));
// Expected output: 0

// Test case 4: Buying and selling on different days
console.log(maxProfit([1, 2, 3, 4, 5]));
// Expected output: 4 (Buy at 1, sell at 5)

// Test case 5: Buy at the beginning and sell at the end
console.log(maxProfit([5, 4, 3, 2, 1]));
// Expected output: 0 (No profit possible)

// Test case 6: Fluctuating prices with profit opportunity
console.log(maxProfit([3, 2, 6, 5, 0, 3]));
// Expected output: 4 (Buy at 2, sell at 6)

// Test case 7: Only one price
console.log(maxProfit([10]));
// Expected output: 0 (Cannot buy and sell on the same day)

// Test case 8: Large price range
console.log(maxProfit([10000, 1, 5000, 2, 6000]));
// Expected output: 5999 (Buy at 1, sell at 6000)

// Test case 9: Increasing prices with gaps
console.log(maxProfit([1, 10, 5, 20, 15]));
// Expected output: 19 (Buy at 1, sell at 20)
