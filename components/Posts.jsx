import React from 'react';
import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'Bread Pitt',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore laboriosam consequatur earum illo harum, adipisci tenetur beatae veniam possimus cum cumque at provident tempora nihil molestiae nesciunt eligendi vel.',
  },
  {
    id: '1234',
    username: 'Vladimir Gluten',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolore laboriosam consequatur earum illo harum, adipisci tenetur beatae veniam possimus cum cumque at provident tempora nihil molestiae nesciunt eligendi vel.',
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
