"use client";
import { Map } from "lucide-react";
import { BodyLarge, BodyMedium, Display2, H3, H4, H6 } from "../global/Text";
import Image from "next/image";

export default function Informasi() {
  return (
    <section data-aos="fade-left" className="px-2 lg:px-[3.250rem]" id="informasi">
      <div className="rounded-4xl bg-gradient-to-b from-primary-700 to-primary-800 py-[4.5rem] lg:py-[4.5rem] px-4 lg:px-[7.250rem] text-center -z-20 text-white relative">
        <Image unoptimized width={100} height={100} src="/svg/mamphis-pattern.svg" alt="memphis" className="w-full h-full object-cover absolute top-0 left-0 -z-10" />
        <H3>
          Yth. Bapak/Ibu Orangtua/Wali Murid <br /> Kelas XII Angkatan XXXI
        </H3>
        <BodyMedium className="mt-[28px]">Dengan penuh rasa syukur kepada Tuhan Yang Maha Esa,</BodyMedium>
        <BodyMedium className="mb-[28px]">kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada acara Pelepasan Siswa Kelas XII SMK Telkom Malang Angkatan XXXI Tahun Pelajaran 2024/2025, bertajux`k:</BodyMedium>
        <H4 className="mb-[28px]">
          {'"'}SHINE - Students Honoring Innovations And Noteworthy Excellence{'"'}
        </H4>
        <BodyMedium className="mb-[28px]">yang dilaksanakan pada:</BodyMedium>
        <Display2 className="mb-[28px]">12 . 06 . 2025</Display2>
        <BodyMedium className="mb-[28px]">07:00 - 12:30 WIB</BodyMedium>
        <H6 className="mb-[28px]">Graha Cakrawala UM</H6>
        <BodyMedium className="mb-[28px]">Jalan Cakrawala , Sumbersari, Kecamatan Lowokwaru Kota Malang</BodyMedium>
        <a href="#RSVP" className="bg-secondary-600 w-fit hover:bg-secondary-700 duration-200 rounded-full px-6 py-3 flex items-center gap-4 mx-auto">
          <BodyLarge className="text-white flex items-center gap-[10px]">
            <Map size={24} color="white" />
            <span>Check The Invitation</span>
          </BodyLarge>
        </a>
      </div>
    </section>
  );
}
