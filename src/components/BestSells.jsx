import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

import BestProduct from "./BestProduct";
import { bests } from "../data/BestProductsData";

function BestSells() {
    const [bestCoffee] = useState(bests);

    return (
        <section className="best-selling mb-8 md:mb-20">
            <div className="mx-3 xs:mx-[9%]">

                <div className="flex items-end justify-between mb-5 md:mb-12">
                    <div>
                        <h3 className="section-title font-Morabba-Medium text-2xl md:text-5xl text-zinc-700 dark:text-white">
                            محصولات پر فروش
                        </h3>

                        <span className="section-subtitle inline-block font-Morabba-Light text-lg md:text-3xl mt-0.5 md:mt-1.5 text-zinc-700">
                            پیشنهاد قهوه خور ها...
                        </span>
                    </div>

                    <div className="flex gap-x-3">
                        <span className="swiper-button-prev-custom text-zinc-600 dark:text-white flex justify-center items-center w-9 md:w-10 h-9 md:h-10 rounded-full shadow-normal bg-white dark:bg-zinc-700 cursor-pointer">
                            <svg className="w-5 md:w-6 h-5 md:h-6">
                                <use href="#chevron-right-mini"></use>
                            </svg>
                        </span>

                        <span className="swiper-button-next-custom  text-zinc-600 dark:text-white flex justify-center items-center w-9 md:w-10 h-9 md:h-10 rounded-full shadow-normal bg-white dark:bg-zinc-700 cursor-pointer">
                            <svg className="w-5 md:w-6 h-5 md:h-6">
                                <use href="#chevron-left-mini"></use>
                            </svg>
                        </span>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                              spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 18,
                        },
                    }}
                >
                    {bestCoffee.map((item) => (
                        <SwiperSlide key={item.id} className="!h-auto">
                            <BestProduct {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}

export default BestSells;