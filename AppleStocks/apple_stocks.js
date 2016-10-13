/*

Suppose we could access yesterday's stock prices as an array, where:

The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500;.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

Example:

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
getMaxProfit(stockPricesYesterday); // returns 6 (buying for $5 and selling for $11)

Note: 

No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

*/

// 2nd try- 
function getMaxProfit(stockPricesYesterday) {

	var max = 0;

	for (var i = 0; i < stockPricesYesterday.length; i++) {

		// check for array out of bounds
		if (stockPricesYesterday[i+1] !== undefined) {

			// only if you buy lower than what you sell, will you profit
			if (stockPricesYesterday[i+1] > stockPricesYesterday[i]) {

				if (stockPricesYesterday[i+1] - stockPricesYesterday[i] > max) {

					max = stockPricesYesterday[i+1] - stockPricesYesterday[i];
				}
			}
		}
	}
	return max;
}


// // 1st try- BRUTE FORCE- bad time complexity of O(n^2)!
// function getMaxProfit(stockPricesYesterday) {
	
// 	var max = 0;
	
// 	for (var i = 0; i < stockPricesYesterday.length; i++) {
		
// 		for (var j = i+1; j < stockPricesYesterday.length; j++) {
			
// 			// only if you buy lower than what you sell for
// 			if (stockPricesYesterday[i] < stockPricesYesterday[j]) {
				
// 				if (stockPricesYesterday[j] - stockPricesYesterday[i] > max) {
				
// 					max = stockPricesYesterday[j] - stockPricesYesterday[i];
// 				}
// 			}
			
// 		}
// 	}

// 	return max;
// }

// tests
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
console.log( getMaxProfit(stockPricesYesterday) ); // 6