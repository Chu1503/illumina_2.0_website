'use client'
import { useState } from 'react';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const router = useRouter()

  const handleLogin = async () => {
    try {
        const res = await signInWithEmailAndPassword(email, password);
        console.log({res});
        sessionStorage.getItem('user', true)
        setEmail('');
        setPassword('');
        router.push('/submissions')
    }catch(e){
        console.error(e)
    }
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center [background:radial-gradient(150%_150%_at_50%_10%,#000_40%,#4B0082_100%)]">
      <div className="flex flex-col items-center backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white p-10 rounded-lg shadow-xl w-[85vw] sm:w-[25vw]">
        <h1 className="uppercase text-[rgba(1,205,250,255)] text-4xl sm:text-5xl tracking-widest mb-5">Login</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-[75vw] sm:w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <div className="relative flex flex-col items-center w-[75vw] sm:w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[75vw] sm:w-full p-3 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {showPassword ? (
              <RiEyeOffFill
                onClick={togglePasswordVisibility}
                className="text-gray-400 cursor-pointer"
              />
            ) : (
              <RiEyeFill
                onClick={togglePasswordVisibility}
                className="text-gray-400 cursor-pointer"
              />
            )}
          </div>
        </div>
        <button 
          onClick={handleLogin}
          className="w-[75vw] sm:w-full mt-5 p-3 rounded-md bg-[rgba(110,50,169,255)] text-[rgb(255,255,255)] hover:bg-[rgba(110,50,169,0.5)]"
        >
          Submit
        </button>
        <div className="text-[rgb(255,255,255)] mt-5">
          Don't have an account?{" "}
          <button
            className="hover:text-[rgb(255,255,255)] text-[rgba(1,205,250,255)]"
            onClick={() => router.push("/register")}
          >
            Register Now
          </button>
        </div>
        <button
          onClick={handleBack}
          className="mt-5 p-3 rounded-md bg-[rgba(110,50,169,255)] text-[rgb(255,255,255)] hover:bg-[rgba(110,50,169,0.5)]"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;