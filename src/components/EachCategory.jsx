import React from 'react'

function EachCategory({tittle,img}) {
    return (
        <div className=" w-25 md:w-50 text-center">
            <a href="#">
                <img src={img} loading="lazy" alt="img"></img>
            </a>
            <span
                className="inline-block font-dana-DemiBold text-sm md:text-xl text-zinc-700 dark:text-white mt-1.5 md:mt-2.5">قهوه
                 {tittle}
                </span>
        </div>
    )
}

export default EachCategory