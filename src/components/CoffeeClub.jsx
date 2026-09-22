import React from 'react'

function CoffeeClub() {
  return (
    <section className="coffee-club mb-8 md:mb-20 mx-[7%] ">
            <div>

                <div
                    className="flex flex-wrap lg:flex-nowrap  lg:gap-x-4 xl:gap-x-24 gap-y-9 items-center bg-linear-to-r from-emerald-500 to-emerald-600 text-white lg:h-36 py-8 lg:py-0 px-3 lg-px-5 xl:px-11 rounded-2xl  ">
                    <div className="flex items-center md:shrink-0 gap-x-3 gap-y-9 lg:gap-x-4 xl:gap-x-6">
                        <img src="image/club/diamond.png" className="w[87px] lg:w[100px] xl:w[110px] " alt="img"></img>

                        <div>
                            <h4 className="font-Morabba-Bold text-2xl md:text-5xl mb-2">کافی کلاب</h4>
                            <p className="font-Morabba-Light text-lg md:text-2xl">میدونستی میتونی با امتیاز هات قهوه بگیری؟
                            </p>
                        </div>
                    </div>



                    <div className="flex justify-between ml-auto ">
                        <div className="flex gap-x-1 lg:gap-x-3 xl:gap-x-5 ">
                            <div
                                className="w-15 h-16 md:w-24.5 md:h-24.5 text-center bg-white text-emerald-600 rounded-2xl py-1.5 md:pt-5 md:pb-1">

                                <svg className="w-7 h-7 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto ">
                                    <use href="#activity"></use>
                                </svg>
                                <span className="text-xs md:text-sm">چرخ و بخت</span>
                            </div>
                            <div
                                className="w-15 h-16 md:w-24.5 md:h-24.5 text-center bg-white text-emerald-600 rounded-2xl py-1.5 md:pt-5 md:pb-1">

                                <svg className="w-7 h-7 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto ">
                                    <use href="#Discovery"></use>
                                </svg>
                                <span className="text-xs md:text-sm"> ماموریت ها </span>
                            </div>
                            <div
                                className="w-15 h-16 md:w-24.5 md:h-24.5 text-center bg-white text-emerald-600 rounded-2xl py-1.5 md:pt-5 md:pb-1">

                                <svg className="w-7 h-7 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto ">
                                    <use href="#Ticket-star"></use>
                                </svg>
                                <span className="text-xs md:text-sm">جایزه ها</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className=" md:mb-1 font-dana-DemiBold text-2xl md:text-3xl">542</span>
                        <span className="text-xs md:text-sm ">امتیاز شما</span>
                        <a href="#"
                            className="flex items-center justify-center bg-linear-to-r from-orange-200 to-orange-300 font-dana-Medium text-xs md:text-sm w-22.5 md:w-27.5 h-6 md:h-8 mt-1 md:mt-2 rounded-full">
                            دریافت جایزه
                            <svg className="w-5 h-5 md:w-6 md:h-6">
                                <use href="#chevron-left-mini"></use>
                            </svg>
                        </a>
                    </div>




                </div>
            </div>
        </section>
  )
}

export default CoffeeClub