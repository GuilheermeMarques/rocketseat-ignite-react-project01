import { Post } from './Post'

export function App() {

  return (
    <div>
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