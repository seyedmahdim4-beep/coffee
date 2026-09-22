
import React from 'react'

function Shopping({ setShoppingOpen, shoppingOpen }) {
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

          ${
            shoppingOpen
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

          ${
            shoppingOpen
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

          {/* Product 1 */}

          <div
            className="
              flex
              gap-x-1
              pb-5
              mb-5
              border-b
              border-b-gray-100
              dark:border-b-white/10
            "
          >

            <img
              src="image/products/p1.png"
              className="w-22 h-22"
              alt="product"
            />


            <div className="flex flex-col justify-between">

              <h4
                className="
                  font-dana-DemiBold
                  text-zinc-700
                  dark:text-white
                  text-sm
                  line-clamp-2
                "
              >
                قهوه ترک بن مانو 250 گرمی
              </h4>


              <span
                className="
                  text-teal-600
                  dark:text-emerald-500
                  font-dana-Medium
                  text-xs
                  tracking-tighter
                  mt-6
                "
              >
                84,000 تومان تخفیف
              </span>


              <div className="flex items-center gap-x-2">

                <div className="text-zinc-700 dark:text-white font-dana-DemiBold">
                  616,000
                </div>

                <span className="font-dana text-zinc-700 dark:text-white text-xs">
                  تومان
                </span>

              </div>

            </div>

          </div>


          {/* Product 2 */}

          <div className="flex gap-x-1">

            <img
              src="image/products/p2.png"
              className="w-22 h-22"
              alt="product"
            />


            <div className="flex flex-col justify-between">

              <h4
                className="
                  font-dana-DemiBold
                  text-zinc-700
                  dark:text-white
                  text-sm
                  line-clamp-2
                "
              >
                قهوه مانوکا بن مانو 250 گرمی
              </h4>


              <div className="flex items-center gap-x-2">

                <div className="text-zinc-700 dark:text-white font-dana-DemiBold">
                  890,000
                </div>

                <span className="font-dana text-zinc-700 dark:text-white text-xs">
                  تومان
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ================= FOOTER ================= */}

        <div
          className="
            shrink-0
            pb-2
            pt-3
            border-t
            border-t-gray-300
            dark:border-t-white/10
          "
        >

          <div className="flex gap-x-5">

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

                1,506,000

                <span className="font-dana text-xs">
                  تومان
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Shopping

