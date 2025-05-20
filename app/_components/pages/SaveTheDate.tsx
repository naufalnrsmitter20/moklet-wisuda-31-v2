"use client";
import { useEffect, useState } from "react";
import { BodyMedium, Display2, H1 } from "../global/Text";
import Image from "next/image";

export default function SaveTheDate() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {}, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2025-06-12T07:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.max(targetDate.getTime() - now.getTime(), 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-[223px] text-center relative">
      <div data-aos="fade-left">
        <Display2>Save The Date</Display2>
      </div>
      <main data-aos="fade-right" className="flex items-start justify-center gap-6 max-w-sm mx-auto mt-8 px-2">
        <div>
          <H1 className="text-secondary-700">{timeLeft.days}</H1>
          <BodyMedium className="text-neutral-800">Hari</BodyMedium>
        </div>
        <H1 className="text-secondary-700">:</H1>
        <div>
          <H1 className="text-secondary-700">{timeLeft.hours}</H1>
          <BodyMedium className="text-neutral-800">Jam</BodyMedium>
        </div>
        <H1 className="text-secondary-700">:</H1>
        <div>
          <H1 className="text-secondary-700">{timeLeft.minutes}</H1>
          <BodyMedium className="text-neutral-800">Menit</BodyMedium>
        </div>
        <H1 className="text-secondary-700">:</H1>
        <div>
          <H1 className="text-secondary-700">{timeLeft.seconds}</H1>
          <BodyMedium className="text-neutral-800">Detik</BodyMedium>
        </div>
      </main>
      <Image unoptimized width={100} height={100} src="/svg/Pattern-left.svg" alt="pattern-left" className="absolute -left-48 -top-96 lg:-left-28  lg:-bottom-36 -z-50 w-auto" />
      <Image unoptimized width={100} height={100} src="/svg/Pattern-right.svg" alt="pattern-right" className="absolute -right-48 --top-96  lg:-right-28  -lg:top-36 -z-50 h-auto" />
    </section>
  );
}
