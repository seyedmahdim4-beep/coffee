import React from 'react'

function ContactUs() {
  return (
     <section className="contact-us mb-16 md:mb-28 mx-[8%]">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-5">
                    <img src="image/contact.png" alt="img" className="w-74 h-74 shrink-0"></img>

                    <div className="text-zinc-700 dark:text-white">
                        <h3 className="font-Morabba-Medium text-2xl md:text-5xl mb-0.5 md:mb-1.5">یکی از بهترین قهوه ها !
                        </h3>
                        <span className="font-Morabba-Light text-lg md:text-3xl/[48px]">کیفیت قهوه را از ما بخواهید
                            ...</span>

                        <div className="flex gap-x-2.5 my-5 md:my-6">
                            <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>

                        </div>

                        <p className="text-lg md:text-2xl ">فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه
                            معطری
                            پیدا کنند و دسرهای خوشمزه ما را
                            که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز
                            شما
                            را می سازد!</p>

                        <a href="#"
                            className="inline-flex justify-center items-center   gap-x-2 text-white dark:text-emerald-500 hover:text-emerald-500 dark:hover:text-white text-base md:text-xl tracking-tightest w-50 md:w-auto px-6 py-2.5 md:py-3.5 mx-18 md:mx-auto mt-5 md:mt-7 border md:border-2 border-emerald-500 dark:hover:border-white rounded-full bg-emerald-500 dark:bg-zinc-800 hover:bg-white dark:hover:bg-emerald-500 transition-all delay-75">
                            <svg className="w-6 h-6 md:w-7 md:h-7">
                                <use href="#phone2"></use>
                            </svg>
                            ثبت سفارش تلفنی
                        </a>

                    </div>

                </div>
            </div>
        </section>
  )
}

export default ContactUs