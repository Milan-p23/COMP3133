const chai = require('chai');
const expect = chai.expect;
const calculator = require('../app/calculator');

describe('Calculator Tests', () => {
    // Test cases for addition
    describe('Addition', () => {
        it('add(5, 2) should return 7', () => {
            expect(calculator.add(5, 2)).to.equal(7);
        });

        it('add(5, 2) should not return 8', () => {
            expect(calculator.add(5, 2)).to.not.equal(8);
        });
    });

    // Test cases for subtraction
    describe('Subtraction', () => {
        it('sub(5, 2) should return 3', () => {
            expect(calculator.sub(5, 2)).to.equal(3);
        });

        it('sub(5, 2) should not return 5', () => {
            expect(calculator.sub(5, 2)).to.not.equal(5);
        });
    });

    // Test cases for multiplication
    describe('Multiplication', () => {
        it('mul(5, 2) should return 10', () => {
            expect(calculator.mul(5, 2)).to.equal(10);
        });

        it('mul(5, 2) should not return 12', () => {
            expect(calculator.mul(5, 2)).to.not.equal(12);
        });
    });

    // Test cases for division
    describe('Division', () => {
        it('div(10, 2) should return 5', () => {
            expect(calculator.div(10, 2)).to.equal(5);
        });

        it('div(10, 2) should not return 2', () => {
            expect(calculator.div(10, 2)).to.not.equal(2);
        });
    });
});