import { sum } from "../unit-testing-js/01.js";
import { mathEnforcer } from "./mathEnforcer.js";
import { expect } from "chai";

describe('mathEnforcer', () => {
    describe('addFive',() => {

        it('should return undefined when pass string as input', () => {

            //Arrange
            const stringInput = 'someString'
            //Act
            const undefinedResult = mathEnforcer.addFive(stringInput)
            //Assert
            expect(undefinedResult).to.be.undefined
        })

        it('should return undefined when pass undefined as inut', () => {

            //Arrange
            const undefinedInput = undefined
            //Act
            const undefinedResult = mathEnforcer.addFive(undefinedInput)
            //Assert
            expect(undefinedResult).to.be.undefined
            
        })
    
        it('should return undefined when pass number as a string as inut', () => {

            //Arrange
            const numberAsStringInput = '5'
            //Act
            const undefinedResult = mathEnforcer.addFive(numberAsStringInput)
            //Assert
            expect(undefinedResult).to.be.undefined
        })
    
        it('should return correct result when pass floating number as input and assert with closeTo ', () => {

            //Arrange
            const floatingInput = 1.01
            //Act
            const correctrResult = mathEnforcer.addFive(floatingInput)
            //Assert
            expect(correctrResult).to.be.closeTo(6.01, 0.01)
        })

        it('should return correct result when pass floating number as input and assert with equal', () => {

            //Arrange
            const floatingInput = 1.01
            //Act
            const correctrResult = mathEnforcer.addFive(floatingInput)
            //Assert
            expect(correctrResult).to.be.equal(6.01)
        })

        it('should return correct result when pass floating number with a lot of digits as input and assert with closeTo', () => {

            //Arrange
            const floatingInput = 1.000001
            //Act
            const correctrResult = mathEnforcer.addFive(floatingInput)
            //Assert
            expect(correctrResult).to.be.closeTo(6.01, 0.01)
        })

        it('should return correct when pass number as inut', () => {

            //Arrange
            const numberInput = 5
            //Act
            const correctResult = mathEnforcer.addFive(numberInput)
            //Assert
            expect(correctResult).to.be.equal(10)
        })

        it('should return correct when pass negative number as inut', () => {

            //Arrange
            const negativeNumberInput = -15
            //Act
            const correctResult = mathEnforcer.addFive(negativeNumberInput)
            //Assert
            expect(correctResult).to.be.equal(-10)
        })

        it('should return correct when pass boundary negative number as inut', () => {

            //Arrange
            const negativeNumberInput = -5
            //Act
            const correctResult = mathEnforcer.addFive(negativeNumberInput)
            //Assert
            expect(correctResult).to.be.equal(0)
        })

    })

    describe('substractTen',() => {

        it('should return undefined when pass string as input', () => {

            //Arrange
            const stringInput = 'someString'
            //Act
            const undefinedResult = mathEnforcer.subtractTen(stringInput)
            //Assert
            expect(undefinedResult).to.be.undefined
        })

        it('should return undefined when pass undefined as inut', () => {

            //Arrange
            const undefinedInput = undefined
            //Act
            const undefinedResult = mathEnforcer.subtractTen(undefinedInput)
            //Assert
            expect(undefinedResult).to.be.undefined
            
        })
    
        it('should return undefined when pass number as a string as inut', () => {

            //Arrange
            const numberAsStringInput = '5'
            //Act
            const undefinedResult = mathEnforcer.subtractTen(numberAsStringInput)
            //Assert
            expect(undefinedResult).to.be.undefined
        })
    
        it('should return correct result when pass floating number as input and assert with closeTo ', () => {

            //Arrange
            const floatingInput = 11.01
            //Act
            const correctrResult = mathEnforcer.subtractTen(floatingInput)
            //Assert
            expect(correctrResult).to.be.closeTo(1.01, 0.01)
        })

        it('should return correct result when pass floating number as input and assert with equal', () => {

            //Arrange
            const floatingInput = 20.01
            //Act
            const correctrResult = mathEnforcer.subtractTen(floatingInput)
            //Assert
            expect(correctrResult).to.be.equal(10.01)
        })

        it('should return correct result when pass floating number with a lot of digits as input and assert with closeTo', () => {

            //Arrange
            const floatingInput = 11.000001
            //Act
            const correctrResult = mathEnforcer.subtractTen(floatingInput)
            //Assert
            expect(correctrResult).to.be.closeTo(1.01, 0.01)
        })

        it('should return correct when pass number as inut', () => {

            //Arrange
            const numberInput = 11
            //Act
            const correctResult = mathEnforcer.subtractTen(numberInput)
            //Assert
            expect(correctResult).to.be.equal(1)
        })

        it('should return correct when pass negative number as inut', () => {

            //Arrange
            const negativeNumberInput = -15
            //Act
            const correctResult = mathEnforcer.subtractTen(negativeNumberInput)
            //Assert
            expect(correctResult).to.be.equal(-25)
        })

        it('should return correct when pass boundary negative number as inut', () => {

            //Arrange
            const negativeNumberInput = 10
            //Act
            const correctResult = mathEnforcer.subtractTen(negativeNumberInput)
            //Assert
            expect(correctResult).to.be.equal(0)
        })
    })

    describe('sum',() => {

        it('should return undefined when Param1: incorrect and Param2: correct', () => {
            //Arrange
            const incorrectFirstParam = 'smthng'
            const correctSecondParam = 5
            //Act
            const undefinedResult = mathEnforcer.sum(incorrectFirstParam, correctSecondParam)
            //Assert
            expect(undefinedResult).to.be.undefined
        })

        it('should return undefined when Param1: correct and Param2: incorrect', () => {
            //Arrange
            const correctFirstParam = 5
            const incorrectSecondParam = 'smthng'
            //Act
            const undefinedResult = mathEnforcer.sum(correctFirstParam, incorrectSecondParam)
            //Assert
            expect(undefinedResult).to.be.undefined
        })

        it('should return undefined when Param1: number as string and Param2: correct', () => {
            //Arrange
            const incorrectcorrectFirstParam = '5'
            const correctSecondParam = 5
            //Act
            const undefinedResult = mathEnforcer.sum(incorrectcorrectFirstParam, correctSecondParam)
            //Assert
            expect(undefinedResult).to.be.undefined
        })

        it('should return correct result when Param1: correct and Param2: correct', () => {
            //Arrange
            const correctcorrectFirstParam = 5
            const correctSecondParam = 5
            //Act
            const correctResult = mathEnforcer.sum(correctcorrectFirstParam, correctSecondParam)
            //Assert
            expect(correctResult).to.be.equal(10)
        })

        it('should return correct result when Param1: negative number and Param2: negative number', () => {
            //Arrange
            const correctcorrectFirstParam = -5
            const correctSecondParam = -5
            //Act
            const correctResult = mathEnforcer.sum(correctcorrectFirstParam, correctSecondParam)
            //Assert
            expect(correctResult).to.be.equal(-10)
        })

        it('should return correct result when Param1: float number and Param2: negative number and assert with closeTo', () => {
            //Arrange
            const floatFirstParam = 5.01
            const correctSecondParam = 5
            //Act
            const correctResult = mathEnforcer.sum(floatFirstParam, correctSecondParam)
            //Assert
            expect(correctResult).to.be.closeTo(10.01, 0.01)
        })

        it('should return correct result when Param1: float number and Param2: negative number and assert with equal', () => {
            //Arrange
            const floatFirstParam = 5.01
            const correctSecondParam = 5
            //Act
            const correctResult = mathEnforcer.sum(floatFirstParam, correctSecondParam)
            //Assert
            expect(correctResult).to.be.equal(10.01)
        })
    })

})