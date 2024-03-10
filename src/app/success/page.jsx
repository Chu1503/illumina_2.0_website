"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function RegistrationSuccessPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center [background:radial-gradient(150%_150%_at_50%_10%,#000_40%,#4B0082_100%)]">
      <div className="flex flex-col items-center backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white p-10 rounded-lg shadow-xl w-[85vw] sm:w-[45vw]">
        <h2 className="uppercase text-[rgba(1,205,250,255)] text-2xl sm:text-3xl tracking-widest mb-5 text-center">
          Registration Successful!
        </h2>
        <p className="text-lg text-gray-300 mb-5 text-center">
          Thank you for registering. Your account has been successfully created.
        </p>
        <div className="text-center">
          <button
            onClick={() => router.push("/login")}
            className="w-full p-3 text-md rounded-md bg-[rgba(110,50,169,255)] text-[rgb(255,255,255)] hover:bg-[rgba(110,50,169,0.5)]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccessPage;
