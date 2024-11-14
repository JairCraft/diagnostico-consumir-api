import { Suspense } from 'react';
import fetchData from './fetchData.js'
import styles from "./page.module.css";

const data = fetchData("https://v2.jokeapi.dev/joke/Any?lang=es&type=single")

export default function Home() {
  const readData = data.read()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <Suspense fallback={<div>Cargando...</div>}>
            <a>
              La broma es {readData.joke}
            </a>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
