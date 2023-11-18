import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';
import { useSession } from 'next-auth/react';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const { data: session } = useSession();

  function createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      // email: faker.internet.email(),
      // password: faker.internet.password(),
      // registeredAt: faker.date.past(),
    };
  }

  useEffect(() => {
    const users = faker.helpers.multiple(createRandomUser, {
      count: 20,
    });
    setStories(users);
  }, []);

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-scroll scrollbar-thin scrollbar-thumb-black'>
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {stories.map((profile) => (
        <Story
          key={profile.userId}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
