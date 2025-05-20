"use client";
import { ArrowDown } from "lucide-react";
import { BodyLarge, Display1, H3 } from "../global/Text";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <section className="py-10 lg:py-[5.750rem] px-4 md:px-10 lg:px-[7.750rem] relative mt-28">
      <div className="lg:grid grid-cols-5 gap-4 auto-rows-auto hidden">
        <div className="col-span-2" data-aos="fade-right">
          <Image unoptimized width={100} height={100} src="/img/random/20240619145054_IMG_8125.jpg" alt="Foto Cover" className="object-cover rounded-[1.250rem] object-center w-full h-full" />
        </div>
        <div className="col-span-2 col-start-1 row-start-2" data-aos="fade-right" data-aos-delay={500}>
          {" "}
          <Image unoptimized width={100} height={100} src="/img/random/20240619140601_IMG_8058.jpg" alt="Foto Cover" className="object-cover rounded-[1.250rem] object-center w-full h-full" />
        </div>
        <div className="row-span-2 col-start-3 row-start-1" data-aos="fade-down">
          {" "}
          <Image unoptimized width={100} height={100} src="/img/random/20240619145917_IMG_8136.jpg" alt="Foto Cover" className="object-cover rounded-[1.250rem] object-center w-full h-full" />
        </div>
        <div className="col-span-2 col-start-4 row-start-1" data-aos="fade-left" data-aos-delay={1000}>
          {" "}
          <Image unoptimized width={100} height={100} src="/img/random/20240619142009_IMG_8064.jpg" alt="Foto Cover" className="object-cover rounded-[1.250rem] object-center w-full h-full" />
        </div>
        <div className="col-start-4 row-start-2" data-aos="fade-up" data-aos-delay={500}>
          {" "}
          <Image unoptimized width={100} height={100} src="/img/random/20240619142258_IMG_8087.jpg" alt="Foto Cover" className="object-cover rounded-[1.250rem] object-center w-full h-full" />
        </div>
        <div className="col-start-5 row-start-2" data-aos="fade-left">
          {" "}
          <Image unoptimized width={100} height={100} src="/img/random/20240619145102_IMG_8128.jpg" alt="Foto Cover" className="object-cover rounded-[1.250rem] object-center w-full h-full" />
        </div>
      </div>
      <div className="my-[3.250rem] text-center">
        <div data-aos="fade-up" data-aos-offset="500">
          <H3 className="text-black">You{"'"}re Invited to Pelepasan Siswa Angkatan XXXI</H3>
          <Display1 className="text-primary-700">Students Honoring Innovations & Noteworthy Excellence</Display1>
          <H3 className="text-black">SMK Telkom Malang</H3>
        </div>
      </div>
      <a href="#informasi" data-aos="fade-up" className="bg-secondary-600 w-fit hover:bg-secondary-700 duration-200 rounded-full px-6 py-3 flex items-center gap-4 mx-auto">
        <BodyLarge className="text-white flex items-center">
          <span>Check The Invitation</span>
          <ArrowDown size={24} color="white" />
        </BodyLarge>
      </a>
      <Image unoptimized src="/svg/Pattern-left.svg" alt="pattern-left" width={100} height={100} className="absolute -left-48 -top-24 lg:-left-28  lg:-top-0 -z-50 w-auto" data-aos="fade-down-right" />
      <Image unoptimized src="/svg/Pattern-right.svg" alt="pattern-right" width={100} height={100} className="absolute lg:-right-28  lg:-bottom-28 -z-50 w-auto" data-aos="fade-up-left" />
    </section>
  );
}
