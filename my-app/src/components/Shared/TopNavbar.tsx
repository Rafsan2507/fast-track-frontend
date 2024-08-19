'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CgProfile } from 'react-icons/cg';
import { IoIosNotificationsOutline } from 'react-icons/io';
import logo from '../../assets/MainLogo.922b47d5ad750ac0bb04ed7fa93f0ab7.svg';

const TopNavbar = () => {
  const currentPath = usePathname();
  return (
    <nav className="bg-[#1a1c1f] text-white p-4 border-b-2 border-solid border-[#3f4146]">
      <div className=" mx-auto flex justify-between items-center">
        {/* <Link href="/" className="text-xl font-semibold ml-8">
          fast_track
        </Link> */}
        <Image
          className="w-[128px] h-[28px] object-cover"
          src={logo}
          alt="logo"
          // height={28}
          // width={128}
        ></Image>

        <ul className="flex space-x-10">
          <li className="hover:text-[#3EF194]">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#3EF194]">
            <Link href="/study">Study</Link>
          </li>
          <li className="hover:text-[#3EF194]">
            <Link
              href="/interviewdashboard/dashboard"
              className={
                currentPath === '/interviewdashboard/dashboard'
                  ? 'text-[#3EF194]'
                  : ''
              }
            >
              Interview
            </Link>
          </li>
          <li className="hover:text-[#3EF194]">
            <Link href="/network">Network</Link>
          </li>
          <li className="hover:text-[#3EF194]">
            <Link href="/forum">Forum</Link>
          </li>
          <li className="hover:text-[#3EF194]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4 mr-2">
          <button>
            <IoIosNotificationsOutline className="text-2xl " />
          </button>
          <button>
            <CgProfile className="text-2xl" />{' '}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
