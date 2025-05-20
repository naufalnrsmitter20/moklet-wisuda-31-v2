"use client";
import { Display1 } from "../global/Text";

export default function Denah() {
  return (
    <section className="mb-[5.750rem] px-2 md:px-10 lg:px-[7.750rem] overflow-hidden" id="denah">
      <div data-aos="fade-up">
        <Display1 className="text-primary-700 mb-8 text-center">Denah Acara</Display1>
      </div>
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.9650640109176!2d112.61564001058547!3d-7.959112392032452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78827f0d7f025b%3A0x92aef5088187b798!2sGraha%20Cakrawala%20UM!5e1!3m2!1sid!2sid!4v1747658072753!5m2!1sid!2sid"
          width="600"
          height="650"
          className="w-full h-full rounded-[1.250rem] shadow-md shadow-gray-50"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
