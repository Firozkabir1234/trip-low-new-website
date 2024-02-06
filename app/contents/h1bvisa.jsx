"use client";
import Image from "next/image";
import Link from "next/link";
import "../style/servicepagelayout.css";

export default function H1bvisa() {
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
          employ graduate-level workers in specialty occupations that require
          theoretical or technical expertise in specialized fields such as IT,
          finance, accounting, architecture, engineering, mathematics, science,
          medicine, etc. Any professional level job requires you to have a
          bachelor’s degree or higher. If you do not have a bachelor’s degree or
          higher you may be able to show degree equivalence through work
          experience and/or other qualifications. However, because of the visa
          cap it is unlikely that an H-1B visa petition will be successful. The
          US employer petitions for the H-1B Visa in the US which has a duration
          of up to 6 years. Applying for a non-immigrant visa is generally
          quicker than applying for a US Green Card, therefore the H-1B visa is
          popular for companies wishing to bring in staff for long-term
          assignment in the US. Please note that individuals cannot apply
          directly for an H-1B visa. Instead the employer must petition for
          entry of the employee.
        </p>
      </div>
      <div class="image3">
        <p>Eligibility: Specialty Occupation</p>
      </div>
      <div class="image4">
        <p>
          The US H1-B visa is designed to be used for staff in specialty
          occupations. The job must meet one of the following criteria to
          qualify as a specialty occupation: Have a minimum entry requirement of
          a Bachelor’s or higher degree or its equivalent. The degree
          requirement for the job is common to the industry or the job is so
          complex or unique that it can be performed only by an individual with
          a degree. The employer normally requires a degree or its equivalent
          for the position. The nature of the specific duties is so specialized
          and complex that the knowledge required to perform the duties is
          usually associated with the attainment of a bachelor’s or higher
          degree. Length of stay The H-1B visa is initially granted for up to
          three years, but may then be extended to a maximum of six years. Even
          though the H-1B visa is a non-immigrant visa, it is one of the few US
          visa categories recognized as dual intent, meaning the H-1B visa
          holder can apply for and obtain a US Green Card while in the US on an
          H-1B visa. If you are still in the US on an H-1B visa and wish to
          remain in the US for more than six years, you can apply for permanent
          residency in the US to receive a Green Card. If you do not gain
          permanent residency prior to the expiration of your H-1B visa, then
          you must live outside the US for at least one year before reapplying
          for another H or L visa.
        </p>
      </div>
    </div>
  );
}
