import { useState, Activity } from 'react'
import { useCart } from '../hooks/useCart';

function Product({ name, id, img, off, disCount, price, desc, gStar, sStar }) {

    const [isFlipped, setIsFlipped] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [rating, setRating] = useState(0);
    const [, setCart] = useCart()


    const ShoppingMobileFunc = () => {
        if (price) {
            alert("محصول مورد نظر به سبد خرید اضافه شد!");
            setCart(prev => [
                ...prev,
                { name, id, img, off, disCount, price, desc, gStar, sStar }
            ]);
        } else {
            alert("محصول مورد نظر موجود نیست");
        }
    };


    return (
        <>


            <div className="perspective-1000">
                <div
                    className={`relative  w-full transition-transform duration-700
        [transform-style:preserve-3d]
        ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
                >
                    {/* {روی کارت} */}
                    <div className="relative  bg-white dark:bg-zinc-700 rounded-2xl shadow-none md:shadow-normal [backface-visibility:hidden]">
                        <div className="p-5 bg-white dark:bg-zinc-700  rounded-2xl shadow-none md:shadow-normal">

                            <div className="relative mb-2 md:mb-5">
                                <img src={img} loading="lazy" className="w-32 md:w-auto mx-auto" alt="img"></img>



                                <Activity mode={off ? "visible" : "hidden"} >
                                    <span
                                        className="absolute flex items-center justify-center -top-2 -right-1 md:top-1.5 md:right-1.5 block h-5 md:h-7.5 text-xs md:text-base leading-6  md:leading-9 px-2.5 md:px-3.5 rounded-full  font-dana-DemiBold text-white dark:text-zinc-700 bg-orange-300 ">{off}</span>
                                </Activity>

                            </div>
                            <h5
                                className="font-dana-Medium text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2 h-10 md:h-14">
                                {name}</h5>

                            <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">

                                {
                                    price ? (
                                        <div className="text-teal-600 dark:text-emerald-500 ">
                                            <span className="font-dana-DemiBold text-xs sm:text-base md:text-xl">{price}</span>
                                            <span className=" text-xs md:text-sm tracking-tighter">تومان</span>
                                        </div>

                                    ) : (
                                        <span className="font-dana-DemiBold text-red-400 text-xs sm:text-base md:text-xl">موجود نیست</span>
                                    )
                                }

                                <Activity mode={disCount ? "visible" : "hidden"} >
                                    <div className=" offer">
                                        <span className=" text-xs md:text-xl">{disCount}</span>
                                        <span className=" hidden xl:inline text-sm tracking-tighter">تومان</span>
                                    </div>
                                </Activity>

                            </div>

                            <div className="flex items-center justify-between mt-2.5">
                                <div className="flex items-center gap-x-2 md:gap-x-3 -mr-2 ">
                                    <span onClick={ShoppingMobileFunc}
                                        className="flex items-center justify-center  w-6.5 h-6.5 md:w-9 md:h-9 rounded-full text-gray-400  bg-gray-100 dark:bg-zinc-800 hover:text-white hover:bg-teal-600 dark:hover:bg-emerald-500 cursor-pointer  transition-all  ">
                                        <svg className="w-4 h-4 md:w-5.5 md:h-5.5 ">
                                            <use href="#shopping-card"></use>
                                        </svg>
                                    </span>
                                    <span
                                        onClick={() => {
                                            setIsFlipped(prev => !prev)
                                            setShowMore(false);
                                        }}
                                        className="block text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500   cursor-pointer transition-all  ">
                                        <svg className="w-4 h-4 md:w-6 md:h-6 ">
                                            <use href="#arrows-right-left"></use>
                                        </svg>
                                    </span>
                                </div>

                                <div className="flex text-yellow-400">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <svg
                                            key={index}
                                            onClick={() => setRating(index + 1)}
                                            className={`w-4 h-4 md:w-6 md:h-6 cursor-pointer ${index < rating ? "text-yellow-400" : "text-gray-300"
                                                }`}
                                            fill="currentColor"
                                        >
                                            <use href="#star" />
                                        </svg>
                                    ))}
                                </div>
                            </div>



                        </div>

                    </div>

                    {/* پشت کارت: نمایش محصولات دیگر */}
                    <div className="absolute inset-0 p-4 bg-white dark:bg-zinc-700 rounded-2xl shadow-none md:shadow-normal [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <h3 className="mt-1.5 md:mt-4 text-xs md:text-sm font-dana-DemiBold text-emerald-700 dark:text-emerald-500">
                            توضیحات تکمیلی محصول:
                        </h3>


                        <div>
                            <p className={`text-xs md:text-sm text-zinc-700 dark:text-white whitespace-pre-line leading-4.25 md:leading-8 ${showMore ? "" : "line-clamp-4"}`}>
                                {desc}
                            </p>

                            <button
                                onClick={() => setShowMore(prev => !prev)}
                                className="mt-2 text-orange-300 text-xs md:text-sm"
                            >
                                {showMore ? "نمایش کمتر ↑" : "نمایش بیشتر ↓"}
                            </button>
                        </div>


                        <button
                            onClick={() => {
                                setIsFlipped(false);
                                setShowMore(false);
                            }}
                            className="absolute right-11 md:right-15 bottom-5.5 md:bottom-6.5 block   "
                        >
                            <span
                                className="block text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500  cursor-pointer transition-all  ">
                                <svg className="w-4.5 h-4.5 md:w-6 md:h-6 ">
                                    <use href="#arrows-right-left"></use>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Product