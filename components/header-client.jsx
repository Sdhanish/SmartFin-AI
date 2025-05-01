"use client";


import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, Moon, PenBox, Sun } from "lucide-react";
import { useEffect, useState } from "react";


const HeaderClient = () => {

  const [isDark, setIsDark] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    const isDarkInitial = document.documentElement.classList.contains("dark");
    setIsDark(isDarkInitial);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
    setRotate(true);
    setTimeout(() => setRotate(false), 300);
  };
  return (
    <div>
       <div className="fixed top-0 w-full bg-white backdrop-blur-md z-50  dark:text-white dark:bg-[#0a0b0e] dark:border-none">
      <nav className="container mx-auto px-0 py-2 flex items-center justify-between dark:text-white">
      <Link href="/" className="flex items-center gap-2 sm:gap-3">
  <Image
    src={isDark ? "/smartfinDarker.jpg" : "/smartfin.jpg"}
    alt="Smartfin AI Logo"
    width={70}
    height={70}
    priority
    className="rounded-full border-gray-500 outline-gray-500 object-cover w-8 h-8 sm:w-[70px] sm:h-[70px]"
  />

  <span className="text-blue-500 tracking-[1px] mt-1 text-sm sm:text-3xl dark:text-blue-300 font-sans font-extrabold">
    SmartFin <span className="gradient-title">AI</span>
  </span>
</Link>



       
        
    <div className="flex items-center space-x-2 sm:space-x-4">
    <SignedIn>
      <Link href={"/dashboard"} className="text-gray-600 
      dark:text-white 
      hover:text-blue-600 flex items-center gap-2">
      <Button variant="outline" className='outline-black'>
        <LayoutDashboard size={18}/>
        <span className="hidden md:inline">Dashboard</span></Button>
        </Link>

        <Link href={"/transaction/create"} >
      <Button className="flex items-center gap-2 ">
        <PenBox size={18}/>
        <span className="hidden md:inline">Add Transaction</span></Button>
        </Link>
    </SignedIn>
   
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{
            elements:{
              avatarBox: "w-8 h-8 sm:w-10 sm:h-10"
            }
          }} />
        </SignedIn>
        <Button
  variant="ghost"
  size="icon"
  onClick={toggleTheme}
  className="transition-none  w-8 h-8 sm:w-10 sm:h-10" // keep the button itself still
>
  <span
   className={`inline-block transform transition-transform duration-300 ease-in-out ${
    rotate ? "rotate-[30deg]" : ""
  }`}
  
  >
    {isDark ? (
      <Sun className="text-white w-5 h-5 sm:w-6 sm:h-6" />
    ) : (
      <Moon className="text-black w-5 h-5 sm:w-6 sm:h-6" />
    )}
  </span>
</Button>

        
        </div>
       
      </nav>
    </div>
    </div>
  )
}

export default HeaderClient

