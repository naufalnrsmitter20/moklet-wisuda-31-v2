import React from "react";
import { BodyXLarge, H1 } from "../global/Text";
import Image from "next/image";

export default function DoAndDont() {
  return (
    <section className="mb-14 px-2 md:px-10 lg:px-[3.250rem] grid grid-cols-1 lg:grid-cols-2 gap-8" id="do-an-dont">
      <div data-aos="fade-right" className="rounded-4xl bg-gradient-to-b from-primary-700 to-primary-800 py-[3.250rem] px-10 lg:px-16 text-start text-white relative">
        <div data-aos="fade-down">
          <Image unoptimized width={100} height={100} src="/svg/mamphis-pattern.svg" alt="memphis" className="w-full h-full scale-200 object-cover absolute top-0 left-0 -z-10" />
          <H1 className="mb-4 text-start">Do</H1>
          <ul>
            <li>
              <BodyXLarge className="text-white">1. Membawa Undangan fisik</BodyXLarge>
              <BodyXLarge className="text-white">2. Undangan berlaku untuk 1 orang untuk ruang utama atau lantai 1</BodyXLarge>
              <BodyXLarge className="text-white">3. Tanpa Undangan masuk ke lantai 2</BodyXLarge>
            </li>
          </ul>
        </div>
      </div>

      <div data-aos="fade-left" className="rounded-4xl bg-gradient-to-b from-primary-700 to-primary-800 py-[3.250rem] px-10 lg:px-16 text-start text-white relative">
        <div data-aos="fade-down">
          <Image unoptimized width={100} height={100} src="/svg/mamphis-pattern.svg" alt="memphis" className="w-full h-full scale-200 object-cover absolute top-0 left-0 -z-10" />
          <H1 className="mb-4 text-start">Doesn{"'"}t</H1>
          <ol>
            <li>
              <BodyXLarge className="text-white">1. Dilarang membawa bucket </BodyXLarge>
              <BodyXLarge className="text-white">2. Dilarang mengambil gambar ke atas panggung</BodyXLarge>
              <BodyXLarge className="text-white">3. Dilarang membawa makanan dari luar gedung</BodyXLarge>
              <BodyXLarge className="text-white">4. Dilarang merokok atau menggunakan vape di dalam gedung</BodyXLarge>
              <BodyXLarge className="text-white">5. Dilarang membawa senjata tajam atau barang berbahaya</BodyXLarge>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
