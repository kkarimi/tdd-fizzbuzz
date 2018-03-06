import FizzBuzz from "./fizz-buzz";

let fizzBuzz = null;

it('The program should allow any range of numbers to be supplied (0-10)', async () => {
	fizzBuzz = new FizzBuzz(1,10);
	fizzBuzz.generate();
	expect(fizzBuzz.output).toEqual([ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]);
});

it('The program should allow any range of numbers to be supplied (0-100)', async () => {
	fizzBuzz = new FizzBuzz(1,100);
	fizzBuzz.generate();
	expect(fizzBuzz.output[0]).toEqual(1);
	expect(fizzBuzz.output[7]).toEqual(8);
	expect(fizzBuzz.output[97]).toEqual(98);
});

it('The program should change the array item to the word Fizz for multiples of 3', async () => {
	fizzBuzz = new FizzBuzz(1,10);
	fizzBuzz.generate();
	expect(fizzBuzz.output[2]).toEqual('Fizz');
});

it('The program should change the array item to Buzz for multiples of 5', async () => {
	fizzBuzz = new FizzBuzz(1,10);
	fizzBuzz.generate();
	expect(fizzBuzz.output[4]).toEqual('Buzz');
	expect(fizzBuzz.output[9]).toEqual('Buzz');
});

it('The program should change the array item to FizzBuzz for multiple of 3 and 5', async () => {
	fizzBuzz = new FizzBuzz(1,30);
	fizzBuzz.generate();
	expect(fizzBuzz.output[14]).toEqual('FizzBuzz');
	expect(fizzBuzz.output[29]).toEqual('FizzBuzz');
});

it('The program should allow the user to reverse the array and delete all FizzBuzz items', async () => {
	fizzBuzz = new FizzBuzz(1,10);
	fizzBuzz.generate().reverseAndDeleteFizzBuzz();
	expect(fizzBuzz.output).toEqual([ 'Buzz', 'Fizz', 8, 7, 'Fizz', 'Buzz', 4, 'Fizz', 2, 1 ]);
});









