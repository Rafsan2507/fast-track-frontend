'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { logIn, signUp } from '@/services/authServices';
import { setToken } from '@/services/tokenServices';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { FaGoogle, FaLinkedin } from 'react-icons/fa';

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
  confirmPass?: string;
}

interface TabsDemoProps {
  onTabChange: (activeTab: string) => void;
}

export function TabsDemo({ onTabChange }: TabsDemoProps) {
  const router = useRouter();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [logInEmail, setLogInEmail] = useState('');
  const [logInPass, setLogInPass] = useState('');

  const handleTabChange = (tabValue: string) => {
    onTabChange(tabValue);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userInfo = {
      firstname,
      lastname,
      email,
      phone,
      password
    };
    try {
      if (password === confirmPass) {
        const accsessTokenResponse = await signUp(userInfo);
        console.log(accsessTokenResponse.accessToken);
        setToken(accsessTokenResponse.accessToken);
        router.push('/dashboard/interviewdashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogIn = async (e: FormEvent) => {
    e.preventDefault();
    const userSign = {
      email: logInEmail,
      password: logInPass,
    };
    try {
      const accsessTokenResponse = await logIn(userSign);
      console.log(accsessTokenResponse.accessToken);
      setToken(accsessTokenResponse.accessToken);
      router.push('/dashboard/interviewdashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Tabs
      defaultValue="signup"
      className="w-[400px]"
      onValueChange={handleTabChange}
    >
      <TabsList className="bg-[#1a1c1f] grid w-full grid-cols-2">
        <TabsTrigger
          value="signup"
          className="border-b-2 border-solid rounded-[0px] data-[state=active]:border-[#3dd7a1] data-[state=active]:text-[#3dd7a1] data-[state=active]:bg-[#1a1c1f]"
        >
          Signup
        </TabsTrigger>
        <TabsTrigger
          value="login"
          className="border-b-2 border-solid rounded-[0px] data-[state=active]:border-[#3dd7a1] data-[state=active]:text-[#3dd7a1] data-[state=active]:bg-[#1a1c1f]"
        >
          Login
        </TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        <form onSubmit={handleSubmit}>
          <Card className="bg-[#1a1c1f] border-none">
            <CardContent >
              <div className="flex">
                <div className=" mt-4 text-[#b9bdc7]">
                  <Label htmlFor="firstName">First Name </Label>
                  <Input
                    onChange={(e) => setFirstName(e.target.value)}
                    id="firstName"
                    placeholder="First name"
                    className='bg-[#292b2e] border-none'
                    required
                  />
                </div>
                <div className=" mt-4 ml-4 text-[#b9bdc7]">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    onChange={(e) => setLastName(e.target.value)}
                    id="lastName"
                    placeholder="Last name"
                    className='bg-[#292b2e] border-none'
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" mb-4 text-[#b9bdc7]">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="Enter your email address"
                    className='bg-[#292b2e] border-none'
                    required
                  />
                </div>
                <div className=" mb-4 text-[#b9bdc7]">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    onChange={(e) => setPhone(Number(e.target.value))}
                    id="phone"
                    placeholder="Enter your phone number"
                    className='bg-[#292b2e] border-none'
                    required
                  />
                </div>
                <div className=" mb-4 text-[#b9bdc7]">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type='password'
                    placeholder="Enter Password"
                    className='bg-[#292b2e] border-none'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className=" mb-4 text-[#b9bdc7]">
                  <Label htmlFor="confirmPass">Confirm Password</Label>
                  <Input
                    onChange={(e) => setConfirmPass(e.target.value)}
                    id="confirmPass"
                    type='password'
                    placeholder="Confirm password"
                    className='bg-[#292b2e] border-none'
                    required
                  />
                </div>
                <div className="flex justify-center items-start space-x-2 text-sm mb-4 text-[#b9bdc7]">
                  <input type="checkbox" required className="mt-1" />
                  <p>
                    By clicking “Create account”, you accept the terms and
                    conditions given by Fast Track, for the community
                  </p>
                </div>
                <Button type="submit" className='bg-[#3dd7a1] text-[#000000]'>Create Account</Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </TabsContent>
      <TabsContent value="login">
        <form onSubmit={handleLogIn}>
          <Card className="flex flex-col justify-center bg-[#1a1c1f] border-none">
            <CardContent className="m-4">
              <div className="space-y-1 text-[#b9bdc7]">
                <Label className='' htmlFor="email">Email</Label>
                <Input
                  onChange={(e) => setLogInEmail(e.target.value)}
                  id="email"
                  placeholder='john@gmail.com'
                  className='bg-[#292b2e] border-none'
                  required
                />
              </div>
              <div className="text-[#b9bdc7]">
                <Label htmlFor="password">Password</Label>
                <Input
                  onChange={(e) => setLogInPass(e.target.value)}
                  id="password"
                  type='password'
                  placeholder='enter password'
                  className='bg-[#292b2e] border-none'
                  required
                />
              </div>
            </CardContent>
            <div className="flex flex-col m-4">
              <Button type="submit" className='bg-[#3dd7a1] text-[#000000]'>Log in</Button>
              <div className="text-center m-4 text-green-400">
                <a href="#">Forgot Password</a>
              </div>
              <div className="text-center mb-4">or</div>
              <Button className="flex items-center justify-between px-4">
                {' '}
                <FaLinkedin />{' '}
                <span className="w-full ">Log in with LinkedIn</span>
              </Button>
              <br />
              <Button className="flex items-center justify-between px-4">
                <FaGoogle /> <span className="w-full ">Log in with Google</span>
              </Button>
            </div>
          </Card>
        </form>
      </TabsContent>
    </Tabs>
  );
}
