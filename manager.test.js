//example of testing
const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should reverse a given string", () => {
      const str = "Hello World!";
      const reversed = "!dlroW olleH";

      const result = new Algo().reverse(str);

      expect(result).toEqual(reversed);
    });
  });
});

//going to test my statement engineer or intern logic because its using isPalindrome whcih test for true or false
describe("isPalindrome", () => {
  it("should return true if a string is a palindrome", () => {
    const str = "racecar";

    const result = new Algo().isPalindrome(str);

    expect(result).toEqual(true);
  });

  it("should return false if a string is not a palindrome", () => {
    const str = "neon";

    const result = new Algo().isPalindrome(str);

    expect(result).toEqual(false);
  });
});