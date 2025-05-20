"use client";
import { ArrowRight } from "lucide-react";
import { BodyMedium } from "./global/Text";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary-700 px-4 md:px-10 lg:px-[8rem] py-24 lg:py-[111px] w-full block lg:flex lg:justify-between max-w-full text-white" data-aos="fade-right">
        <div className="mb-10 lg:mb-0">
          <Image unoptimized src="/svg/smkTelkom-white.svg" alt="SMKTelkom Logo" width={100} height={100} className="mb-6 lg:mb-0 w-auto" />
          <BodyMedium className="lg:mt-18 hover:text-primary-200">© 2025 SMK Telkom Malang</BodyMedium>
        </div>
        <div>
          <div className="flex justify-start items-center gap-3 mb-6">
            <Link href="#" target="_blank">
              <Image unoptimized src="/svg/whatsapp.svg" alt="whatsapp" width={24} height={24} />
            </Link>
            <Link href="#" target="_blank">
              <Image unoptimized src="/svg/facebook.svg" alt="facebook" width={24} height={24} />
            </Link>
            <Link href="#" target="_blank">
              <Image unoptimized src="/svg/mail.svg" alt="mail" width={24} height={24} />
            </Link>
          </div>
          <Link href="https://www.smktelkom-mlg.sch.id/" target="_blank" className="flex items-center gap-2">
            <BodyMedium>SMK Telkom Malang</BodyMedium>
            <ArrowRight size={24} color="white" className="text-white" />
          </Link>
          <div></div>
        </div>
      </footer>
      <div className="text-center py-6 bg-primary-700 text-white border-t border-t-primary-300">
        <BodyMedium className="">
          Developed by{" "}
          <span>
            <Link className="hover:text-primary-200" href="https://www.naufalnr.xyz/" target="_blank">
              Naufalnr{" "}
            </Link>
            &{" "}
          </span>
          Designed by{" "}
          <span>
            <Link className="hover:text-primary-200" href="https://www.instagram.com/4aisen_/" target="_blank">
              Dionesia
            </Link>
          </span>
        </BodyMedium>
      </div>
    </>
  );
}
