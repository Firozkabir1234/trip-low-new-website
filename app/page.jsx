import Image from "next/image";
import Navbar from "./navbar/page";
import ImageDisplay from "./imageshow/page";
export default function Home() {
  return (
    <div className="container">
      <Navbar />

      <div className="flex-1 flex justify-center">
        <ImageDisplay />
      </div>
    </div>
  );
}
