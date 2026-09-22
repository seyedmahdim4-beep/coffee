import React, { useState } from 'react'
import { BlogsData } from '../data/BlogsData'
import CardBlog from './CardBlog'
function Blogs() {

    const [carts] = useState(BlogsData)

    return (
        <section className="blogs mb-8 md:mb-28">

            <div>
                {/* <!-- section header --> */}
                <div className="mx-3 xs:mx-[9%]">
                    <div className="flex items-end justify-between mb-5 md:mb-12">
                        <div>
                            <h3
                                className="section-title font-Morabba-Medium text-2xl md:text-5xl text-zinc-700 dark:text-white ">

                                مطالب خواندنی

                            </h3>

                        </div>

                        <a href="#"
                            className="section-link flex items-center md:gap-x-1 h-10 pr-3 pl-1 tracking-tightest text-base md:text-xl text-orange-300 md:hover:bg-orange-300/20  rounded-md transition-colors  ">

                            <span className="hidden md:inline-block">مشاهده همه مطالب</span>
                            <span className="inline-block md:hidden">مشاهده همه</span>

                            <svg className="w-5 h-5">
                                <use href="#chevron-left-mini"></use>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* <!-- section content --> */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:2.5 sm:gap-3.5 md:gap-5 mx-[8%]">

                    {/* Card Blogs */}
                    {
                        carts.map((item) => (
                            <CardBlog key={item.id} {...item} />
                        ))
                    }

                </div>

            </div>

        </section>
    )
}

export default Blogs