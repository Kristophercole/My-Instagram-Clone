import Image from 'next/image';
import React from 'react';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

const Header = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        <div
          onClick={() => router.push('/')}
          className='relative hidden w-24 cursor-pointer lg:inline-grid'
        >
          <Image
            src='https://links.papareact.com/ocw'
            fill='true'
            objectFit='contain'
            alt='Intagram'
          />
        </div>
        <div
          onClick={() => router.push('/')}
          className='relative w-10 flex-shrink-0 cursor-pointer lg:hidden'
        >
          <Image
            src='https://links.papareact.com/jjm'
            fill='true'
            objectFit='contain'
            alt='Intagram'
          />
        </div>
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input
              className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
              type='text'
              placeholder='Search'
            />
          </div>
        </div>
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon onClick={() => router.push('/')} className='navBtn' />
          <MenuIcon className='h-6 md:hidden cursor-pointer' />

          {session ? (
            <>
              <div className='relative navBtn'>
                <PaperAirplaneIcon className='navBtn rotate-45 -my-0.5 cursor-not-allowed' />
                <div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>
                  3
                </div>
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className='navBtn'
              />
              <UserGroupIcon className='navBtn cursor-not-allowed' />
              <HeartIcon className='navBtn cursor-not-allowed' />
              <img
                onClick={signOut}
                src={session.user.image}
                alt='Profile Pic'
                className='h-10 w-10 rounded-full cursor-pointer
                '
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
