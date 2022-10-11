/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section className="flex justify-center">
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
          className="w-full max-w-[432px] object-contain rounded-md"
          src="/assets/id_1.png"
          alt="id"
        />
      </div>
    </section>
  );
};

export default Home;
