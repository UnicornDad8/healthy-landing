import Image from "next/image";
import { PiCookingPotBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col h-screen px-2">
      <nav className="flex items-center justify-between py-5">
        <div>
          <h3>
            Organ
            <span className="text-gradient">o</span>
          </h3>
        </div>
        <div className="flex">
          <ul>
            <li className="text-gradient">Home</li>
            <li>Delivery</li>
            <li>Pricing</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
          <button className="btn btn-gradient button-glow">Get started</button>
        </div>
      </nav>

      <main className="flex justify-between flex-1">
        <div className="w-[50%] flex flex-col relative">
          <div className="mt-10 flex">
            <p className="text-base font-semibold tracking-wide font-family bg-gradient-to-r from-lime-500 via-green-500 to-green-500 inline-block text-transparent bg-clip-text">
              100% organic food
            </p>
            <Image width="20" height="20" src="/images/vegetable.png" />
          </div>
          <div className="my-7">
            <h2>Healthy Lifestyle</h2>
            <h2>
              is your only
              <span className="text-gradient">unfair</span>
            </h2>
            <h2 className="text-gradient">adventage</h2>
          </div>
          <div>
            <div className="mb-7">
              <p className="leading-text text-base">
                Choose healthy habits with Organo daily meal
              </p>
              <p className="leading-text text-base">
                prepared by our experts nutritionists and chef
              </p>
            </div>
            <div>
              <button className="btn btn-gradient button-glow">
                Get started
              </button>
              <button className="btn btn-bordered ml-6">Explore menu</button>
            </div>
          </div>
          <div className="mt-20 flex items-center">
            <div className="w-[80px] h-[80px] mr-4">
              <Image
                width="80"
                height="80"
                className="w-full h-full object-cover"
                src="/images/chef.png"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4>Chef of the month</h4>
              <div className="flex items-center">
                <p className="leading-text text-sm mr-2">people love his</p>
                <PiCookingPotBold size={20} color="#9ca3af" />
              </div>
              <span className="text-gradient text-sm font-semibold">
                80+ famous dishes
              </span>
            </div>
          </div>
          <div className="absolute top-[20px] right-[60px]">
            <Image width="120" height="120" src="/images/leaf.png" />
          </div>
        </div>

        <div className="flex relative w-[50%] justify-center items-center">
          <div className="w-full relative">
            <div className="w-[600px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
              <Image
                width="600"
                height="600"
                className="object-cover drop-shadow-2xl"
                src="/images/dish.png"
              />
            </div>
            <div className="absolute top-[-150px] right-[10px] z-20">
              <div className="flex flex-col bg-white rounded-2xl p-6 shadow-xl">
                <div className="space-x-[-12px] flex justify-center">
                  <Image
                    className="rounded-full border-white border-2"
                    width="40"
                    height="40"
                    src="/images/avatar-1.jpeg"
                  />
                  <Image
                    className="rounded-full border-white border-2"
                    width="40"
                    height="40"
                    src="/images/avatar-2.jpeg"
                  />
                  <Image
                    className="rounded-full border-white border-2"
                    width="40"
                    height="40"
                    src="/images/avatar-3.jpeg"
                  />
                </div>
                <h4>Happy customers</h4>
                <div className="flex items-center">
                  <FaStar size={20} color="#fcd34d" />
                  <p className="leading-text text-sm ml-2">
                    4.9 (+2.5k ratings)
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[-200px] left-[20px] z-40">
              <div className="flex bg-white rounded-2xl shadow-xl">
                <Image width="90" height="60" src="/images/driver.png" />
                <div className="py-6 pr-6 ml-2">
                  <h4>Fast delivery</h4>
                  <div className="flex items-center">
                    <p className="leading-text text-sm mr-2">30mins delivery</p>
                    <IoRocketSharp size={20} color="#9ca3af" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[50px] right-[50px]">
            <p className="flex font-semibold text-black">
              Powered by{" "}
              <AiFillThunderbolt className="mx-2" size={20} color="#000" />{" "}
              Fueler
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
