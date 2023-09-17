const {expect} = require("chai");
const reverseString = require("../problems/reverse-string.js");

describe("reverseString", function() {
    it("should reverse the string 'fun'", function() {
        const input = "fun";
        const result = reverseString(input);
        expect(result).to.equal("nuf");
    });

    it('should throw a TypeError when given a non-string input', () => {
        const input = 42; // Non-string input
        expect(() => reverseString(input)).to.throw(TypeError);
      });
});
