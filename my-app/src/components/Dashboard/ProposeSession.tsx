import { FaPen } from 'react-icons/fa';

type props = {
  setProposeButton: (button: boolean) => void;
};

function ProposeSession({ setProposeButton }: props) {
  return (
    <div className="">
      <div className="flex justify-between items-center border-solid rounded-lg bg-[#2f3033]">
        <button
          onClick={() => setProposeButton(true)}
          className="bg-[#3dd7a1] text-black font-medium rounded-lg p-2 flex items-center justify-center gap-2"
        >
         Propose Session
        </button>
      </div>
    </div>
  );
}

export default ProposeSession;
