import React, { useContext, useState ,Activity} from 'react'
// import { Activity } from 'react';
import Overlay from './Overlay';
import ShopingProductDesktop from './ShopingProductDesktop';
import { Link } from 'react-router';
import { Theme } from '../Contexts/ThemeContext';
import { useCart } from '../hooks/useCart';

function Header({ setShoppingOpen }) {

    const { state: themeState, toggleTheme: changeTheme } = useContext(Theme)
    const [cart, setCart] = useCart()
    const [open, setOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false);
    const [activeSub, setActiveSub] = useState(0);
    const [activeMenu, setActiveMenu] = useState(0);

    const desktopPriceSum = cart.reduce((sum, item) => {
        return sum + (
            Number(String(item.price).replace(/,/g, "")) || 0
        );
    }, 0);


    return (
        <>

            {/* <!-- app header --> */}
            <header
                className=" fixed top-9 right-0 left-0 z-50 hidden md:flex items-center  lg:w-[90%] h-24 mx-auto px-2 lg:px-10 py-5  bg-black/50 rounded-3xl backdrop-blur-[6px] ">
                <div className="flex justify-between items-center w-full">
                    {/* <!-- logo & Menu --> */}
                    <nav className="flex items-center gap-x-5 lg:gap-x-9  h-14">

                        {/* <!-- logo --> */}
                        <div className="shrink-0">
                            <img src="image/app-logo.png" alt="golden coffee"></img>
                        </div>

                        <ul
                            className="flex gap-x-1 items-center md:gap-x-9 lg:gap-x-7.5 h-full text-gray-300 child:leading[56px] tracking-tightest child:hover:text-orange-300 ">
                            <li className="font-dana-Medium text-orange-200 "><a href="#">صفحه اصلی</a></li>
                            {/* <!-- Has Sub --> */}
                            <li className="relative group">
                                <a className="group-hover:text-orange-300 transition-colors" href="#shop">فروشگاه</a>
                                {/* <!-- Sub Menu --> */}
                                <div
                                    className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible top-full p-6 space-y-4 w-52 text-zinc-700  dark:text-white bg-white dark:bg-zinc-700 text-base border-t-[3px] border-t-orange-300 tracking-normal rounded-2xl shadow-normal transition-all delay-75 child:inline-block child-hover:text-orange-300 ">
                                    <a href="#">قهوه ویژه</a>
                                    <a href="#">ویژه در سطح جهانی</a>
                                    <a href="#">قهوه درجه یک</a>
                                    <a href="#">ترکیبات قهوه</a>
                                    <a href="#">کپسول قهوه</a>
                                    <a href="#">قهوه زینو برزیلی</a>
                                </div>
                            </li>
                            <li><a href="#">دیکشنری</a></li>
                            <li><a href="#blogs">بلاگ</a></li>
                            <li><a href="#contact-us"> تماس با ما</a></li>
                            <li><a href="#about-us">درباره ما</a></li>
                        </ul>
                    </nav>

                    {/* <!-- cart & theme toggle & login link --> */}

                    <div className="flex gap-x-3 lg:gap-x-5 xl:gap-x-10 text-xl text-orange-200">
                        {/* <!-- cart icon & theme switch btn --> */}
                        <div className="flex items-center gap-x-4 lg:gap-x-5  ">
                            {/* <!-- card --> */}
                            <div className="relative group">
                                {/* <!-- card icon hover --> */}
                                <div className="py-3 cursor-pointer ">
                                    <svg className=" w-8 h-8">
                                        <use href="#shopping-card"></use>
                                    </svg>
                                </div>
                                {/* <!-- card box --> */}
                                <div
                                    className="absolute  left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] h-[580px] p-5  bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300 rounded-2xl shadow-normal transition-all delay-75">
                                    {/* <!-- card header --> */}
                                    <div className="flex items-center justify-between tracking-tighter  font-dana-Medium text-xs ">

                                        <span className="text-gray-400">{cart.length}مورد</span>

                                        <a href="#" className="flex items-center text-orange-300">
                                            مشاهده سبد خرید

                                            <svg className="w-4 h-4 ">
                                                <use href="chevron-left"></use>
                                            </svg>

                                        </a>

                                    </div>
                                    {/* <!-- card body --> */}

                                    {cart.length != 0 ?

                                        (<div className="h-[450px] overflow-y-auto">
                                            {cart.map((item, index) => (
                                                <ShopingProductDesktop key={`${item.id}-${index}`} {...item} setCart={setCart} />
                                            ))}
                                        </div>) :
                                        (<div className="mr-30">

                                            <svg className=" size-27   mt-41 text-gray-300 dark:text-white ">
                                                <use href='#empty-basket' ></use  >
                                            </svg>
                                            <p className='font-Morabba-Bold text-orange-300 -mr-4.5 mt-12' >  سبد خرید خالی است! </p>
                                        </div>)}





                                    {/* <!-- card footer --> */}
                                    {cart.length == 0 ? "" : (
                                        <Link to={'/buying'} className="flex justify-between mt-5">
                                            <div className="flex flex-col gap-y-4">
                                                <span className="text-gray-400 text-xs tracking-tighter font-dana-Medium ">مبلغ قابل
                                                    پرداخت</span>

                                                <div className="text-zinc-700 dark:text-white font-dana-DemiBold">

                                                    {desktopPriceSum.toLocaleString("fa-IR")}
                                                    <span className="font-dana text-sm ">تومان</span>
                                                </div>
                                            </div>
                                            <a className=" flex items-center justify-center p-6 text-lg text-white bg-teal-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors h-14 w[144px] rounded-xl tracking-tightest "
                                                href="#">ثبت سفارش</a>
                                        </Link>
                                    )}

                                </div>

                            </div>
                            {/* <!-- theme switch btn --> */}
                            <div className="toggle-theme cursor-pointer" onClick={changeTheme} >
                                <svg className={`${themeState == `light` ? `inline-block` : 'hidden'} w-8 h-8`} >
                                    <use href="#moon"></use>
                                </svg>

                                <svg className={`${themeState == `dark` ? `inline-block` : 'hidden'} w-8 h-8`}>
                                    <use href="#sun"></use>
                                </svg>
                            </div>

                            {/* <!-- divide border --> */}
                            <span className=" block w-px h-14 bg-white/20 "></span>

                            {/* <!-- login link --> */}
                            <a href="#" className="flex items-center gap-x-2.5 tracking-tightest">
                                <svg className="w-8 h-8">
                                    <use href="#arrow-right"></use>

                                </svg>
                                <span className=" hidden xl:inline-block">ورود|ثبت نام</span>
                            </a>

                        </div>
                        <a href="#"></a>
                    </div>
                </div>

            </header >


            {/* <!-- mobile header --> */}

            <div className=" flex md:hidden items-center justify-between bg-white dark:bg-zinc-700 px-4 h-16 " >

                {/* <!-- nav icon --> */}

                <div
                    className='nav-icon'
                    onClick={() => setOpen(!open)}
                >
                    <svg className="w-6 h-6 text-zinc-700 dark:text-white">
                        <use href="#bars-3"></use>
                    </svg>
                </div>


                {/* <!-- nav --> */}

                <div
                    className={`
                        nav
                        fixed
                        top-0
                        bottom-0
                        -right-2
                        w-64
                        pt-3
                        px-4
                        bg-white
                        dark:bg-zinc-700
                        z-20
                        transform
                        transition-transform
                        duration-500
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        overflow-y-auto
                        ${open ? "translate-x-0" : "translate-x-full"}
                    `}
                >

                    {/* <!-- nav header --> */}

                    <div
                        className="flex gap-x-7 items-center justify-between mb-6 pb-5 border-b border-b-gray-100 dark:border-b-white/10"
                    >

                        <div className="flex items-center justify-between gap-x-5 ">

                            <svg className="w-13 h-13 text-orange-300">
                                <use href="#logo"></use>
                            </svg>
                            <svg className="w-20 h-20 text-orange-300">
                                <use href="#logo-type"></use>
                            </svg>

                        </div>


                        <svg onClick={() => setOpen(false)} id="nav-close-btn" className="w-6 h-6 text-zinc-600 dark:text-white">
                            <use href="#x-mark"></use>
                        </svg>


                    </div >

                    {/* <!-- nav menu --> */}

                    <div className="flex items-center bg-orange-200/20 text-orange-300 mb-4 pr-2.5 h-10 rounded-md" >
                        <a href="#" className="flex items-center gap-x-2 ">
                            <svg className="w-5 h-5">
                                <use href="#home"></use>
                            </svg>
                            صفحه اصلی
                        </a>
                    </div >

                    <ul className="child:pr-2.5 dark:text-white text-zinc-600 space-y-6 ">


                        <li>

                            <div onClick={() => { setSubOpen(!subOpen), setActiveMenu(1) }} id="submenu-open-btn" className={`flex items-center justify-between mt-6 ${subOpen ? "text-orange-300" : ""} `}>
                                <a href="#" className="flex items-center justify-between gap-x-2  ">
                                    <svg className="w-5 h-5">
                                        <use href="#shopping-card"></use>
                                    </svg>
                                    فروشگاه
                                </a>
                                <span className={subOpen ? "rotate-0" : "-rotate-90"} >
                                    <svg className="w-4 h-4">
                                        <use href="#chevron-down"></use>
                                    </svg>
                                </span>
                            </div>

                            {/* submenu--item--active */}

                            <div className={`submenu ${subOpen ? "submenu--open" : ""} `}>

                                <a onClick={() => { setActiveSub(1) }} href="#" className={`submenu-item ${activeSub === 1 ? "submenu--item--active" : ""} `}>قهوه ویژه</a>
                                <a onClick={() => { setActiveSub(2) }} href="#" className={`submenu-item ${activeSub === 2 ? "submenu--item--active" : ""} `}>ویژه در سطح
                                    جهانی</a>
                                <a onClick={() => { setActiveSub(3) }} href="#" className={`submenu-item ${activeSub === 3 ? "submenu--item--active" : ""} `}>قهوه درجه یک</a>
                                <a onClick={() => { setActiveSub(4) }} href="#" className={`submenu-item ${activeSub === 4 ? "submenu--item--active" : ""} `}>ترکیبات تجاری</a>
                                <a onClick={() => { setActiveSub(5) }} href="#" className={`submenu-item ${activeSub === 5 ? "submenu--item--active" : ""} `}>کپسول قهوه</a>
                                <a onClick={() => { setActiveSub(6) }} href="#" className={`submenu-item ${activeSub === 6 ? "submenu--item--active" : ""} `}>قهوه زینو برزیلی</a>

                            </div>

                        </li>


                        <li>
                            <a href="#" onClick={() => { setActiveMenu(2) }} className={`flex items-center gap-x-2 ${activeMenu === 2 ? "text-orange-300" : ""}`}>
                                <svg className="w-5 h-5">
                                    <use href="#chat"></use>
                                </svg>
                                دیکشنری
                            </a>
                        </li>

                        <li>
                            <a href="#" onClick={() => { setActiveMenu(3) }} className={`flex items-center gap-x-2 ${activeMenu === 3 ? "text-orange-300" : ""}`}>
                                <svg className="w-5 h-5">
                                    <use href="#briefcase"></use>
                                </svg>
                                درباره ما
                            </a>
                        </li>

                        <li>
                            <a href="#" onClick={() => { setActiveMenu(4) }} className={`flex items-center gap-x-2 ${activeMenu === 4 ? "text-orange-300" : ""}`}>
                                <svg className="w-5 h-5">
                                    <use href="#document-text"></use>
                                </svg>
                                بلاگ
                            </a>
                        </li>

                        <li>
                            <a href="#" onClick={() => { setActiveMenu(5) }} className={`flex items-center gap-x-2 ${activeMenu === 5 ? "text-orange-300" : ""}`}>
                                <svg className="w-5 h-5">
                                    <use href="#phone"></use>
                                </svg>
                                تماس با ما
                            </a>
                        </li>

                    </ul>


                    {/* <!-- nav footer --> */}

                    <div
                        className="space-y-6 py-8 mt-8 px-2.5  border-t border-t-gray-100 dark:border-t-white/10 font-dana text-orange-300">

                        <a href="#" className="inline-flex items-center gap-x-2">
                            <svg className="w-5 h-5">
                                <use href="#arrow-right"></use>
                            </svg>
                            ورود | ثبت نام
                        </a>

                        <span className="flex items-center gap-x-2">

                            <div className="toggle-theme" onClick={changeTheme} >
                                {themeState == "light" ? (<div className="flex items-center gap-x-2 ">
                                    <svg className=" w-5 h-5 ">
                                        <use href="#moon"></use>
                                    </svg>
                                    <span>تم تیره</span>
                                </div>) : (
                                    <div className=" dark:flex items-center gap-x-2 ">
                                        <svg className=" w-5 h-5 ">
                                            <use href="#sun"></use>
                                        </svg>
                                        <span>تم روشن</span>
                                    </div>
                                )}



                            </div>

                        </span>

                        <a href="#" className="flex items-center gap-x-2">

                            <svg className="w-5 h-5 ">
                                <use href="#shopping-card"></use>
                            </svg>

                            سبد خرید
                        </a>

                    </div>

                </div >


                {/* <!-- logo type --> */}

                <div >
                    <svg className="w-25 h-10 text-orange-300 ">
                        <use href="#logo-type"></use>
                    </svg>
                </div>


                {/* <!-- card icon --> */}

                <div className='flex' onClick={() => { setShoppingOpen(true) }} >

                    <svg className="shoppping-icon w-6  text-zinc-700 dark:text-white">
                        <use href="#shopping-card"></use>

                    </svg>


                    <Activity mode={(cart.length != 0) ? "visible" : "hidden"} >

                        <div className='absolute flex items-center justify-center w-5 h-5 mt-17.75 -mr-4.5 rounded-full text-white bg-orange-300'>

                            <div className='text-xs font-bold' >
                                {cart.length}
                            </div>

                        </div>

                    </Activity>


                </div>



            </div >


            <Overlay open={open} onClose={() => setOpen(false)} />

        </>
    )
}

export default Header
