import React from 'react';
import PostItem from './PostItem.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <p
        style={{
          textTransform: 'uppercase',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '10px',
          marginTop: '40px',
        }}
      >
        Нет постов
      </p>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              remove={remove}
              number={index + 1}
              post={post}
              // key={post.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
