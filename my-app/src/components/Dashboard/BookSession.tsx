'use client'
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLongArrowAltLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import { format, addDays, subDays, addMinutes } from 'date-fns';
import { getProfileWithSessions } from '@/services/bookSessionServices';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

const BookSession = () => {
  const [profileWithSession, setProfileWithSessions] = useState<any[]>([]);
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(null);

  const fetchUsersWithSessions = async () => {
    try {
      const result = await getProfileWithSessions(Number(id));
      setProfileWithSessions(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsersWithSessions();
  }, []);

  const handlePreviousDate = () => {
    setSelectedDate((prevDate) => subDays(prevDate, 1));
  };

  const handleNextDate = () => {
    setSelectedDate((prevDate) => addDays(prevDate, 1));
  };

  const sessionsForSelectedDate = profileWithSession[0]?.UserId?.filter(
    (session: any) => format(new Date(session.startTime), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  );

  const handleSessionClick = (sessionId: number) => {
    if (selectedSessionId === sessionId) {
      setSelectedSessionId(null);
    } else {
      setSelectedSessionId(sessionId);
    }
  };

  return (
    <div className="bg-[#1a1c1f] flex flex-col p-8">
      <Link
        className="flex items-center text-white mb-4"
        href="/dashboard/interviewdashboard"
      >
        <FaLongArrowAltLeft className="mr-2 text-green-400" /> Back to book sessions
      </Link>

      {profileWithSession.length > 0 && (
        <div className="flex flex-col lg:flex-row space-x-[50vw]">
          <Card className="bg-[#1a1c1f] text-white p-4 border-none">
            <CardHeader>
              <CardTitle className="text-xl">
                {profileWithSession[0].firstname} {profileWithSession[0].lastname}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Email: {profileWithSession[0].email}</p>
              <p>Phone: {profileWithSession[0].phone}</p>
            </CardContent>
          </Card>

          <div className="bg-[#2f3033] flex flex-col items-center">
            <div className="flex items-center space-x-4">
              <button onClick={handlePreviousDate} className="text-white">
                <FaChevronLeft />
              </button>
              <div className="text-white text-xl">
                {format(selectedDate, 'yyyy-MM-dd')}
              </div>
              <button onClick={handleNextDate} className="text-white">
                <FaChevronRight />
              </button>
            </div>

            {sessionsForSelectedDate?.length > 0 ? (
              sessionsForSelectedDate.map((session: any) => (
                <div
                  key={session.id}
                  onClick={() => handleSessionClick(session.id)}
                  className={`text-white mt-4 p-4 rounded-full w-full text-center cursor-pointer ${
                    selectedSessionId === session.id ? 'bg-[#3dd7a1]' : ''
                  }`}
                >
                  <p>
                    Time: {format(new Date(session.startTime), 'HH:mm')} -{' '}
                    {format(new Date(addMinutes(session.startTime, 90)), 'HH:mm')}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-white mt-4">No sessions available</div>
            )}
            <div className="w-fit items-center mt-[5vh]">
              <Button
                className="bg-[#3dd7a1] text-black font-medium"
                variant="default"
                disabled={!selectedSessionId}
              >
                Book Session
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSession;