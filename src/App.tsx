import { Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import {PostType} from "./components/Post";


import styles from "./App.module.css";

import './global.css';

// author: {avatar_url: "". name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [

  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Vinicius-Alberto.png",
      name: "Vinicius",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Boa tarde" }, // Use "paragraph" diretamente
      { type: "paragraph", content: "Mais um post criado para o portfólio." },       
      { type: "link", content: "hiperlink.com" }, // Use "link" diretamente
    ],
    publishedAt: new Date("2022-05-03 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSCMqiEWkLEHDa9XvjoTBPb-M73OZ5sR_7TEoEOXHn7LB7E1gDf",
      name: "Jane Doe",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "🌟 Dê um passo a mais hoje! 🌟" },
      { type: "paragraph", content: "Cada novo dia é uma oportunidade para avançar rumo aos seus objetivos." },       
      { type: "link", content: "generico.com" },
    ],
    publishedAt: new Date("2024-05-10 20:30:00")
  }
];


export function App() {
  return (
   <div>
    <Header></Header>
    <div className ={styles.wrapper}>
      <Sidebar></Sidebar>
      <main>
        {posts.map(post => {
          return (
          <Post
            key={post.id}
            post={post}
          />
          )
        })}
      </main>
      </div>
   </div>
  )
}




export default App
