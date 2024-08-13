import { lookupChar } from "./lookupChar.js";
import { expect } from "chai";

describe ('lookUpChar', () => {

    it('should return undefined when first parameter is from incorrect type and second parameter is from correct type', () => {
        
        //Arrange
        const incorrectFirstParam = 123;
        const correctSecondParam = 1;
        //Act
        const undefinedResult = lookupChar(incorrectFirstParam, correctSecondParam)
        //Assert
        expect(undefinedResult).to.be.undefined
    })

    it('should return undefined when first parameter is from correct type and second parameter is from incorrect type', () => {

        //Arrange
        const correctFirstParam = "some string here";
        const incorrectSecondParam = "10";
        //Act
        const undefinedResult = lookupChar(correctFirstParam, incorrectSecondParam)
        //Assert
        expect(undefinedResult).to.be.undefined
    })

    it('should return undefined when first parameter is from correct type and second parameter is from incorrect float type', () => {
        //Arrange
        const correctFirstParam = "some string here";
        const incorrectFloatSecondParam = 10.10;
        //Act
        const undefinedResult = lookupChar(correctFirstParam, incorrectFloatSecondParam)
        //Assert
        expect(undefinedResult).to.be.undefined
    })

    it('should return incorrect index when first parameter is from correct type and second parameter is bigger than the string length', () => {
        //Arrange
        const correctFirstParam = "some string here";
        const biggerLengthSecondParam = 20;
        //Act
        const incorrectIndexesult = lookupChar(correctFirstParam, biggerLengthSecondParam)
        //Assert
        expect(incorrectIndexesult).to.be.equal('Incorrect index')
    })

    it('should return incorrect index when first parameter is from correct type and second parameter is lower than the string length', () => {
        //Arrange
        const correctFirstParam = "some string here";
        const lowerLengthSecondParam = 20;
        //Act
        const incorrectIndexesult = lookupChar(correctFirstParam, lowerLengthSecondParam)
        //Assert
        expect(incorrectIndexesult).to.be.equal('Incorrect index')
    })

    it('should return correct index when both the parameters are correct', () => {
        //Arrange
        const correctFirstParam = "some string here";
        const correctSecondParam = 1;
        //Act
        const correctIndexesult = lookupChar(correctFirstParam, correctSecondParam)
        //Assert
        expect(correctIndexesult).to.be.equal('o')
    })
})