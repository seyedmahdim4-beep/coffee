import React, { useContext,Activity } from 'react'
import { CartContext } from '../Contexts/CartContext';

function ShopingProductDesktop({ id, name, img, off, disCount, price }) {

    const [cart, setCart] = useContext(CartContext)

    const removing = (id) => {
        setCart(prev =>
            prev.filter(item => item.id !== id)
        );
    };

    return (
        <div className="flex gap-x-2.5 mt-5 pb-6 border-b border-b-gray-300 dark:border-b-white/10">
            <img src={img} className="w-30 h-30 " alt="product"></img>

            <div className="flex flex-col justify-between">
                <h4 className="font-dana-Medium text-zinc-700 dark:text-white text-base line-clamp-2">
                    {name} </h4>


                <Activity mode={off ? "visible" : "hidden"} >
                    <span
                        className="text-rose-600 dark:text-red-400 text-xs tracking-tighter mt-6 ">{off}
                        تخفیف   </span>
                </Activity>

                {/* text-zinc-700 dark:text-white  */}

                <div className="flex items-center gap-x-2">
                    <div className=" w-22  text-emerald-600 dark:text-emerald-400 font-dana-DemiBold">{price}</div>
                    <span className="font-dana text-zinc-700 dark:text-white text-sm ">تومان</span>

                    <button onClick={() => removing(id)} className='flex items-center justify-center mr-3 w-10 h-10 rounded-full  text-gray-400  bg-gray-100 dark:bg-zinc-800 hover:text-white hover:bg-teal-600 dark:hover:bg-emerald-500  cursor-pointer '>
                        <svg className="  size-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke='currentColor' >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>


                </div>


            </div>



        </div>
    )
}

export default ShopingProductDesktop