import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Guilherme Marques" 
          content= "Aqui tem uma informação muito bacana"
        />
        <Post 
          author="David Gay" 
          content= "David é um gay muito gente fina"
        />
        </main>
      </div>
    </div>
  )
}