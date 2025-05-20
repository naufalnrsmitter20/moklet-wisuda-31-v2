"use client";
import { useState } from "react";
import { BodyLarge } from "./global/Text";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [modal, setModal] = useState<boolean>(false);
  const HandleModal = () => (!modal ? setModal(true) : setModal(false));
  return (
    <nav className="flex justify-between gap-8 fixed items-center bg-white hite px-4 md:px-10 lg:px-[7.750rem] py-7 shadow-md w-full z-50">
      <div className="md:hidden"></div>
      <div className="hidden md:flex items-center justify-start gap-4">
        <Image unoptimized className="w-auto h-auto" width={100} height={100} src="/svg/logo-smkTelkom.svg" alt="Logo SMK Telkom Malang" />
        <Image unoptimized className="w-auto h-auto" width={100} height={100} src="/svg/logo-YPT.svg" alt="Logo SMK Telkom Malang" />
        <Image unoptimized className="w-auto h-auto" width={100} height={100} src="/svg/logo-TS.svg" alt="Logo SMK Telkom Malang" />
      </div>
      <div className="hidden w-full lg:block md:w-auto" id="navbar-default">
        <ul className="flex flex-col p-4 md:p-0 mt-4 border-b border-b-gray-100 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white">
          <li>
            <BodyLarge>
              <Link href="#informasi" className="block py-2 px-3 text-gray-600 rounded-sm md:p-0 hover:text-primary-600 duration-200">
                Informasi
              </Link>
            </BodyLarge>
          </li>
          <li>
            <BodyLarge>
              <Link href="#RSVP" className="block py-2 px-3 text-gray-600 rounded-sm md:p-0 hover:text-primary-600 duration-200">
                RSVP
              </Link>
            </BodyLarge>
          </li>
          <li>
            <BodyLarge>
              <Link href="#gallery" className="block py-2 px-3 text-gray-600 rounded-sm md:p-0 hover:text-primary-600 duration-200">
                Gallery
              </Link>
            </BodyLarge>
          </li>
          <li>
            <BodyLarge>
              <Link href="#denah" className="block py-2 px-3 text-gray-600 rounded-sm md:p-0 hover:text-primary-600 duration-200">
                Denah
              </Link>
            </BodyLarge>
          </li>
          <li>
            <BodyLarge>
              <Link href="#rundown" className="block py-2 px-3 text-gray-600 rounded-sm md:p-0 hover:text-primary-600 duration-200">
                Rundown
              </Link>
            </BodyLarge>
          </li>
        </ul>
      </div>
      <div className="flex lg:hidden items-center justify-start gap-4 mx-auto">
        <Image className="w-16 md:w-20 lg:w-auto lg:h-auto" width={100} height={100} src="/svg/logo-smkTelkom.svg" alt="Logo SMK Telkom Malang" />
        <Image className="w-16 md:w-20 lg:w-auto lg:h-auto" width={100} height={100} src="/svg/logo-YPT.svg" alt="Logo SMK Telkom Malang" />
        <Image className="w-16 md:w-20 lg:w-auto lg:h-auto" width={100} height={100} src="/svg/logo-TS.svg" alt="Logo SMK Telkom Malang" />
      </div>
      <button
        onClick={HandleModal}
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className={`inline-flex lg:hidden items-center z-50 justify-center p-2 w-10 h-10 text-sm text-gray-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 ${modal ? "focus:ring-primary-200" : "focus:ring-gray-200"}`}
      >
        <span className="sr-only">Open main menu</span>
        {modal ? (
          <X size={24} className="text-primary-700" />
        ) : (
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        )}
      </button>
      {modal && (
        <div className="w-full absolute top-20 left-0 lg:hidden" id="navbar-default">
          <ul className="flex text-center flex-col p-4 md:p-0 mt-4 border-b border-b-gray-100 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white">
            <li className="mt-0">
              <BodyLarge>
                <Link href="#informasi" className="block py-2 px-3 text-gray-600 rounded-sm md:p-0 focus:text-primary-600 duration-200">
                  Informasi
                </Link>
              </BodyLarge>
            </li>
            <li>
              <BodyLarge>
                <Link href="#RSVP" className="block py-2 px-3 text-gray-600 rounded-sm md:p-0 focus:text-primary-600 duration-200">
                  RSVP
                </Link>
              </BodyLarge>
            </li>
            <li>
              <BodyLarge>
                <Link href="#gallery" className="block py-2 px-3 text-gray-600 rounded-sm md:p-0 focus:text-primary-600 duration-200">
                  Gallery
                </Link>
              </BodyLarge>
            </li>
            <li>
              <BodyLarge>
                <Link href="#denah" className="block py-2 px-3 text-gray-600 rounded-sm md:p-0 focus:text-primary-600 duration-200">
                  Denah
                </Link>
              </BodyLarge>
            </li>
            <li>
              <BodyLarge>
                <Link href="#rundown" className="block py-2 px-3 text-gray-600 rounded-sm md:p-0 focus:text-primary-600 duration-200">
                  Rundown
                </Link>
              </BodyLarge>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
