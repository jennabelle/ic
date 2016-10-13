/* 

Item Relationship Clusters: From the largest cluster found, print the item that appears 1st in alphabetic sort order.

Input:

0.15
4
Item1 Item2 0.2
Item2 Item3 0.1
Item4 Item5 0.3
Item5 Item6 0.4

Output:

Item4

Explanation:

There are 2 Item Clusters: (Item1, Item2) and (Item4, Item5, Item6). 
The cluster containing Item4 is larger, since it contains more items.

*/

// #1 edge list
var graph1 = [ ['Item1', 'Item2'], ['Item4', 'Item5'], ['Item5', 'Item6'] ];

function findLargestCluster(graph) {

	var hash = {};

	for (var i = 0; i < graph.length; i++) {

		for (var j = 0; j < graph[i].length; j++) {

			if ( hash.hasOwnProperty(graph[i][j]) ) {

				// only add if array not out of bounds
				if ( graph[i][j + 1 ] !== undefined ) {

					// push to existing key
					hash[ graph[i][j] ].push( graph[i][j + 1] );
				}
			}
			else {

				// only add if array not out of bounds
				if ( graph[i][j + 1] !== undefined ) {

					// add new key-value
					hash[ graph[i][j] ] = [];
					hash[ graph[i][j] ].push( graph[i][j + 1] );
				}
				else {
					hash[ graph[i][j] ] = [];
					hash[ graph[i][j] ].push( graph[i][j - 1] );
				}
			}
		}
	}

	var max = 0;
	var largestClusterKey;

	// find largest cluster
	for (var key in hash) {

		if ( hash[key].length > max ) {
			max = hash[key].length;
			largestClusterKey = key;
		}
	}

	// put hash key inside largest cluster array
	var largestCluster = hash[largestClusterKey];
	largestCluster.push(largestClusterKey);

	// return first item in largest cluster
	return largestCluster.sort().shift();
}

// test
console.log( findLargestCluster(graph1) ); // 'Item4'