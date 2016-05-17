// describe('Cube', function() {
// 	it('should return a number cubed', function() {
// 		expect(cube(2)).toEqual(8);
// 		expect(cube(3)).toEqual(27);
// 		expect(cube(4)).toEqual(64);
// 	});
// });

describe('Bill Total', function() {
	it ('should return the bill total with tax and tip added', function(){
		expect(billTotal(21.55)).toEqual("Your total comes to $26.83");
	});
});

describe('Digital Sum', function() {
	it ('should return the sum of all the numbers', function() {
		expect(digitalSum(1337)).toEqual(14)
	});
});