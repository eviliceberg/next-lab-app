import { test, expect } from '@playwright/test'

test.describe('Calculator Next.js E2E', () => {
    test('Успішне обчислення та зміна теми', async ({ page }) => {
        await page.goto('http://localhost:3000/')

        await page.click('button:has-text("7")')
        await page.click('button:has-text("+")')
        await page.click('button:has-text("8")')
        await page.click('button:has-text("=")')

        const display = page.locator('.displayArea')
        await expect(page.getByText('15')).toBeVisible()

        const themeToggleBtn = page.locator('button', {
            hasText: 'Toggle theme',
        })
        await themeToggleBtn.click()
    })
})
