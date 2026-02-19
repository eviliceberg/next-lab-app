import styles from './page.module.css'
import Calculator from '@/app/Calculator'

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Calculator />
            </main>
            <h3>Some changes</h3>
        </div>
    )
}
