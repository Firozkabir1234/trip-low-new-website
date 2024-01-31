"use client";
import Image from "next/image";
import Link from "next/link";
import "../style/imageoverlap.css";
const ImageDisplay = () => {
  return (
    <div className="container">
      <Image
        src="/images/Hom-Image.png"
        alt=""
        width={748}
        height={50}
        className="w-[1000px] h-[500px]"
        priority
      />
      <div class="image2">
        {" "}
        <Image
          src="/images/linier.png"
          alt=""
          width={748}
          height={50}
          className="w-[400px] h-[500px]"
          priority
        />
        <div class="image-text2">
          <h1>Giving you address that matters</h1>
        </div>
        <div class="image-text1">
          <h1>Foundation of Justice</h1>
          <h1>is Good Faith</h1>
        </div>
        <div class="image-text3">
          <h1>Malesuada felis facilisis diam sed volutpat sociis nib enim</h1>
          <h1>arcu Ac diam eget faucibus pulvinar nunc portitor sit.Quam</h1>
        </div>
        <div class="btn">
          <button>Consultation</button>
        </div>
        <div class="image-text4">
          <h1>(863)-599-6735</h1>
        </div>
      </div>
      <div class="image3">
        <Image
          src="/images/TripLawHome.png"
          alt=""
          width={748}
          height={50}
          className="w-[400px] h-[500px]"
          priority
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
