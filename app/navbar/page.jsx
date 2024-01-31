"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import services from "../services/page";

const Navbar = () => {
  const routerForPush = useRouter();

  return (
    <nav>
      <div className="container">
        <div className="flex items-center bg-basic py-3 pr-9 border-b">
          <div className="flex-1 flex justify-center">
            <Link href="/">Home</Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/services">Services</Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/about">About us</Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/Logo hd-01 1.png"
              alt=""
              width={248}
              height={49}
              className="w-[100px] h-[50px]"
              priority
            />
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/">Appointment</Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/">Blog</Link>
          </div>
          <div className="flex-1 flex justify-center">
            <Link href="/">Contact us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
