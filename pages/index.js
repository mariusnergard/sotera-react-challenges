import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter();

  return (
      <>

          <h1 className={styles.title}>
            Welcome to the
            <br/>
            Sotera React Challenges
          </h1>

          <p className={styles.description}>
            These are the challenges for the React Developer role at Sotera.<br />
            Please complete the challenges below.<br />
            <br />
            Each challenge has it&apos;s own entry point in the <code>pages</code> folder.<br />
          </p>

          <div className={styles.grid}>
            <Link href="/01-array-challenges" className={styles.card}>
              <h2>01 - Array challenges</h2>
              <p>Complete a set of array-based challenges</p>
              <br/>
              <p>File: <code>/pages/01-array-challenges</code></p>
            </Link>

            <Link href="/02-todo-list" className={styles.card}>
              <h2>02 - Todo-list challenge</h2>
              <p>Modify a todo-list to meet the requirements</p>
              <br/>
              <p>File: <code>/pages/02-todo-list</code></p>
            </Link>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>

      </>
  )
}
