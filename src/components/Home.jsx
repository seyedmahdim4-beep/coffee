import React from 'react'

function Home() {
  return (
    <>
    
            <section
            className="home bg-home relative bg-center-top h-50 xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-no-repeat bg-cover ">

            <div className="container relative overflow-y-hidden h-full md:min-h-screen flex justify-end items-center">

                <div className=" text-white">
                    <h2 className="font-Morabba-Bold text-2xl md:text-6xl mb-0.5 md:mb-2">قهوه عربیکا تانزانیا</h2>

                    <span className="font-Morabba-Light text-xl md:text-5xl ">یک فنجان بالانس!</span>

                    <span className="block w-25 h-px md:h-0.5 bg-orange-300 my-3 md:my-8 "></span>

                    <p className=" max-w-50.25 md:max-w-115 text-xs md:text-2xl">قطعا نام آشنای عربیکا را شنیده اید ،
                        عربیکا یکی از گونه های
                        قهوه است که
                        در نواحی مختلف کمربند قهوه
                        کشت می شود.</p>
                </div>
            </div>

            {/* <!-- curve --> */}
            <svg
                className="  invisible xs:visible relative top-60.25 right-0 left-0 mx-auto text-gray-100 dark:text-zinc-800 w-25 h-[22px]">
                <use href="#curve"></use>
            </svg>

            {/* <!-- circle --> */}
            <div className="  invisible xs:visible relative z-0 w-60 h-60 top-0 mx-auto overflow-y-hidden ">
                <div className=" circle circle--main circle--lg ">
                    <div className="circle circle--md">
                        <div className="circle circle--sm"></div>
                    </div>
                </div>
            </div>
            {/* <!-- arrow circle --> */}
            <div
                className=" invisible xs:visible absolute bottom-0 right-0 left-0 mx-auto translate-y-2/4 flex items-center justify-center w-7.5 h-7.5 border-2 border-orange-300 rounded-full ">

                <svg className="w-4 h-4 text-zinc-700 dark:text-white  ">
                    <use href="#chevron-down"></use>
                </svg>
            </div>



        </section>
    
    </>
  )
}

export default Home