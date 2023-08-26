// import Link from "next/link";
// import Image from "next/image";
// import React from 'react'
// import CustomButton from "./CustomButton";
// import { useSession, signOut } from "next-auth/react";
// import { usePathname } from "next/navigation";

// type NavLink = {
//   label: string;
//   href: string;
// };
// type Props = {
//   navLinks: NavLink[];
// };


// const NavBar = ({ navLinks }: Props) => {
//   const pathname = usePathname();
//   const session = useSession();

//   console.log(session);

//   return (
//     <>
       
      
//   <header className='w-full  absolute z-10'>
//     <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
//       <Link href='/' className='flex justify-center items-center'>
//         <Image
//           src="/car-logo.png"
//           alt='logo'
//           width={118}
//           height={14}
//           className='object-contain'
//         />
//           </Link>  {navLinks.map((link) => {
//         const isActive = pathname === link.href;
//         return (
//           <Link
//             key={link.label}
//             href={link.href}
//             className={isActive ? "active" : ""}
//           >
//             {link.label}
//           </Link>
//         );
//          })}     {session?.data && <Link href="/profile">Profile</Link>}
//          {session?.data ? (
//                   <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
//                   Sign Out
//                 </Link>
//               ) : (
// <Link href='/signin' className='flex justify-center items-center'>
//       <CustomButton
//         title='Sign In'
//         btnType='button'
//         containerStyles='text-primary-blue rounded-full bg-white text-xl min-w-[130px]'
//       /></Link>      )}
//   </nav>
//       </header>
//       </>
//   );
// };
// export default NavBar;import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import CustomButton from './CustomButton';


type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const NavBar = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const session = useSession();

  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/car-logo.png'
            alt='logo'
            width={118}
            height={14}
            className='object-contain'
          />
        </Link>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={isActive ? 'active' : ''}
            >
              {link.label}
            </Link>
          );
        })}
        {session?.data && <Link href='/profile'>Profile</Link>}
        {session?.data ? (
          <Link href='#' onClick={() => signOut({ callbackUrl: '/' })}>
            Sign Out
          </Link>
        ) : (
          <Link href='/signin' className='flex justify-center items-center'>
            <CustomButton
              title='Sign In'
              btnType='button'
              containerStyles='text-primary-blue rounded-full bg-white text-xl min-w-[130px]'
            />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default NavBar;


