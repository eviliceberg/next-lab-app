'use client'
import posthog from 'posthog-js'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY

    useEffect(() => {
        if (apiKey) {
            posthog.init(apiKey, {
                api_host: '/ingest',
                person_profiles: 'identified_only',
            })
        }
    }, [])

    return <>{children}</>
}
