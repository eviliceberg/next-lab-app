'use client'

import styles from './page.module.css'
import Calculator from '@/app/Calculator'
import { useEffect, useState } from 'react'
import posthog from 'posthog-js'

export default function Home() {
    const [isDark, setIsDark] = useState<boolean>(true)
    const state = process.env.NEXT_PUBLIC_APP_STATUS

    const [showAdvanced, setShowAdvanced] = useState(false)

    useEffect(() => {
        posthog.onFeatureFlags(() => {
            if (posthog.isFeatureEnabled('show-advanced-mode')) {
                setShowAdvanced(true)
            }
        })
    }, [])

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

                {showAdvanced && (
                    <button className={styles.button}>
                        Advanced Mode (Beta)
                    </button>
                )}

                <button
                    className={styles.button}
                    onClick={() => {
                        setIsDark(!isDark)
                        posthog.capture('theme_toggled', {
                            theme: !isDark ? 'dark' : 'light',
                        })
                    }}
                >
                    Toggle theme
                </button>
            </div>
        </div>
    )
}
