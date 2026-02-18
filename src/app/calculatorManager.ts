export type Operation = '+' | '-' | '*' | '/' | null

export interface CalculatorState {
    currentValue: string
    previousValue: string
    operation: Operation
    overwrite: boolean
}

export const calculate = (state: CalculatorState): string => {
    const prev = parseFloat(state.previousValue)
    const current = parseFloat(state.currentValue)

    if (isNaN(prev) || isNaN(current)) return ''

    let result = 0
    switch (state.operation) {
        case '+':
            result = prev + current
            break
        case '-':
            result = prev - current
            break
        case '*':
            result = prev * current
            break
        case '/':
            result = current === 0 ? 0 : prev / current
            break
        default:
            return state.currentValue
    }

    return parseFloat(result.toFixed(10)).toString()
}
