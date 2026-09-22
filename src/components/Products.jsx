import React, { useState } from 'react'
import { productsData } from "../data/ProductsData";
import Product from './Product';
function Products() {

    const [products, setProducts] = useState(productsData)
    return (
        <>

            <section className="products flex items-center justify-center pt-8 md:pt-24 lg:pt-48 ">

                {/* <!-- section head --> */}
                <div className="mx-3 xs:mx-[9%]">
                    <div className="flex items-end justify-between mb-5 md:mb-12">
                        <div>
                            <h3
                                className="section-title font-Morabba-Medium text-2xl md:text-5xl text-zinc-700 dark:text-white ">
                                جدیدترین
                                محصولات</h3>
                            <span
                                className="section-subtitle inline-block font-Morabba-Light text-lg md:text-3xl mt-0.5 md:mt-1.5 text-zinc-700 dark:text">فرآوری
                                شده از دانه قهوه</span>
                        </div>

                        <a href="#"
                            className="section-link flex items-center md:gap-x-1 h-10 pr-3 pl-1 tracking-tightest text-base md:text-xl text-orange-300 md:hover:bg-orange-300/20  rounded-md transition-colors  ">

                            <span className="hidden md:inline-block">مشاهده همه محصولات</span>
                            <span className="inline-block md:hidden">مشاهده همه</span>

                            <svg className="w-5 h-5">
                                <use href="#chevron-left-mini"></use>
                            </svg>
                        </a>
                    </div>

                    {/* <!-- section body --> */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:2.5 sm:gap-3.5 md:gap-5 ">



                    {products.map((item)=>{
                        return <Product key={item.id} {...item} />
                    })}


                    </div>

                </div>

            </section>

        </>
    )
}

export default Products