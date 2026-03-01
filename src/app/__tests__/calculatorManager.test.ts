import { expect, test, describe } from 'vitest'
import { calculate, CalculatorState } from '../calculatorManager'

describe('Calculator Business Logic', () => {
    test('1. + operation', () => {
        const state: CalculatorState = {
            previousValue: '5',
            currentValue: '10',
            operation: '+',
            overwrite: false,
        }
        expect(calculate(state)).toBe('15')
    })

    test('2. - operation', () => {
        const state: CalculatorState = {
            previousValue: '10',
            currentValue: '4',
            operation: '-',
            overwrite: false,
        }
        expect(calculate(state)).toBe('6')
    })

    test('3. * operation', () => {
        const state: CalculatorState = {
            previousValue: '3',
            currentValue: '4',
            operation: '*',
            overwrite: false,
        }
        expect(calculate(state)).toBe('12')
    })

    test('4. / operation', () => {
        const state: CalculatorState = {
            previousValue: '20',
            currentValue: '5',
            operation: '/',
            overwrite: false,
        }
        expect(calculate(state)).toBe('4')
    })

    test('5. Dividing by 0', () => {
        const state: CalculatorState = {
            previousValue: '10',
            currentValue: '0',
            operation: '/',
            overwrite: false,
        }
        expect(calculate(state)).toBe('0')
    })

    test('6. Decimals', () => {
        const state: CalculatorState = {
            previousValue: '1',
            currentValue: '3',
            operation: '/',
            overwrite: false,
        }
        expect(calculate(state)).toBe('0.3333333333')
    })

    test('7. Invalid data input test', () => {
        const state: CalculatorState = {
            previousValue: 'abc',
            currentValue: '5',
            operation: '+',
            overwrite: false,
        }
        expect(calculate(state)).toBe('')
    })
})
