"use client"

import useFetch from './useFetch.js'
import styles from "./page.module.css";

export default function Home() {

  const { data, loading } = useFetch("https://v2.jokeapi.dev/joke/Any?lang=es&type=single")

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          {loading && <a>Cargando...</a>}
          <a>
            La broma es {data?.joke}
          </a>
        </div>
      </main>
    </div>
  );
}
