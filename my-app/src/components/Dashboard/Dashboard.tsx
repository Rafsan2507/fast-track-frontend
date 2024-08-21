'use client';
import { Button } from '@/components/ui/button';
import { getCurrentUser } from '@/services/authServices';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CiBookmark, CiBookmarkCheck } from 'react-icons/ci';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { LuArrowDownUp } from 'react-icons/lu';
import { MdDeleteForever, MdOutlineEventNote } from 'react-icons/md';
/* import { Edit } from '../ProposeSession/Edit'; */
import { ProposeButton } from '../ProposeSession/ProposeButton';
import { User } from '../Signup/SignUpTab';
import DashBoardCard from './DashBoardCard';
import Filter from './Filter';
import ProposeSession from './ProposeSession';
import { getProposedSessions, getUsersWithSessions, ProposeSlots } from '@/services/sessionServices';
import moment from 'moment-timezone';

function Dashboard() {
  const currentPath = usePathname();
  const [currentUser, setCurrentUser] = useState<User>();
  const [proposeButton, setProposeButton] = useState(false);
  const [proposeData, setProposeData] = useState<ProposeSlots[]>([]);
  const [getSessionData, setSessionData] = useState<ProposeSlots[]>([]);
  const [startTimeArray, setStartTimeArray] = useState<string[]>([]);

  const [usersWithSessions, setUsersWithSessions] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);

  const fetchUsersWithSessions = async () => {
    try {
      const res = await getUsersWithSessions();
      setUsersWithSessions(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsersWithSessions();
  }, []);
  
  const getSessions = async () => {
    try {
      const result: ProposeSlots[] = await getProposedSessions();
      setSessionData(result);

      setStartTimeArray(result.map((el) => el.startTime).flat());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSessions();
  }, [proposeData]);

  useEffect(() => {
    const currentUserFn = async () => {
      try {
        const curUser = await getCurrentUser();
        setCurrentUser(curUser);
      } catch (error) {
        console.log(error);
      }
    };
    currentUserFn();
  }, []);

  useEffect(() => {
    const filterUsersWithSessions = () => {
      const filtered = usersWithSessions.filter(user => user.UserId && user.UserId.length > 0);
      setFilteredUsers(filtered);
    };
  
    if (usersWithSessions.length > 0) {
      filterUsersWithSessions();
    }
  }, [usersWithSessions]);

  const handleBookSession = (userId: number) => {
    console.log("Booking session for user:", userId);
  };


  return (
    <div className="bg-[#1a1c1f] ">
      <nav className=" bg-[#1a1c1f]">
        <ul className="flex justify-center text-white p-4 border-b-2 border-solid border-[#3f4146] space-x-14  ">
          <li
            className={
              currentPath === '/dashboard/interviewdashboard'
                ? 'bg-[#1b2626] text-[#28c9a1] flex justify-center items-center p-2 rounded-xl'
                : 'flex justify-center items-center  hover:bg-[#222726]   p-2 rounded-xl'
            }
          >
            <CiBookmarkCheck className="mr-2" />
            <Link href="/dashboard/interviewdashboard"> Book sessions</Link>
          </li>
          <li className="flex justify-center items-center  hover:bg-[#222726]   p-2 rounded-xl">
            <CiBookmark className="mr-2" /> <Link href="#"> My sessions </Link>
          </li>
          <li className="flex justify-center items-center  hover:bg-[#222726]   p-2 rounded-xl">
            <MdOutlineEventNote className="mr-2" />
            <Link href="#"> Interview guides </Link>
          </li>
          <li className="flex justify-center items-center  hover:bg-[#222726]   p-2 rounded-xl">
            <LuArrowDownUp className="mr-2" />
            <Link href="#"> My performence </Link>
          </li>
        </ul>
      </nav>

      {!proposeButton ? (
        <div className='h-[100vh]'>
          <div className="m-8 flex flex-col space-y-6 ">
            <div className="text-white text-2xl font-semibold ">
              Welcome {currentUser?.firstname}
              <p className="text-sm font-extralight">
                {' '}
                a brief summary before you book your next session
              </p>
            </div>
            <DashBoardCard />
          </div>

          <div className="flex m-8 bg-[#1a1c1f]  border-t-2 border-solid border-[#3f4146]  text-white">
            <div className="w-[25%] border-r-2 border-[#3f4146]  pr-2">
              <div className="p-2">
                <Filter />
              </div>
            </div>

            <div className="w-screen flex flex-col gap-4 ">
              <ProposeSession setProposeButton={setProposeButton} />
              
              <div className="p-2 flex justify-between border-b-2 border-[#3f4146]">
                <p>Book Session</p>
                <p>{filteredUsers.length} Available sessions</p>
              </div>
              {filteredUsers.length > 0 && (
                  <div className="user-list w-[20vw] ml-[1vw]">
                      {filteredUsers.map(user => (
                        <div
                          key={user.id}
                          className="text-white bg-[#292b2e] rounded-lg flex justify-between p-2 items-center mb-2"
                        >
                          <div>{`${user.firstname} ${user.lastname}`}</div>

                          <div className="w-fit flex items-center">
                            <Button
                              className="bg-[#3dd7a1] text-black"
                              variant="default"
                              onClick={() => handleBookSession(user.userId)}
                            >
                              Book
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="text-white m-20 flex flex-col gap-y-20">
            <Link
              onClick={() => setProposeButton(false)}
              className="flex items-center border-b-2 border-solid border-[#3f4146] pb-4"
              href="/dashboard/interviewdashboard"
            >
              <FaLongArrowAltLeft className="mr-2 text-green-400" /> Back to
              book sessions
            </Link>
          </div>

          <div className="w-full flex justify-center">
            <div className="text-center  flex flex-col gap-4 w-[30vw] ">
              <ProposeButton setProposeData={setProposeData}/>
              <div className="text-white flex justify-between">
                <p>Availabilities ({getSessionData.length})</p>
                <p>{getSessionData.length > 0
                    ? getSessionData[0].timezone
                    : ''}
                </p>
              </div>
              
              {startTimeArray.map((el, index) => {
                const startTime = moment(el);
                const endTime = moment(startTime)
                  .add(1, 'hour')
                  .add(30, 'minutes');
                return (
                  <div
                    key={index}
                    className="text-white bg-[#292b2e] rounded-lg flex justify-between p-4 items-center"
                  >
                    <div>{`${startTime.format('HH:mm')} - ${endTime.format(
                      'HH:mm'
                    )} , ${startTime.format('MMMM DD, YYYY')}`}</div>

                    <div className="w-fit flex items-center">
                      {/* <Edit /> */}
                      <Button
                        className="bg-[[#3f4146]] text-lg"
                        variant="default"
                      >
                        <MdDeleteForever className="w-8 h-5" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

