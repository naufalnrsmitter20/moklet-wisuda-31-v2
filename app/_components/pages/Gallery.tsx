"use client";
import React from "react";
import { useEffect, useState } from "react";
import { BodyXLarge, Display1 } from "../global/Text";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";

interface CardProops {
  IMGUrl: string;
  classes: string;
}

const mainCard: CardProops[] = [
  {
    IMGUrl: "/img/XI RPL 1.png",
    classes: "XI RPL 1",
  },
  {
    IMGUrl: "/img/XI RPL 2.png",
    classes: "XI RPL 2",
  },
  {
    IMGUrl: "/img/XI RPL 3.png",
    classes: "XI RPL 3",
  },
  {
    IMGUrl: "/img/XI RPL 4.png",
    classes: "XI RPL 4",
  },
  {
    IMGUrl: "/img/XI RPL 5.png",
    classes: "XI RPL 5",
  },
  {
    IMGUrl: "/img/XI RPL 6.png",
    classes: "XI RPL 6",
  },
  {
    IMGUrl: "/img/XI RPL 7.png",
    classes: "XI RPL 7",
  },
  {
    IMGUrl: "/img/XI RPL 8.png",
    classes: "XI RPL 8",
  },
  {
    IMGUrl: "/img/XI TKJ 1.png",
    classes: "XI TKJ 1",
  },
  {
    IMGUrl: "/img/XI TKJ 2.png",
    classes: "XI TKJ 2",
  },
  {
    IMGUrl: "/img/XI TKJ 3.png",
    classes: "XI TKJ 3",
  },
  {
    IMGUrl: "/img/XI TKJ 4.png",
    classes: "XI TKJ 4",
  },
  {
    IMGUrl: "/img/XI TKJ 5.png",
    classes: "XI TKJ 5",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: "free",
    breakpoints: {
      "(min-width: 240px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slides: { perView: 1 },
    slideChanged(slider) {
      const realIndex = slider.track.details.abs % mainCard.length;

      const slidesPerView = slider.track.details.slidesLength;
      const halfSlides = Math.floor(slidesPerView / 3);
      const activeIndex = realIndex + halfSlides;
      setActiveIndex(activeIndex % mainCard.length);
    },
    created(slider) {
      centerActiveSlide(slider);
    },
    updated(slider) {
      centerActiveSlide(slider);
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function centerActiveSlide(slider: any) {
    const slideIndex = slider.track.details.abs;
    const slide = slider.slides[slideIndex];
    const container = slider.container;

    if (slide && container) {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const containerCenter = container.offsetWidth / 2;
      container.scrollLeft = slideCenter - containerCenter;
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (slider.current) {
        slider.current.next();
        centerActiveSlide(slider.current);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [slider]);

  return (
    <section className="mb-14 px-2 md:px-10 lg:px-[3.250rem]" id="gallery">
      <div data-aos="fade-right" className="rounded-4xl bg-gradient-to-b from-primary-700 to-primary-800 py-[3.250rem] px-2 md:px-10 lg:px-[7.250rem] text-center text-white relative">
        <div data-aos="fade-down">
          <Display1 className="mb-5 text-center">Gallery Of</Display1>
        </div>
        <a href="#gallery" data-aos="fade-up" className="bg-secondary-600 w-fit hover:bg-secondary-700 duration-200 rounded-full px-6 py-3 flex items-center gap-4 mx-auto">
          <BodyXLarge className="text-white">
            <span>Angkatan 31 - Elevatisa</span>
          </BodyXLarge>
        </a>
        <Image unoptimized src="/svg/elevatisa-left.svg" width={100} height={100} alt="elevatisa-left" className="absolute -bottom-4 left-44 hidden lg:block w-auto" />
        <Image unoptimized src="/svg/elef-right.svg" width={100} height={100} alt="elevatisa-right" className="absolute -bottom-4 right-44 hidden lg:block w-auto" />
      </div>
      <section className="mb-[5.750rem] w-full">
        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className="mt-[100px] navigation-wrapper relative">
          <div ref={sliderRef} className="keen-slider teams-wrapper flex">
            {mainCard.map((s, i) => (
              <div
                key={i}
                className={`
                            keen-slider__slide number-slide${i + 1}
                            ${activeIndex === i ? "ring-4 ring-primary-300 bg-primary-50 text-primary-700" : "ring-2 ring-primary-300 bg-primary-50 text-primary-700 lg:ring-0 lg:bg-white lg:text-black"}
                            transition-all duration-300 ease-in-out transform
                            hover:bg-primary-50 hover:text-primary-700 hover:ring-primary-300 hover:ring-2
                            cursor-pointer my-2 rounded-[16px] text-center p-4 h-fit
                          `}
              >
                <Image priority unoptimized src={s.IMGUrl} alt={s.classes} width={100} height={100} className="w-full h-auto rounded-[16px] mx-auto" />
                <h3 className="text-surface-50 font-semibold xl:text-[20px] lg:text-[19px] md:text-[18px] mt-4 mb-2 sm:text-[17px] text-[16px]">{s.classes}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
