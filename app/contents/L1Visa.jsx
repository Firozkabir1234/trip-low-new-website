"use client";
import Image from "next/image";
import Link from "next/link";
import "../style/servicepagelayout.css";

export default function L1visa() {
  return (
    <div className="container">
      <div class="image1">
        <Image
          src="/images/Frame-4.png"
          width={248}
          height={50}
          className="w-[1180px] h-[480px]"
          priority
        />
      </div>

      <div class="image2">
        <p>
          The US H-1B visa is a non-immigrant visa that allows US companies to
        </p>
      </div>
      <div class="image3">
        <p>Eligibility: Specialty Occupation</p>
      </div>
      <div class="image4">
        <p>
          The US H1-B visa is designed to be used for staff in specialty
          occupations. The job must meet one of the following criteria to
        </p>
      </div>
    </div>
  );
}
