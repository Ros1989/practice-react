import React, { useState, useMemo } from 'react';
// import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter';
import Input from './components/Input';
import s from './Post.module.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal';
import MyButton from 'components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

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

  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  //  const [posts2, setPosts2] = useState([
  //   { id: 1, title: 'React Native', body: 'Description' },
  //   { id: 2, title: 'React Native', body: 'Description' },
  //   { id: 3, title: 'React Native', body: 'Description'}
  // ])

  // дальше удаляем эти два стейт и пишем
  // const [selectedSort, setSelectedSort] = useState('')
  // const [searchQuery, setSearchQuery] = useState('')

  // function getSortedPosts() {
  //   console.log('Отработала функция СОРТЕД ПОСТОВ')
  //   if (selectedSort) {
  //     return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
  //   }
  //   return posts;
  // }

  // const sortedPosts = getSortedPosts()
  // через useMemo()

  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  //Получаем post из дочернего компонента
  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  // const sortPosts = (sort) => {
  //   setSelectedSort(sort)
  //   console.log(sort)
  // функция localeCompare() сранивает строки при сортировке. Это функция не я придумал, встроеная в js
  // setPosts()

  // }

  return (
    <>
      {/* <Counter /> */}
      {/* <ClassCounter />
      <Input />

      <hr className={s.hr} /> */}
      <div className={s.App}>
        <MyButton onClick={() => setModal(true)}>Создать пользователя</MyButton>
        <MyModal
          style={{ marginTop: '30' }}
          visible={modal}
          setVisible={setModal}
        >
          <PostForm propsCreate={createPost} />
        </MyModal>

        <hr style={{ margin: '15px 0' }} />
        <PostFilter filter={filter} setFilter={setFilter} />

        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Список постов 1"
        />
        {/* // 2.(<PostList remove={removePost} posts={sortedPosts} title="Список постов 1"  />) */}
        {/* // 1. (<PostList remove={removePost} posts={posts}  title="Список постов 1"  />) */}
      </div>
    </>
  );
};

export default App;
