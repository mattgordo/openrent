import { Header } from './components/Header/Header'
import { SearchHeader } from './components/SearchHeader/SearchHeader'
import { SearchResults } from './components/SearchResults/SearchResults'

import styles from './App.module.scss'

function App() {

  return (<>
    <Header />
    <SearchHeader />
    <main className={styles.main}>
      <SearchResults />
    </main>
  </>)
}

export default App
