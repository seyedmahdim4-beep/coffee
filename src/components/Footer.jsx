import React from 'react'

function Footer() {
  return (
    <footer className="relative bg-zinc-700 py-8 md:pb-11 pt-16  ">

        <svg className="absolute -top-0.5 right-0 left-0 mx-auto inline-block text-gray-100 dark:text-zinc-800 w-25 h-6">
            <use href="#curve-footer"></use>
        </svg>

        <div
            className=" absolute -top-3.5 right-0 left-0 mx-auto  flex items-center justify-center w-7.5 h-7.5 border-2 border-orange-300 rounded-full ">

            <svg className="w-4 h-4 rotate-180 text-zinc-700 dark:text-white  ">
                <use href="#chevron-down"></use>
            </svg>
        </div>

        <div className="flex flex-wrap justify-center md:justify-between  text-gray-300 px-4 md:px-0 mx-auto lg:w-[90%] ">

            <div>

                <div className="flex justify-center md:justify-start gap-x-5 text-gray-300 mb-8 md:mb-4.5">

                    <svg className="w-[57px] h-[54px] text-orange-200">
                        <use href="#logo"></use>
                    </svg>
                    <svg className="w-[138px] h-[54px] text-orange-200">
                        <use href="#logo-type"></use>
                    </svg>

                </div>

                <p className=" max-w-[500px] text-lg md:text-lg/[48px]">
                    ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی برای
                    تولیدکنندگان
                    ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید
                    نسبت به
                    کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
                </p>

            </div>

            <div className="mt-10 md:mt-4.5">
                <h4 className="font-dana-DemiBold text-xl text-orange-200 text-center md:text-right mb-8 md:mb-7  ">دسترسی
                    سریع</h4>

                <div className="grid grid-cols-2 gap-y-2.5 md:gap-y-5 gap-x-8 md:gap-x-12 h-36 md:h-44">

                    <a href="#"
                        className="flex items-center gap-x-2 md:gap-x-3 text-lg  hover:text-orange-300 transition-colors ">
                        <span className="inline-block bg-current rounded-full w-2.5 h-1"></span>
                        حریم خصوصی
                    </a>

                    <a href="#"
                        className="flex items-center gap-x-2 md:gap-x-3 text-lg hover:text-orange-300 transition-colors ">
                        <span className="inline-block bg-current rounded-full w-2.5 h-1"></span>
                        عودت کالا
                    </a>

                    <a href="#"
                        className="flex items-center gap-x-2 md:gap-x-3 text-lg hover:text-orange-300 transition-colors ">
                        <span className="inline-block bg-current rounded-full w-2.5 h-1"></span>
                        شرایط استفاده
                    </a>

                    <a href="#"
                        className="flex items-center gap-x-2 md:gap-x-3 text-lg hover:text-orange-300 transition-colors ">
                        <span className="inline-block bg-current rounded-full w-2.5 h-1"></span>
                        ثبت سفارش
                    </a>

                    <a href="#"
                        className="flex items-center gap-x-2 md:gap-x-3 text-lg hover:text-orange-300 transition-colors ">
                        <span className="inline-block bg-current rounded-full w-2.5 h-1"></span>
                        ضمانت نامه ها
                    </a>

                    <a href="#"
                        className="flex items-center gap-x-2 md:gap-x-3 text-lg hover:text-orange-300 transition-colors ">
                        <span className="inline-block bg-current rounded-full w-2.5 h-1"></span>
                        پرسش های متداول
                    </a>

                    <a href="#"
                        className="flex items-center gap-x-2 md:gap-x-3 text-lg hover:text-orange-300 transition-colors ">
                        <span className="inline-block bg-current rounded-full w-2.5 h-1"></span>
                        فرصت های شغلی
                    </a>

                    <a href="#"
                        className="flex items-center gap-x-2 md:gap-x-3 text-lg hover:text-orange-300 transition-colors ">
                        <span className="inline-block bg-current rounded-full w-2.5 h-1"></span>
                        ارتباط با ما
                    </a>


                </div>
            </div>

            <div className="mt-18 md:mt-4.5">
                <h4 className="font-dana-DemiBold text-xl text-orange-200 mb-8 md:mb-7 text-center md:text-right  "> در تماس
                    باشیم</h4>

                <div className="md:text-lg mb-6 md:mb-10">
                    <div>
                        <span className="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5 ">
                            <svg className="shrink-0 w-5 h-5 md:w-6 md:h-6">
                                <use href="#location"></use>
                            </svg>
                            بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
                        </span>

                        <div className="flex flex-wrap gap-x-5 gap-y-4 font-dana-Medium">

                            <a href="mailto:coffee@info.com"
                                className="flex items-center gap-x-2 md:gap-x-3 text-lg text-orange-300">
                                <svg className="w-5 h-5 md:w-6 md:h-6 ">
                                    <use href="#envelop"></use>
                                </svg>
                                coffee@info.com
                            </a>

                            <div className="flex items-center gap-x-2 md:gap-x-3 text-lg">
                                <svg className="w-5 h-5 md:w-6 md:h-6">
                                    <use href="#phone2"></use>
                                </svg>
                                <span className="ltr-text"> 0902 103 7648 </span>
                                <span className="ltr-text"> |</span>
                                <span className="ltr-text"> 021-6789012 </span>
                            </div>


                        </div>

                    </div>
                </div>

                <div className="flex gap-x-1.5 md:gap-x-6 font-dana-Medium md:text-lg">

                    <a href="#"
                        className="flex items-center  justify-center flex-grow pt-0.5  h-12 ltr-text text-orange-200 gap-x-2 border border-orange-200 rounded-xl  ">
                        @golden_coffee
                        <svg className="w-[26px] h-[26px] md:w-[38px] md:h-[38px] ">
                            <use href="#instgram"></use>
                        </svg>
                    </a>

                    <a href="#"
                        className="flex items-center justify-center flex-grow pt-0.5 h-12 ltr-text text-zinc-700 gap-x-2 border border-orange-200 rounded-xl bg-linear-to-r from-orange-200 to-orange-300  ">
                        @golden_coffee
                        <svg className="w-[26px] h-[26px] md:w-[38px] md:h-[38px] ">
                            <use href="#telegram"></use>
                        </svg>
                    </a>
                </div>

            </div>



        </div>

        <div className="flex justify-center md:justify-between items-center flex-wrap gap-y-2 gap-x-10 font-dana-Medium text-xs md:text-base border-t border-t-white/10
             mt-10 md:mt-11 pt-4 text-gray-300 px-4 md:px-0 mx-auto lg:w-[90%] ">

            <div className="flex items-center gap-x-2.5">
                <div className="flex items-center justify-center w-[30px] h-[30px] border border-white/10 rounded-full">
                    <div className="flex items-center justify-center w-5 h-5 border border-white/10 rounded-full">
                        <div
                            className="w-2.5 h-2.5 bg-linear-to-r from-orange-200 to-orange-300 border border-white/10 rounded-full">
                        </div>
                    </div>
                </div>

                <p>تمامی حقوق متعلق به <span className="text-orange-200">گلدن کافی </span> می باشد.</p>
            </div>

            <span className="ltr-text">Copyright © 2026 Golden Coffee. made by MAHDI MOUSAVI.</span>

        </div>


    </footer>
  )
}

export default Footer