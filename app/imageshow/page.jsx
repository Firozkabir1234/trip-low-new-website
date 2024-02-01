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
        className="w-[1600px] h-[500px]"
        priority
      />
      <div class="image2">
        {" "}
        <Image
          src="/images/linier.png"
          alt=""
          width={748}
          height={50}
          className="w-[1600px] h-[500px]"
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
      <div class="image5">
        <Image
          src="/images/img-12.png"
          alt=""
          width={748}
          height={50}
          className="w-[350px] h-[250px]"
          priority
        />
      </div>
      <div class="image6">
        <p class="image6-text4">About </p>
        <p class="image6-text5">--- </p>
        <p class="image6-text1">About Us</p>
        <p class="image6-text2">
          Accumsan volutpat ocurreret id nam, solet numquam accommodare quo et.
          Et vidit choro aliquid pro, ad inani eirmod vituperata duo. Ut ludus
          vulputate qui, movartem accom modare eos no, vix error percipitur.
        </p>
        <p class="image6-text3">
          Nunc, blandit libero, blandit nunc diam rhoncus viverra. Et nec tellus
          nulla erisque ultricies massa sagittis dictum malesuada. Urna id
          velit, quis morbi nibh duis massa odio. Iaculis massa duis sit tellus
          adipiscing. Cursus amet
        </p>
        <button class="btn2">READ MORE</button>
        <p class="image6-text6">Family-Based Immigration</p>
      </div>

      <div class="image7">
        <Image
          src="/images/Rectangle.png"
          alt=""
          width={748}
          height={50}
          className="w-[1300px] h-[80px]"
          priority
        />
        <button class="btn3">Green Card Through Marriage</button>
        <button class="btn4">Green Card Through Immediate Relative</button>
        <button class="btn5">Green Card Through Consular Processing</button>
      </div>

      <div class="image8">
        <Image
          src="/images/Frame-15.png"
          alt=""
          width={748}
          height={50}
          className="w-[350px] h-[450px]"
          priority
        />
      </div>
      <div class="image9">
        <Image
          src="/images/Frame-4.png"
          alt=""
          width={748}
          height={50}
          className="w-[350px] h-[450px]"
          priority
        />
      </div>
      <div class="image9-text1">
        <p>
          Introducing international opportunities & strategic investment
          solutions, we specialize in empowering businesses and individuals to
          explore the vast potential of foreign markets. With deep expertise,
          tailored strategies, and unwavering commitment, we facilitate your
          journey to expand investment horizons across borders. TurnAbroad will
          diversify your business portfolio and help you navigate the intricate
          world of foreign investment.
        </p>
        <button class="btn6">Learn More</button>
      </div>
      <div class="image10-text1">
        <p>Employment-Based Immigration</p>
      </div>
      <div class="image11">
        <Image
          src="/images/Rectangle.png"
          alt=""
          width={748}
          height={50}
          className="w-[1300px] h-[80px]"
          priority
        />
        <button class="btn7-image11">H1B Visa</button>
        <button class="btn8-image11">L-1 Visa</button>
        <button class="btn9-image11">O-1 Visa</button>
        <button class="btn10-image11">EB-1 Visa</button>
        <button class="btn11-image11">EB-2 Visa</button>
        <button class="btn12-image11">EB-3 Visa</button>
      </div>
      <div class="image12">
        <Image
          src="/images/Frame13.png"
          alt=""
          width={748}
          height={50}
          className="w-[300px] h-[300px]"
          priority
        />
      </div>
      <div class="image14">
        <Image
          src="/images/Frame12.png"
          alt=""
          width={748}
          height={50}
          className="w-[300px] h-[300px]"
          priority
        />
      </div>
      <div class="image13">
        <Image
          src="/images/Frame11.png"
          alt=""
          width={748}
          height={50}
          className="w-[350px] h-[450px]"
          priority
        />
      </div>
      <div class="image13-text1">
        <p>
          Aiming to transform borders from being barriers in growth to gateways
          to success, we specialize in guiding individuals towards fulfilling
          international careers. With expertise in various career fields,
          internal resources, and unwavering commitment, we empower you to
          navigate the complexities of international employment and landing your
          dream job. Explore, experience, and excel in your global career
          ambitions with TurnAbroad.
        </p>
        <button class="btn6">Learn More</button>
      </div>
      <div class="image15">
        <Image
          src="/images/group-img.png"
          alt=""
          width={748}
          height={50}
          className="w-[1600px] h-[900px]"
          priority
        />
      </div>
      <div class="image16">
        <p>Humanitarian Immigration</p>
        <Image
          src="/images/Rectangle.png"
          alt=""
          width={748}
          height={50}
          className="w-[1100px] h-[80px]"
          priority
        />
      </div>
      <div class="image17">
        <button class="btn13-image17">VAWA</button>
        <button class="btn14-image17">U Visa</button>
        <button class="btn15-image17">Asylum</button>
        <button class="btn16-image17">T Visa</button>
      </div>
    </div>
  );
};

export default ImageDisplay;
