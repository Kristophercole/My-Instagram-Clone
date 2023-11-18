import React from 'react';

const Story = ({ img, username }) => {
  return (
    <div>
      <img
        className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain hover:scale-110 transition transform duration-200 ease-out cursor-not-allowed'
        src={img}
        alt='PFP'
      />
      <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  );
};

export default Story;
