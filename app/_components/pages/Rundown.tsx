"use client";
import Image from "next/image";
import { BodyXLarge, H2 } from "../global/Text";

const acaraList = [
  "Pembukaan",
  "Qiroah Al-Qur'an",
  "Menyanyikan Lagu Indonesia Raya, Mars YPT, dan Mars Telkom Schools",
  "Laporan Hasil Evaluasi Belajar",
  "Sambutan Kepala Sekolah",
  "Sambutan Direktur Utama YPT",
  "Sambutan Kepala Cabdin Kota Malang dan Batu",
  "Pengukuhan Kelulusan",
  "Pembacaan Ikrar Peserta Pelepasan",
  "Pengumuman Prestasi Akademik",
  "Pengumuman Prestasi Non-Akademik",
  "Pidato Ketua Angkatan",
  "Penyerahan Simbolis Siswa kepada Orang Tua, Diteruskan kepada IAW",
  "Penayangan Video Profil Angkatan 31",
  "Pembacaan Doa",
  "Penutupan",
];

export default function Rundown() {
  return (
    <div className="bg-white p-2 md:p-4 lg:p-6" id="rundown">
      <div className="flex justify-center items-stretch gap-4 h-full">
        <div className="lg:grid grid-cols-2 grid-rows-2 gap-4 max-w-sm hidden" data-aos="fade-right">
          <Image unoptimized width={100} height={100} src="/img/random/ggg.webp" alt="foto 3" className="rounded-3xl h-full w-auto max-h-full shadow object-cover col-span-2" />
          <Image unoptimized width={100} height={100} src="/img/random/20240619145102_IMG_8128.webp" alt="foto 4" className="rounded-3xl h-full w-auto max-h-full shadow object-cover row-start-2" />
          <Image unoptimized width={100} height={100} src="/img/random/20240619142238_IMG_8085.webp" alt="foto 4" className="rounded-3xl h-full w-auto max-h-full shadow object-cover row-start-2" />
        </div>
        <div data-aos="fade-up" className="bg-gradient-to-b from-primary-700 to-primary-800 w-full text-white rounded-3xl py-18 px-10 lg:px-[4rem] text-start shadow-lg">
          <H2 className="mb-12">Susunan Acara</H2>
          <ol className="text-left space-y-1 list-decimal list-inside">
            {acaraList.map((item, index) => (
              <BodyXLarge key={index}>
                <li>{item}</li>
              </BodyXLarge>
            ))}
          </ol>
        </div>
        <div className="flex-col gap-4 max-w-sm hidden lg:flex" data-aos="fade-left">
          <Image unoptimized src="/img/random/hhh.webp" alt="foto 3" width={100} height={100} className="rounded-3xl max-h-full shadow h-full w-auto object-cover" />
          <Image unoptimized src="/img/random/sss.webp" alt="foto 4" width={100} height={100} className="rounded-3xl max-h-full shadow h-full w-auto object-cover" />
        </div>
      </div>
    </div>
  );
}
