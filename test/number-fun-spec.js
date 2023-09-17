const {expect} = require("chai");
const {returnsThree, reciprocal} = require("../problems/number-fun.js");

describe("returnThree", function() {
    it("should return 3", function() {
        const result = returnsThree();
        expect(result).to.equal(3);
    });
});

describe("reciprocal", function() {
    context("Valid Arguments", () => {
        it("should return reciprocal of the input number", function() {
            const result1 = reciprocal(2);
            expect(result1).to.equal(0.5);

            const result2 = reciprocal(4);
            expect(result2).to.equal(0.25)
        });
      });

    context("Invalid Arguments", () => {
        it("should throw a RangeError for arguments less than 1", () => {
            const testFunction = () => {reciprocal(0.5)}
            expect(testFunction).to.throw(Error, "Range Error");
        });


        it("should throw a RangeError for arguments greater than 1,000,000", () => {
            const testFunction = () => {reciprocal(9123456)}
            expect(testFunction).to.throw(Error, "Range Error");

        });
    });
});
