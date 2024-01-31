"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../navbar/page";
import "../style/sidebarStyle.css";

export default function services() {
  return (
    <div className="container">
      <Navbar />

      <div className="sidebar">
        <a href="#news">Green Card Through Marriage</a>
        <a href="#news">Green Card Through Consular Processing</a>
        <a href="#contact">H1B Visa</a>
        <a href="#about">L-1 Visa</a>
        <a href="#about">O-1 Visa</a>
        <a href="#about">EB-1 Visa</a>
        <a href="#about">EB-2 Visa</a>
        <a href="#about">EB-3 Visa</a>
        <a href="#about">EB-3 Visa</a>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/images/service-page-pic.png"
          alt=""
          width={248}
          height={50}
          className="w-[500px] h-[500px]"
          priority
        />
      </div>
    </div>
  );
}
