'use client'

import styles from './page.module.css'
import Calculator from '@/app/Calculator'
import { useState } from 'react'

export default function Home() {
    const [isDark, setIsDark] = useState<boolean>(true)
    const state = process.env.NEXT_PUBLIC_APP_STATUS
    return (
        <div
            style={{
                backgroundColor: isDark ? 'black' : 'lightgrey',
                transition: 'all 0.3s ease',
            }}
            className={styles.page}
        >
            <main className={styles.main}>
                <Calculator />
            </main>
            <div
                style={{
                    flexDirection: 'column',
                    display: 'flex',
                    gap: '20px',
                }}
            >
                <h3 style={{ color: isDark ? 'lightgrey' : 'black' }}>
                    {state}
                </h3>

                <button
                    className={styles.button}
                    onClick={() => setIsDark(!isDark)}
                >
                    Toggle theme
                </button>
            </div>
        </div>
    )
}
