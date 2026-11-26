import { Activity } from 'react';
import ShoppingProductMobile from './ShoppingProductMobile'
import { Link } from 'react-router';
import { useCart } from '../hooks/useCart';
function Shopping({ setShoppingOpen, shoppingOpen }) {

  const [cart, setCart] = useCart();

  const mobilePriceSum = cart.reduce((sum, item) => {
    return sum + (
      Number(String(item.price).replace(/,/g, "")) || 0
    );
  }, 0);


  return (
    <>
      {/* ================= SHOPPING OVERLAY ================= */}

      <div
        onClick={() => setShoppingOpen(false)}
        className={`
          fixed inset-0
          bg-black/40
          z-20

          transition-opacity
          duration-500

          ${shoppingOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
          }
        `}
      />


      {/* ================= SHOPPING CARD ================= */}

      <div
        className={`
          fixed
          top-0
          bottom-0
          left-0

          w-72

          pt-5
          px-4
          pb-4

          bg-white
          dark:bg-zinc-700

          z-30

          flex
          flex-col

          transform
          transition-transform
          duration-700
          ease-[cubic-bezier(0.16,1,0.3,1)]

          ${shoppingOpen
            ? 'translate-x-0'
            : '-translate-x-[101%]'
          }
        `}
      >

        {/* ================= HEADER ================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            mb-5
            pb-5
            border-b
            border-b-gray-300
            dark:border-b-white/10
          "
        >

          <button
            onClick={() => setShoppingOpen(false)}
            className="text-zinc-600 dark:text-white"
          >

            <svg className="w-6 h-6">
              <use href="#x-mark"></use>
            </svg>

          </button>


          <span className="text-zinc-700 dark:text-white font-dana-Medium">
            سبد خرید
          </span>

        </div>


        {/* ================= PRODUCTS ================= */}

        <div className="flex flex-col flex-1 overflow-y-auto">

          {/* Products */}


          {
            cart.length == 0 ?

              (
                <div>

                  <svg className="size-25 mr-18 mt-41 text-gray-300 dark:text-white ">
                    <use href='#empty-basket' ></use  >
                  </svg>
                  <p className='font-Morabba-Bold text-orange-300 mr-12 mt-12' >محصولی موجود نیست! </p>
                </div>


              )

              :

              (cart.map((item, index) => {
                return <ShoppingProductMobile key={`${item.id}-${index}`} {...item} />
              }))

          }



        </div>


        {/* ================= FOOTER ================= */}

        <div >
          
          <Activity mode={cart.length > 0 ? "visible" : "hidden"} >
            <Link to={'/buying'} className="flex gap-x-5">

              <a
                className="
                flex
                items-center
                justify-center
                text-sm
                font-dana-Medium
                text-white
                bg-teal-600
                hover:bg-emerald-500
                dark:bg-emerald-500
                dark:hover:bg-emerald-600
                transition-colors
                h-12
                w-25
                rounded-xl
                tracking-tightest
              "
                href="#"
              >
                ثبت سفارش
              </a>


              <div className="flex flex-col gap-y-1.5">

                <span className="text-gray-400 text-xs font-dana-Medium">
                  مبلغ قابل پرداخت
                </span>


                <div className="text-zinc-700 dark:text-white font-dana-DemiBold">


                  {mobilePriceSum.toLocaleString("fa-IR")}
                  <span className="font-dana text-xs">تومان</span>


                </div>

              </div>

            </Link>
          </Activity>

        </div>

      </div>
    </>
  )
}

export default Shopping

