/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="relative">
        <div className="absolute left-0 right-0 top-32 mx-auto text-center text-[#676c72]">
          <p className="text-4xl font-bold">Josh Daniel</p>
          <p className="text-2xl">Bañares</p>
          <p className="mt-12 text-xl">
            Technology <br />
            Co-Lead
          </p>
        </div>

        <img
          className="w-[400px] object-contain"
          src="/assets/id2.png"
          alt="id"
        />
      </div>
    </section>
  );
};

export default Home;
