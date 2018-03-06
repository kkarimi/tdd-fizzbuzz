export default class FizzBuzz {

	start = null;
	end = null;
	output = [];

	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	generate() {
		let inclusiveEnd = this.end + 1;
		for (let i = this.start; i < inclusiveEnd; i++) {
			if (this.isMultipleOf3(i) && this.isMultipleOf5(i)) {
				this.output.push('FizzBuzz');
			}
			else if (this.isMultipleOf3(i)) {
				this.output.push('Fizz');
			} else if (this.isMultipleOf5(i)) {
				this.output.push('Buzz');
			}
			else {
				this.output.push(i);
			}

		}
		return this;
	}

	reverseAndDeleteFizzBuzz() {
		this.output = this.output.reverse().filter((item) => {
			return item !== 'FizzBuzz';
		});
	}

	isMultipleOf3(value) {
		return this.isMultipleOf(value, 3);
	}

	isMultipleOf5(value) {
		return this.isMultipleOf(value, 5);
	}

	isMultipleOf(value, factor) {
		return (value % factor === 0)
	}

}





