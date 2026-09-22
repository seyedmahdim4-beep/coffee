import React from 'react'

function CardBlog({ tittle, img, day, month, year }) {
    return (
        <div
            className="group flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl hover:border hover:border-blue-600 cursor-pointer  transition-all ">

            <div
                className="relative w-32.5 h-32.5 sm:w-auto shrink-0 sm:h-auto  sm:mb-4 rounded-2xl rounded-bl-4xl overflow-hidden">

                <img src={img}
                    className="h-full sm:h-auto object-cover" alt="img"></img>


                <div
                    className=" absolute inset-0 hidden invisible opacity-0 group-hover:opacity-100 group-hover:visible  md:flex items-center justify-center bg-linear-to-r from-orange-200/80 to-orange-300/80 transition-all ">
                    <svg className="w-34.5 h-13.5 text-amber-900">
                        <use href="#logo-type"></use>
                    </svg>
                </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row items-start justify-between">
                <a
                    className=" font-dana-Medium md:font-dana ml-1.5 sm:ml0 mt-2.5 sm:mt-0 text-sm/7 md:text-lg line-clamp-2 max-w-48.25  text-zinc-700 dark:text-white">
                    {tittle}   </a>


                <div className=" hidden sm:flex gap-5">

                    <span className="hidden lg:block w-px h-15.5 bg-gray-200 dark:bg-white/10 ">

                    </span>

                    <div
                        className="flex flex-col ml-3 lg:ml-4.5 -mt-1 text-sm text-teal-600 dark:text-emerald-500 text-left ">
                        <span className="font-dana-DemiBold md:text-xl lg:text-2xl">{day}</span>
                        <span>{month}</span>
                        <span>{year}</span>
                    </div>
                </div>

                <div
                    className="flex items-end justify-between w-full sm:hidden border-t border-t-gray-100 dark:border-t-white/10 pt-4.5 mt-3.5 pb-1.5">
                    <span className="text-teal-600 dark:text-emerald-500 text-xs"> {day + month + year}  </span>

                    <a href="#"
                        className="flex items-center gap-x-1 font-dana-Medium text-xs h-5 rounded-md pr-2.5 pl-2 ml-1.5 bg-orange-200/20 text-orange-300 ">
                        مطالعه
                        <svg className="w-3.5 h-3.5">
                            <use href="#mini-arrow-left"></use>
                        </svg>
                    </a>
                </div>
            </div>



        </div>
    )
}

export default CardBlog