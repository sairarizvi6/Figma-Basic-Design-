
import Header from "./components/Header";
import Image from "next/image";
import image from "../../public/logo.PNG.png"

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex h-[465px] w-11/12">
        <div className="flex flex-col flex-1 gap-4 justify-center px-4">
        <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
        <p className="font-normal text-[32px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
        </p>
        <button className="text-white w-[237px] h-[66px] p-4 bg-black">Contact US</button>
        </div>
        <div className="flex-1">
          <div>
        <Image src={image} alt="image" className="w-502px/465px top-183px left-731px"></Image>
      </div>
      </div>
    </div>
    </div>
  );
}