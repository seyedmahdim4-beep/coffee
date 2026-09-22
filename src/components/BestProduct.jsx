import React, { useState } from 'react'

function BestProduct({ id, name, img, off, disCount, price, gStar, sStar }) {

    return (
        <div className="p-5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl h-full min-h-[315px] md:min-h-[390px]">

            <div className="relative mb-2 md:mb-5">
                <img src={img} loading="lazy" className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto" alt="img"></img>

                {off && (
                    <span
                        className="absolute -top-2 -right-3 md:top-1.5 md:right-1.5 block h-5 md:h-7.5 text-xs md:text-base leading-6 md:leading-9 px-2.5 md:px-3.5 rounded-full font-dana-DemiBold text-white dark:text-zinc-700 bg-orange-300">{off}</span>
                )}
            </div>

            <h5 className="font-dana-Medium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-10 md:h-14 px-1">
                {name}
            </h5>

            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5 px-1">

                {
                    price ? (
                        <div className="text-teal-600 dark:text-emerald-500">
                            <span className="font-dana-DemiBold text-xs sm:text-base md:text-xl">{price}</span>
                            <span className="text-xs md:text-sm tracking-tighter">تومان</span>
                        </div>
                    ) : (
                        <span className="font-dana-DemiBold text-red-400 text-xs sm:text-base md:text-xl">موجود نیست</span>
                    )
                }

                {disCount && (
                    <div className="offer">
                        <span className="text-xs md:text-xl">{disCount}</span>
                        <span className="hidden xl:inline text-sm tracking-tighter">تومان</span>
                    </div>
                )}

            </div>

            <div className="flex items-center justify-between mt-6 px-1">
                <div className="flex items-center gap-x-2 md:gap-x-3 -mr-2">
                    <span
                        className="flex items-center justify-center block w-6.5 h-6.5 md:w-9 md:h-9 rounded-full text-gray-400 bg-gray-100 dark:bg-zinc-800 hover:text-white hover:bg-teal-600 dark:hover:bg-emerald-500 cursor-pointer transition-all">
                        <svg className="w-4 h-4 md:w-5.5 md:h-5.5">
                            <use href="#shopping-card"></use>
                        </svg>
                    </span>

                    <span
                        className="block text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500 cursor-pointer transition-all">
                        <svg className="w-4 h-4 md:w-6 md:h-6">
                            <use href="#arrows-right-left"></use>
                        </svg>
                    </span>
                </div>

                <div className="flex text-yellow-400">
                    {
                        Array.from({ length: Number(sStar) }).map((x, index) => (
                            <svg key={index} className="w-4 h-4 md:w-6 md:h-6 text-gray-300 dark:text-gray-400">
                                <use href="#star"></use>
                            </svg>
                        ))
                    }

                    {
                        Array.from({ length: Number(gStar) }).map((x, index) => (
                            <svg key={index} className="w-4 h-4 md:w-6 md:h-6">
                                <use href="#star"></use>
                            </svg>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default BestProduct