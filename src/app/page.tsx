'use client'

import styles from './page.module.css'
import Calculator from '@/app/Calculator'
import { useState } from 'react'

export default function Home() {
    const [isDark, setIsDark] = useState<boolean>(true)

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
            <button
                className={styles.button}
                onClick={() => setIsDark(!isDark)}
            >
                Toggle theme
            </button>
        </div>
    )
}
