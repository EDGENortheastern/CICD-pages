import {
    convertToNum,
    calculateResults
} from './logic.mjs';

test("that Jest is working", () => {
    expect(2+2).toBe(4);
});

describe("tests the function convertToNum", () => {
    test("that convertToNum converts stringified numbers", () => {
        expect(typeof convertToNum('3')).toBe('number');
        expect(convertToNum('25')).not.toBe('25');
        expect(convertToNum('134')).toBe(134);
        expect(convertToNum('1000000000000')).toBe(1000000000000);
    });
    test("that convertToNum does nothing to number input", () => {
        expect(typeof convertToNum(3)).toBe('number');
        expect(convertToNum(25)).toBe(25);
        expect(convertToNum(1000000000000)).toBe(1000000000000);
    });
});


describe("tests the function calculateResults", () => {
    test("that calculateResults calculates percentages correctly", () => {
        expect(calculateResults('100','12')).toBe(12);
        expect(calculateResults(100, 25)).toBe(25);
        expect(calculateResults(28, 12)).toBe(3.36);
    });
});