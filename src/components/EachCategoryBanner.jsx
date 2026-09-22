import React from 'react'

function EachCategoryBanner({tittle,desc,clas}) {
    return (
        <a href="#"
            className={`${clas} flex flex-col justify-center items-start pr-12  rounded-2xl h-35.5 md:h-62`}>
            <span className="font-dana-DemiBold mb-4 sm:mb-7 text-2xl md:text-4xl"> {tittle}</span>
            <span className="md:font-dana-Medium md:text-xl"> {desc}  </span>
        </a>
    )
}

export default EachCategoryBanner