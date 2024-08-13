import { isOddOrEven } from "./isOddOrEven.js";
import { expect } from "chai";

describe('isOddOrEven', () => {

    it('should return undefined when pass non string value as input', () => {

        //Arrange
        const inputValueNumber = 15;
        const inputValueUndefined = undefined;
        const inputValueNull = null;
        const inputFloat = 10.10
        //Act
        const resultNumber = isOddOrEven(inputValueNumber);
        const resultUndefined = isOddOrEven(inputValueUndefined);
        const resultNull = isOddOrEven(inputValueNull);
        const resultFloat = isOddOrEven(inputFloat)
        //Assert
        expect(resultNumber).to.be.undefined;
        expect(resultUndefined).to.be.undefined;
        expect(resultNull).to.be.undefined;
        expect(resultFloat).to.be.undefined
     })

     it('should return even when the input string length is even', () => {

        //Arrange
        const evenStringLength = '1234';
        //Act
        const resultEevenStringLength = isOddOrEven(evenStringLength);
        //Assert
        expect(resultEevenStringLength).to.be.equal('even');
     })

     it('should return odd when the input string length is even', () => {
        
         //Arrange
         const oddStringLength = '12345';
         //Act
         const resultOddStringLength = isOddOrEven(oddStringLength);
         //Assert
         expect(resultOddStringLength).to.be.equal('odd');
     })

     it('should return even when the input string length is 0', () => {

        //Arrange
        const zeroStringLength = '';
        //Act
        const resultZeroStringLength = isOddOrEven(zeroStringLength);
        //Assert
        expect(resultZeroStringLength).to.be.equal('even');
     })
})