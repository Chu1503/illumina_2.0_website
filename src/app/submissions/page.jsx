"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiAddLine } from "react-icons/ri";

function RegistrationSuccessPage() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };

  const [teamMembers, setTeamMembers] = useState(["Team Member 1", "Team Member 2"]);

  const addTeamMember = () => {
    if (teamMembers.length < 5) {
      const newMember = `Team Member ${teamMembers.length + 1}`;
      setTeamMembers([...teamMembers, newMember]);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center [background:radial-gradient(150%_150%_at_50%_10%,#000_40%,#4B0082_100%)]">
      <div className="flex flex-col items-center backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white p-10 rounded-lg shadow-xl w-[85vw] sm:w-[40vw]">
        <h2 className="uppercase text-[rgba(1,205,250,255)] text-2xl sm:text-3xl tracking-widest mb-5 text-center">
          Submission
        </h2>
        {teamMembers.map((member, index) => (
          <input
            key={index}
            type="text"
            placeholder={member}
            className="w-[75vw] sm:w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />
        ))}
        {teamMembers.length < 5 && (
          <div className="w-[75vw] sm:w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500 flex items-center" onClick={addTeamMember}>
            <button className="flex items-center mr-2 focus:outline-none">
              <RiAddLine className="text-gray-400 cursor-pointer" />
              <span className="ml-1">Add Team Member</span>
            </button>
          </div>
        )}
        <input
          type="text"
          placeholder="GitHub Link"
          className="w-[75vw] sm:w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <button
          onClick={handleBack}
          className="p-3 rounded-md bg-[rgba(110,50,169,255)] text-[rgb(255,255,255)] hover:bg-[rgba(110,50,169,0.5)]"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default RegistrationSuccessPage;