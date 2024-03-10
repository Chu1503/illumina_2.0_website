"use client";
import { useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, database } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { push, ref, set } from "firebase/database";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teamName, setTeamName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [teamNameError, setTeamNameError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {
    if (user) {
      router.push("/success");
    }
  }, [user, router]);

  const handleRegister = async () => {
    if (!name) {
      setNameError("Name is required.");
      return;
    } else {
      setNameError("");
    }

    if (!teamName) {
      setTeamNameError("Team name is required.");
      return;
    } else {
      setTeamNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    } else {
      setPasswordError("");
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);

      const usersRef = ref(database, "users");
      const newDataRef = push(usersRef);

      const userData = {
        name: name,
        email: email,
        teamName: teamName,
      };

      await set(newDataRef, userData);

      console.log("Data stored successfully in the database.");
      sessionStorage.setItem("user", true);
      setEmail("");
      setPassword("");
      setName("");
      setTeamName("");
    } catch (error) {
      console.error("Error storing data in the database:", error);
      alert("An error occurred while storing data in the database.");
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="h-screen flex items-center justify-center [background:radial-gradient(150%_150%_at_50%_10%,#000_40%,#4B0082_100%)]">
      <div className="flex flex-col items-center backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white p-10 rounded-lg shadow-xl w-[85vw] sm:w-[25vw]">
        <h1 className="uppercase text-[rgba(1,205,250,255)] text-4xl sm:text-5xl tracking-widest mb-5">
          Register
        </h1>
        <input
          type="text"
          placeholder="Team Leader Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[75vw] sm:w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        {nameError && <p className="text-red-500 text-xs mb-4">{nameError}</p>}
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="w-[75vw] sm:w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        {teamNameError && (
          <p className="text-red-500 text-xs mb-4">{teamNameError}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[75vw] sm:w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        {emailError && (
          <p className="text-red-500 text-xs mb-4">{emailError}</p>
        )}
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
        {passwordError && (
          <p className="text-red-500 text-xs mb-4">{passwordError}</p>
        )}
        <button
          onClick={handleRegister}
          className="w-[75vw] sm:w-full mt-5 p-3 rounded-md bg-[rgba(110,50,169,255)] text-[rgb(255,255,255)] hover:bg-[rgba(110,50,169,0.5)]"
        >
          Submit
        </button>

        <div className="text-[rgb(255,255,255)] mt-5">
          Already have an account?{" "}
          <button
            className="hover:text-[rgb(255,255,255)] text-[rgba(1,205,250,255)]"
            onClick={() => router.push("/login")}
          >
            Login
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

export default Register;
