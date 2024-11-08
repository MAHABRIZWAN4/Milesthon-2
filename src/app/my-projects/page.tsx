"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import Particle from "../Components/Particle";
import { ServiceData } from "../data/serviceData";

export default function ProjectCard() {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#6c34af]">
      <h1 className="text-purple-950 text-3xl font-extrabold mb-5 mt-2">MY PROJECTS</h1>
      <Particle />

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 2,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <Link href={item.link} target="_blank" passHref>
              <div className="flex flex-col gap-6 mb-10 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[350px] lg:w-[300px] overflow-hidden cursor-pointer">
                {/* Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.BackgroundImage})` }}
                ></div>

                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />

                {/* Head Icon */}
                <div className="relative flex flex-col gap-3 z-10 mt-28">
                  <h1 className="text-xl lg:text-2xl text-black font-extrabold">{item.title}</h1>
                  <p className="lg:text-[16px] text-white">{item.content}</p>
                </div>

                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100 z-10" />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
