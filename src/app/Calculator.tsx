'use client'

import React, { useState } from 'react'
import { calculate, Operation, CalculatorState } from './calculatorManager'
import s from './page.module.css'

const Calculator: React.FC = () => {
    const [state, setState] = useState<CalculatorState>({
        currentValue: '0',
        previousValue: '',
        operation: null,
        overwrite: false,
    })

    const handleNumber = (num: string) => {
        if (state.currentValue.includes('.') && num === '.') return

        setState((prev) => ({
            ...prev,
            currentValue:
                prev.currentValue === '0' || prev.overwrite
                    ? num
                    : prev.currentValue + num,
            overwrite: false,
        }))
    }

    const handleOperation = (op: Operation) => {
        if (state.previousValue && state.operation) {
            const result = calculate(state)
            setState({
                previousValue: result,
                operation: op,
                currentValue: '0', // Показуємо 0 поки вводимо нове число
                overwrite: true,
            })
        } else {
            setState((prev) => ({
                ...prev,
                operation: op,
                previousValue: prev.currentValue,
                overwrite: true,
            }))
        }
    }

    const handleEquals = () => {
        if (!state.operation) return
        const result = calculate(state)
        setState({
            currentValue: result,
            previousValue: '',
            operation: null,
            overwrite: true,
        })
    }

    const clear = () =>
        setState({
            currentValue: '0',
            previousValue: '',
            operation: null,
            overwrite: false,
        })

    const cx = (...classes: string[]) => classes.join(' ')

    return (
        <div className={s.calculatorCard}>
            <div className={s.displayArea}>
                {state.operation && state.previousValue && (
                    <div
                        style={{
                            fontSize: '1rem',
                            opacity: 0.6,
                            marginBottom: '0.2rem',
                        }}
                    >
                        {state.previousValue} {state.operation}
                    </div>
                )}
                {state.currentValue}
            </div>

            <div className={s.buttonGrid}>
                <button
                    onClick={clear}
                    className={cx(s.btn, s.btnLight, s.spanThree)}
                >
                    AC
                </button>
                <button
                    onClick={() => handleOperation('/')}
                    className={cx(s.btn, s.btnAccent)}
                >
                    /
                </button>

                <button
                    onClick={() => handleNumber('7')}
                    className={cx(s.btn, s.btnDark)}
                >
                    7
                </button>
                <button
                    onClick={() => handleNumber('8')}
                    className={cx(s.btn, s.btnDark)}
                >
                    8
                </button>
                <button
                    onClick={() => handleNumber('9')}
                    className={cx(s.btn, s.btnDark)}
                >
                    9
                </button>
                <button
                    onClick={() => handleOperation('*')}
                    className={cx(s.btn, s.btnAccent)}
                >
                    *
                </button>

                <button
                    onClick={() => handleNumber('4')}
                    className={cx(s.btn, s.btnDark)}
                >
                    4
                </button>
                <button
                    onClick={() => handleNumber('5')}
                    className={cx(s.btn, s.btnDark)}
                >
                    5
                </button>
                <button
                    onClick={() => handleNumber('6')}
                    className={cx(s.btn, s.btnDark)}
                >
                    6
                </button>
                <button
                    onClick={() => handleOperation('-')}
                    className={cx(s.btn, s.btnAccent)}
                >
                    -
                </button>

                <button
                    onClick={() => handleNumber('1')}
                    className={cx(s.btn, s.btnDark)}
                >
                    1
                </button>
                <button
                    onClick={() => handleNumber('2')}
                    className={cx(s.btn, s.btnDark)}
                >
                    2
                </button>
                <button
                    onClick={() => handleNumber('3')}
                    className={cx(s.btn, s.btnDark)}
                >
                    3
                </button>
                <button
                    onClick={() => handleOperation('+')}
                    className={cx(s.btn, s.btnAccent)}
                >
                    +
                </button>

                <button
                    onClick={() => handleNumber('0')}
                    className={cx(s.btn, s.btnDark, s.spanTwo)}
                >
                    0
                </button>
                <button
                    onClick={() => handleNumber('.')}
                    className={cx(s.btn, s.btnDark)}
                >
                    .
                </button>
                <button
                    onClick={handleEquals}
                    className={cx(s.btn, s.btnEquals)}
                >
                    =
                </button>
            </div>
        </div>
    )
}

export default Calculator
