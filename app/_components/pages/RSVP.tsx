"use client";
import Image from "next/image";
import { BodyLarge, Display2, H4 } from "../global/Text";

export default function RSVP() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32" id="RSVP">
      <div className="max-w-5xl block lg:flex text-center lg:text-start justify-center items-center gap-[5.750rem] mx-auto px-4 md:px-10 lg:px-0">
        <div data-aos="fade-right">
          <Display2 className="text-primary-700 mb-4">Scan Disini</Display2>
          <BodyLarge className="text-gray-600">Kami mengharapkan kehadiran Anda. Mohon untuk memberikan konfirmasi kehadiran dengan scan QR Code berikut:</BodyLarge>
        </div>
        <div className="px-16 lg:px-0" data-aos="fade-left">
          <div className="p-4 bg-primary-50 border-primary-300 shadow-sm rounded-[1.250rem] mt-10 lg:mt-0">
            <Image priority unoptimized width={100} height={100} src="/svg/qr-UIUXMoyiSubmit.svg" alt="QR Code" className="mb-4 w-full h-full" />
            <H4 className="text-primary-700 text-center">Scan Me</H4>
          </div>
        </div>
      </div>
      <Image unoptimized src="/svg/Pattern-left.svg" alt="pattern-left" width={100} height={100} className="absolute -left-28 -top-16 -z-50 hidden lg:block w-auto" data-aos="fade-down-right" />
      <Image unoptimized src="/svg/Pattern-right.svg" alt="pattern-right" width={100} height={100} className="absolute -right-28 -bottom-28 -z-50 hidden lg:block w-auto" data-aos="fade-up-left" />
    </section>
  );
}
