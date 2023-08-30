import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { IoLogOutOutline } from 'react-icons/io5'; 
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../utils/shorts-logo.png';


const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href="/">
        <div className='w-[50px] md:w-[70px]'>
          <Image
            className='cursor-pointer'
            src={Logo}
            alt="Logo"
            layout='responsive'
          />
        </div>
      </Link>
    </div>
  )
}

export default Navbar