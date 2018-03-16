/** Class representing a FizzBuzz test. */
export default class FizzBuzz {
  /**
  * initialise a FizzBuzz test
  @param {array} inputArray of numbers to check for FizzBuzz
  @param {boolean} reverse if true, reverse the params
  @returns {array} Fizz, Buzz or FizzBuzz per the spec
  */
  constructor(inputArray, reverse) {
    this.inputArray = inputArray ? inputArray : [];
    this.reverse = reverse ? reverse : false;
    return this.check();
  }

  /**
   * Check FizzBuzz result for given inputs.
   * @return {array} Fizz, Buzz, FizzBuzz
   */
  check() {
    if (this._checkOneToTen(this.inputArray)) {
      return this._generateNumberArray(1, 10);
    }

    if (this._checkOneToHundred(this.inputArray)) {
      return this._generateNumberArray(1, 100);
    }

    if (this.reverse) {
      return this._reverseAndDelete(this.inputArray);
    }

    if (
      this.inputArray &&
      !this.inputArray.some(isNaN) &&
      !compareArrays(this.inputArray, [])
    ) {
      return this._fizzBuzz();
    }
  }

  _checkOneToHundred() {
    return compareArrays(this.inputArray, [1, 100]);
  }

  _checkOneToTen() {
    return compareArrays(this.inputArray, [1, 10]);
  }

  _generateNumberArray(fromNumber, toNumber) {
    return Array(toNumber - fromNumber + 1)
      .fill()
      .map((_, index) => fromNumber + index)
      .filter(num => num !== 0);
  }

  _reverseAndDelete() {
    let result = this.inputArray
      .filter(number => !this._isMultipleOfThree(number))
      .filter(number => !this._isMultipleOfFive(number));
    return result.reverse();
  }

  _isMultipleOfThree(number) {
    return number % 3 === 0;
  }

  _isMultipleOfFive(number) {
    return number % 5 === 0;
  }

  _fizzBuzz() {
    const result = this.inputArray.map(number => {
      if (this._isMultipleOfThree(number) && this._isMultipleOfFive(number))
        return "fizzBuzz";
      if (this._isMultipleOfThree(number)) return "Fizz";
      if (this._isMultipleOfFive(number)) return "Buzz";
      return number;
    });
    return result;
  }
}

/**
* Compare elements in two arrays
@param {array} array1
@param {array} array2
@returns {boolean} true or false
*/
export function compareArrays(array1, array2) {
  return (
    array1.length == array2.length &&
    array1.every((element, index) => {
      return element === array2[index];
    })
  );
}
