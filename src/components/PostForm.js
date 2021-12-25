import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { v4 as uuidv4 } from 'uuid';

const PostForm = ({ propsCreate }) => {
  //-------------------------------------------
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')
  // импутов может быть много чтобы не делать для кадого свой state нужно:

  const [post, setPost] = useState({ title: '', body: '' });

  // второй способ получить value в input
  // с помощью этого хука мы может получить доступ
  // к этому DOM элементу и забрать value
  // const bodyInputRef = useRef()

  const addNewPost = e => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: uuidv4(),
    };

    // setPosts([...posts, {...post, id: uuidv4(),}])
    propsCreate(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <>
      <form>
        {/* {этот компонент называеться управляемым } */}
        <MyInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          // onChange={e => setTitle(e.target.value)}
        />

        <MyInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
        />

        {/* {этот компонент называеться не управляемым или не контролированным ref }
          <MyInput
            у инпута указываем props ref и передаем ссылку
            ref={bodyInputRef}
            type text="text"
            placeholder="Описание поста" /> */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </>
  );
};

export default PostForm;
