/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Hover from "react-3d-hover";

const Home: NextPage = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-[350px] mx-auto w-full font-semibold text-5xl mb-8">
        <h1>SHEESH,</h1>
        <div className='relative'>
        <h1 className='z-10 relative'>Here&apos;s your ID!</h1>
          <div className='w-[190px] h-[12px] bg-primary absolute right-1 bottom-1' />
        </div>
      </div>

      <Hover perspective={900}>
        <div className="relative">
          <div className="absolute left-0 right-0 top-32 mx-auto text-center text-[#676c72]">
            <p className="text-3xl font-bold">Josh Daniel</p>
            <p className="text-xl">Bañares</p>
            <p className="mt-12 text-lg">
              Technology <br />
              Co-Lead
            </p>
          </div>

          <img
            className="w-full max-w-[350px] object-contain rounded-md"
            src="/assets/id_1.png"
            alt="id"
          />
        </div>
      </Hover>
    </section>
  );
};

export default Home;
