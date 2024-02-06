"use client";
import Image from "next/image";
import Link from "next/link";
import "../style/footer.css";
export default function Footers() {
  return (
    <div className="container">
      <div class="image53">
        <Image
          src="/images/grp-img1.png"
          alt=""
          width={748}
          height={50}
          className="w-[1700px] h-[300px]"
          priority
        />
      </div>
      <div class="image54">
        <p>
          Accumsan volutpat ocurrersolet numquam accom modare quo et. Et vidit
          choro aliquid pro inani eir mod vituperata duo. Ut ludus vulputate
          quvartem accom modare eos novix error percipitur.
        </p>
      </div>
      <div class="image55">
        <Image
          src="/images/Logo hd-01 1.png"
          alt=""
          width={748}
          height={50}
          className="w-[250px] h-[80px]"
          priority
        />
      </div>
      <div class="image56">
        <p>Contact Us</p>
        <br></br>
        <p>1543 Lakeland Hills Blvd,</p>
        <p>Ste. 17, Lakeland, FL 33805</p>
        <p>info@trip-law.com</p>
        <p>(863)-599-6735</p>
      </div>
      <div class="image57">
        <p>Quick Link</p>
        <br></br>
        <p>
          <Link href="/services">Services</Link>
        </p>
        <p>
          <Link href="/Home">Home</Link>
        </p>
        <p>
          <Link href="/">Contact Us</Link>
        </p>
        <p>
          <Link href="/">About Us</Link>
        </p>
        <p>
          <Link href="/">News</Link>
        </p>
      </div>
      <div class="image58">
        <p>Company</p>
        <br></br>
        <p>Career</p>
        <p>Angel Investor</p>
        <p>Terms of Service</p>
        <p>Legal Information</p>
        <p>Credits</p>
      </div>
    </div>
  );
}
