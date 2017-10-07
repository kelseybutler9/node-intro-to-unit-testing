const should = require('chai').should();

const adder = require('../fizzBuzzer');


// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz, buzz, or num', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 5, expected: 'buzz'},
      {a: 3, expected: 'fizz'},
      {a: 7, expected: 7},
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = adder(input.a, input.b);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a', 1],
      ['number', 2]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          adder(input[0], input[1])
      }).should.throw(Error);
    });
  });
});

// module.exports = function(num) {
// 	if (typeof num !== 'number') {
// 		throw Error('`num` must be a number');
// 	}
// 	if (num % 15 === 0) {
// 		return 'fizz-buzz';
// 	}
// 	if (num % 5 === 0) {
// 		return 'buzz';
// 	}
// 	if (num % 3 === 0) {
// 		return 'fizz';
// 	}
// 	else {
// 		return num;
// 	}
// }
