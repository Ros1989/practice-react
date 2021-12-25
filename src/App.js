import React, { useState, useRef } from 'react';
// import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter';
import Input from './components/Input';
import s from './Post.module.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Язык програмирования' },
    {
      id: 2,
      title: 'React.js',
      body: 'Фреймоворк, библиотека для создания пользовательских интерфейсов',
    },
    {
      id: 3,
      title: 'Node.js',
      body: 'Это серверная платформа для работы с JavaScript через движок V8',
    },
  ]);

  //  const [posts2, setPosts2] = useState([
  //   { id: 1, title: 'React Native', body: 'Description' },
  //   { id: 2, title: 'React Native', body: 'Description' },
  //   { id: 3, title: 'React Native', body: 'Description'}
  // ])

  const createPost = newPost => {
    setPosts([...posts, newPost]);
  };

  return (
    <>
      {/* <Counter /> */}
      <ClassCounter />
      <Input />

      <hr className={s.hr} />
      <div className={s.App}>
        <PostForm propsCreate={createPost} />
        <PostList posts={posts} title="Список постов 1" />
        {/* <PostList posts={posts2} title='Список постов 2'/> */}
      </div>
    </>
  );
};

export default App;
