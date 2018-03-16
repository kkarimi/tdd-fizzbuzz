import FizzBuzz, { compareArrays } from "./fizz-buzz";

describe("Fizz Buzz", () => {
  it("Is defined and returns an object", () => {
    expect(FizzBuzz).toBeDefined();
    expect(typeof new FizzBuzz()).toBe("object");
  });

  it("should change the array item to the word Fizz for multiples of 3", () => {
    expect(new FizzBuzz([3])).toEqual(["Fizz"]);
    expect(new FizzBuzz([3, 6, 9])).toEqual(["Fizz", "Fizz", "Fizz"]);
    expect(new FizzBuzz([1, 3, 9])).toEqual([1, "Fizz", "Fizz"]);
  });

  it("should change the array item to Buzz for multiples of 5", () => {
    expect(new FizzBuzz([5])).toEqual(["Buzz"]);
    expect(new FizzBuzz([5, 10, 20])).toEqual(["Buzz", "Buzz", "Buzz"]);
    expect(new FizzBuzz([1, 20, 17])).toEqual([1, "Buzz", 17]);
  });

  it("should change the array item to fizzBuzz for multiple of 3 and 5", () => {
    expect(new FizzBuzz([15])).toEqual(["fizzBuzz"]);
    expect(new FizzBuzz([4, 13, 15])).toEqual([4, 13, "fizzBuzz"]);
    expect(new FizzBuzz([7, 15, 30])).toEqual([7, "fizzBuzz", "fizzBuzz"]);
  });

  it("should allow the user to reverse the array and delete all fizzBuzz items", () => {
    expect(new FizzBuzz([1, 2, 3, 5], true)).toEqual([2, 1]);
    expect(new FizzBuzz([7, 5, 3, 1], true)).toEqual([1, 7]);
  });

  it("given the numbers 1,10 are supplied fizzBuzz will produce an array : 1,2,3,4,5,6,7,8,9,10", () => {
    expect(new FizzBuzz([1, 10], true)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]);
  });

  it("given the numbers 1,100 are supplied fizzBuzz will produce an array : 1,2,3,4,5,6,7,8,9,10 (and on to 100)", () => {
    expect(new FizzBuzz([1, 100], true)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100
    ]);
  });
});

describe("ComparesArrays", () => {
  it("ComparesArrays is defined and is a functions", () => {
    expect(compareArrays).toBeDefined();
    expect(typeof compareArrays).toBe("function");
  });

  it("ComparesArrays evaluates correctly", () => {
    let Array1 = [1, 2];
    let Array2 = [1, 2];
    expect(compareArrays(Array1, Array2)).toEqual(true);

    let Array3 = [1, 2];
    let Array4 = [1, 3];
    expect(compareArrays(Array3, Array4)).toEqual(false);
  });
});
