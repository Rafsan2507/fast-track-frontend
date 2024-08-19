import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CiWallet } from 'react-icons/ci';
import {
  FaBookReader,
  FaRegArrowAltCircleDown,
  FaRegStar,
} from 'react-icons/fa';
import { SiTicktick } from 'react-icons/si';

function DashBoardCard() {
  return (
    <div className="text-white font-extralight text-sm flex gap-4">
      <div className="flex flex-col bg-[#2f3033] w-[50%] items-center p-5 rounded-lg ">
        <div className="flex p-2 justify-between w-full">
          <p>Overall performance rating</p>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-[#2f3033] p-1.5 rounded-lg flex items-center border-solid border-2 ">
                  Overall <FaRegArrowAltCircleDown className="m-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1c1f] text-white">
                <DropdownMenuItem>Presence</DropdownMenuItem>
                <DropdownMenuItem>Communication skills</DropdownMenuItem>
                <DropdownMenuItem>Fit questions</DropdownMenuItem>
                <DropdownMenuItem>Technical questions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div
          className="flex justify-center items-center "
          style={{ width: 150, height: 150 }}
        >
          <CircularProgressbar value={0} />
        </div>
      </div>
      <div className="w-[50%] grid  grid-cols-2 gap-4 ">
        <div className="flex flex-col bg-[#2f3033] p-2 gap-2 justify-between ">
          <FaBookReader className="text-green-400" />
          <p>Sessions taken</p>
          <p className="text-xl font-semibold">5</p>
        </div>
        <div className="flex flex-col bg-[#2f3033] p-2 gap-2 justify-between">
          <div className="flex justify-between">
            <CiWallet className="text-green-400" />
            <Link className="text-xs text-green-400" href="#">
              Buy sessions
            </Link>
          </div>

          <p>Available sessions</p>
          <p className="text-xl font-semibold">14</p>
        </div>
        <div className="flex flex-col bg-[#2f3033] p-2 gap-2 justify-between">
          <FaRegStar className="text-green-400" />
          <p>Average rating</p>
          <p className="text-xl font-semibold">4</p>
        </div>
        <div className="flex flex-col bg-[#2f3033] p-2 gap-2 justify-between">
          <SiTicktick className="text-green-400" />
          <p>Reliability</p>
          <p className="text-xl font-semibold">10%</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoardCard;
