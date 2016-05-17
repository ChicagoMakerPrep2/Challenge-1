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