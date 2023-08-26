import Link from "next/link";
import Image from "next/image";
import React from 'react'
import CustomButton from "./CustomButton";



const NavBar = () => (

  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src="/car-logo.png"
          alt='logo'
          width={118}
          height={14}
          className='object-contain'
        /><h1 style={{ color: "#4682B4", font: }}>HUB</h1>
      </Link>
<Link href='/contact' className='flex justify-center items-center'>
      <CustomButton
        title='Contact Us'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      /></Link>
    </nav>
  </header>
);

export default NavBar;