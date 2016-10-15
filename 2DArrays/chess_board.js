/* Chess Board */

// a. create a 8 x 8 chess board
var board = [
	[ 'R', 'N', 'B', 'K', 'Q', 'B', 'N', 'R' ],
	[ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
	[ '-', '-', '-', '-', '-', '-', '-', '-' ],
	[ '-', '-', '-', '-', '-', '-', '-', '-' ],
	[ '-', '-', '-', '-', '-', '-', '-', '-' ],
	[ '-', '-', '-', '-', '-', '-', '-', '-' ],
	[ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
	[ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ]
];

// b. create a class that holds the array, and in the class create a method that gives the # of points for either the 
// white player or black player according to the following point table (pdf)
function findPoints(board) {

	var hash = { p: 1, b: 3, r: 5, q: 9 };
	var result = [];

	for (var i = 0; i < board.length; i++) {

		for (var j = 0; j < board[i].length; j++) {

			
		}
	}
}