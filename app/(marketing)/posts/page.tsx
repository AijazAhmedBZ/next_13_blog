'use client';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function Posts() {
    const router = useRouter();
    return (
        <main className={styles.main}>
            <div className={styles.center}><h1>Post</h1></div>
            <Link href="/">← Back to Home</Link>

        {/* <button onClick={() => router.push('/')}>
            Back to Home
        </button> */}

        </main >
    )
}
