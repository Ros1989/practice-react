import React from 'react';
import MyButton from './UI/button/MyButton';
import s from '../Post.module.css';

const PostItem = props => {
  const { title, body } = props.post;
  return (
    <>
      <div className={s.post}>
        <div className="post__content">
          <strong>
            {props.number}. {title}
          </strong>
          <p> {body}</p>
        </div>
        <div className="post__btn">
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    </>
  );
};

export default PostItem;
