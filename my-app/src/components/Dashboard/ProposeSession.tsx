import { FaPen } from 'react-icons/fa';

type props = {
  setProposeButton: (button: boolean) => void;
};

function ProposeSession({ setProposeButton }: props) {
  return (
    <div className="">
      <div className="p-2 border-b-2 border-[#3f4146]">Proposed Sessions</div>

      <div className="flex justify-between items-center p-4 border-solid rounded-lg bg-[#2f3033] m-4">
    

        <button
          onClick={() => setProposeButton(true)}
          className="bg-[#3dd7a1] text-black rounded-lg p-2 flex items-center justify-center gap-2"
        >
          <FaPen /> propose session
        </button>
      </div>
    </div>
  );
}

export default ProposeSession;
