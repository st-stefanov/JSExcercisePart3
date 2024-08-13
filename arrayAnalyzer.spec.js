import { expect } from "chai"
import { analyzeArray } from "./arrayAnalyzer.js"

describe ('analyzeArray', () => {

   it('should return undefined when pass non array as input', () => {

    const nonArrayInput = 'someString'

    const undefinedResult = analyzeArray(nonArrayInput)

    expect(undefinedResult).to.be.undefined
   })

   it('should return undefined when pass empty array as input', () => {

    const emptyArrayInput = []

    const undefinedResult = analyzeArray(emptyArrayInput)

    expect(undefinedResult).to.be.undefined
   })

   it('should return coorect result when pass array with different numbers as input', () => {

    const correctArrayInput = [3, 4, 5, -11, 10]

    const correctResult = analyzeArray(correctArrayInput)

    expect(correctResult).to.deep.equal({min: -11, max: 10, length: 5})
   })

   it('should return coorect result when pass array with single element as input', () => {

    const correctArrayInput = [3]

    const correctResult = analyzeArray(correctArrayInput)

    expect(correctResult).to.deep.equal({min: 3, max: 3, length: 1})
   })

   it('should return coorect result when pass array with same elements as input', () => {

    const correctArrayInput = [3, 3, 3, 3, 3]

    const correctResult = analyzeArray(correctArrayInput)

    expect(correctResult).to.deep.equal({min: 3, max: 3, length: 5})
   })

   
})