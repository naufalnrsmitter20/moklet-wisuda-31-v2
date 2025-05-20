"use client";
import Image from "next/image";
import { BodyXLarge, H2 } from "../global/Text";

const acaraList = [
  "Pembukaan",
  "Lagu Kebangsaan Indonesia Raya",
  "Mars SMK Telkom Malang",
  "Pembacaan Doa",
  "Sambutan Kepala Sekolah",
  "Sambutan Perwakilan Orang Tua",
  "Prosesi Pelepasan Siswa",
  "Penyerahan Plakat dan Simbolis Kelulusan",
  "Pelantikan dan Janji Alumni",
  "Penyerahan Penghargaan Siswa Berprestasi",
  "Sambutan Perwakilan Siswa Berprestasi",
  "Tayangan Video Kenangan",
  "Persembahan Siswa (Tari / Musik / Puisi)",
  "Penutupan",
  "Foto Bersama dan Ramah Tamah",
];

export default function Rundown() {
  return (
    <div className="bg-white p-2 md:p-4 lg:p-6" id="rundown">
      <div className="flex justify-center items-stretch gap-4 h-full">
        <div className="lg:grid grid-cols-2 grid-rows-2 gap-4 max-w-sm hidden" data-aos="fade-right">
          <Image unoptimized width={100} height={100} src="/img/random/ggg.jpg" alt="foto 3" className="rounded-3xl h-full w-auto max-h-full shadow object-cover col-span-2" />
          <Image unoptimized width={100} height={100} src="/img/random/20240619145102_IMG_8128.jpg" alt="foto 4" className="rounded-3xl h-full w-auto max-h-full shadow object-cover row-start-2" />
          <Image unoptimized width={100} height={100} src="/img/random/20240619142238_IMG_8085.jpg" alt="foto 4" className="rounded-3xl h-full w-auto max-h-full shadow object-cover row-start-2" />
        </div>
        <div data-aos="fade-up" className="bg-gradient-to-b from-primary-700 to-primary-800 w-full text-white rounded-3xl py-18 px-4 md:px-10 lg:px-[7.750rem] text-start shadow-lg">
          <H2 className="mb-12">Susunan Acara</H2>
          <ol className="text-left space-y-1 list-decimal list-inside">
            {acaraList.map((item, index) => (
              <BodyXLarge key={index}>
                {index + 1}. {item}
              </BodyXLarge>
            ))}
          </ol>
        </div>
        <div className="flex-col gap-4 max-w-sm hidden lg:flex" data-aos="fade-left">
          <Image unoptimized src="/img/random/hhh.jpg" alt="foto 3" width={100} height={100} className="rounded-3xl max-h-full shadow h-full w-auto object-cover" />
          <Image unoptimized src="/img/random/sss.jpg" alt="foto 4" width={100} height={100} className="rounded-3xl max-h-full shadow h-full w-auto object-cover" />
        </div>
      </div>
    </div>
  );
}
