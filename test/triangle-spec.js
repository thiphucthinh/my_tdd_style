const {expect} = require("chai");
const {Triangle, Scalene, Isosceles, Right, Equilateral} = require("../problems/triangle.js");


describe("class Triangle", function() {
    let triangle1;

    beforeEach(() => {
        triangle1 = new Triangle(3, 4, 5)
    });


    it("constructor: should intake the lengths of 3 sides side1, side2, and side3 and set them as properties on the instance", function() {
        expect(this.side1).to.equal(3);
        expect(this.side2).to.equal(4);
        expect(this.side3).to.equal(5);
    });

    it("getPerimeter(): should return the perimeter of the Triangle instance", function() {
        expect(triangle.getPerimeter()).to.equal(12);
    });

    it("hasValidSideLengths(): should returns true if it is a valid triangle, and false if it is invalid", function() {
        let invalidTriangle = new Triangle(5, 2, 19);
        expect(triangle1.hasValidSideLengths()).to.be.true;
        expect(invalidTriangle.hasValidSideLengths()).to.be.false;
    });

    it("validate(): should adds an isValid property to the triangle instance, with a value of true if it is a valid triangle and false if the side lengths are invalid", function() {
        triangle1.validate();
        expect(triangle1.isValid).to.be.true;
        invalidTriangle.validate();
        expect(invalidTriangle.validate()).to.be.false;
    });

    it("getValidTriangles() static method: should returns an array of valid triangle instances", function() {
        const triangle1 = new Triangle(3, 4, 5);
        const triangle2 = new Triangle(5, 12, 13);
        const triangle3 = new Triangle(7, 24, 25);
        const triangle4 = new Triangle(9, 9, 9); // Equilateral triangle, also valid
        const triangleArray = [triangle1, triangle2, triangle3, triangle4];

        expect(Triangle.getValidTriangle(triangleArray)).to.be.an("array");
        expect(Triangle.getValidTriangle(triangleArray)).to.have.lengthOf(4);
        expect(Triangle.getValidTriangle(triangleArray)[0]).to.equal(triangle1);
        expect(Triangle.getValidTriangle(triangleArray)[1]).to.equal(triangle2);
        expect(Triangle.getValidTriangle(triangleArray)[2]).to.equal(triangle3);
        expect(Triangle.getValidTriangle(triangleArray)[3]).to.equal(triangle4);
    });

});

describe("class Scalene", function() {
    let scaleneTriangle;

    beforeEach(() => {
        scaleneTriangle = new Scalene(5, 12, 13);
    });

    it("should inherit from the Triangle class", function() {
        expect(scaleneTriangle instanceof Triangle).to.be.true;
    });

    it("has isValidTriangle property, with a value derived from the Triangle class hasValidSideLengths method", function() {
        scaleneTriangle.hasValidSideLengths();
        expect(scaleneTriangle.isValid).to.be.true;
    });

    it("isScalene(): should returns true if it is a valid scalene triangle, or false if it is invalid", function() {
        let invalidScalene = new Scalene(1, 2, 3);
        let invalidScalene2 = new Scalene(4, 4, 4); // An equilateral triangle
        let invalidScalene3 = new Scalene(5, 5, 7); // An isosceles triangle

        expect(scaleneTriangle.isScalene()).to.be.true;
        expect(invalidScalene.isScalene()).to.be.false;
        expect(invalidScalene2.isScalene()).to.be.false;
        expect(invalidScalene3.isScalene()).to.be.false;
    });

    describe("validate(): ", function() {
        it("should add an isValidIsosceles property with true for a valid isosceles triangle", function() {
            scaleneTriangle.validate();
            expect(scaleneTriangle.isValidScalene).to.be.true;
        });

        it("should add an isValidIsosceles property with false for an invalid isosceles triangle", function() {
            invalidScalene.validate();
            expect(invalidScalene.isValidScalene).to.be.false;
        });

        it("should override the validate() method from the Triangle class", function() {
            invalidScalene2.validate(); // An equilateral triangle
            expect(invalidScalene2.isValid).to.be.undefined;
            // The Triangle class isValid should not be set
        });
    });


});


describe("class Isosceles", function() {
    let isoscelesTriangle;

    beforeEach(() => {
        isoscelesTriangle = new Isosceles(5, 5, 7);
    })

    it("isIsosceles(): should return true if it is a valid isosceles triangle, or false if it is invalid", function() {
        let invalidIsoceles = new Isosceles(3, 4, 5);
        expect(isoscelesTriangle.isIsosceles()).to.be.true;
        expect(invalidIsoceles.isIsosceles()).to.be.false;
    });

    describe("validate():", function() {
        it("should add an isValidIsosceles property with true for a valid isosceles triangle", function() {
            isoscelesTriangle.validate();
            expect(isoscelesTriangle.isValidIsosceles).to.be.true;
        });

        it("should add an isValidIsosceles property with false for an invalid isosceles triangle", function() {
            invalidIsoceles.validate();
            expect(invalidIsoceles.isValidIsosceles).to.be.false;
        });

        it("should override the validate() method from the Triangle class", function() {
            invalidIsoceles.validate();
            expect(invalidIsoceles.isValid).to.be.undefined;
        });
    });


});
