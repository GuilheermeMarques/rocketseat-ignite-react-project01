import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Guilherme Marques" 
        content= "Aqui tem uma informação muito bacana"
      />
      <Post 
        author="David Gay" 
        content= "David é um gay muito gente fina"
      />
    </div>
  )
}