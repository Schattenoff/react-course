import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', desc: 'Javascript - это язык программирования'},
    {id: 2, title: 'JavaScript 2', desc: 'Javascript - это язык программирования'},
    {id: 3, title: 'JavaScript 3', desc: 'Javascript - это язык программирования'},
  ])  

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length
      ? <PostList remove={removePost} posts={posts} title="Посты про JS"/>
      : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
