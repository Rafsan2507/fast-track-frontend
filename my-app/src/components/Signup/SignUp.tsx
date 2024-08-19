'use client';
import Image from 'next/image';
import { useState } from 'react';
import mainlogo from '../../assets/MainLogo.922b47d5ad750ac0bb04ed7fa93f0ab7.svg';
import { TabsDemo } from './SignUpTab';


function SignUp() {
  const [activeTab, setActiveTab] = useState('signup');

  const handleTabChange = (tabValue: string) => {
    setActiveTab(tabValue);
  };

  return (
    <div className="bg-[#1a1c1f] h-[100vh] flex flex-col">
      <div className="bg-[#1a1c1f] flex justify-center">
        <Image src={mainlogo} alt="logo" height={32} width={132} />
      </div>
      <div className="flex justify-center flex-col items-center">
        {activeTab === 'signup' ? (
          <p className="text-white mb-[5vh] text-xl">
            create a fast_track account
          </p>
        ) : (
          <p className="text-white mb-[5vh] text-xl">
            Log into your fast_track account
          </p>
        )}
        <TabsDemo onTabChange={handleTabChange} />
      </div>
    </div>
  );
}

export default SignUp;