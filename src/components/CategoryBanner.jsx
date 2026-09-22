import React, { useState } from 'react'
import EachCategoryBanner from './EachCategoryBanner'
function CategoryBanner() {

    const [categoriesBanner] = useState([
        {
            id: "1",
            tittle: "انواع قهوه",
            desc: "ترکیبی و تک خاستگاه",
            clas: "category-banner--item1"
        },
        {
            id: "2",
            tittle: "پودر های فوری",
            desc: " نسکافه - هات چاکلت - ماسالا  ",
            clas: "category-banner--item2"
        },
    ])

    return (
        <section className="category-banner mt-8 mb-10 md:my-20">
            <div className=" mx-3 xs:mx-[12%]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">

                    {
                        categoriesBanner.map((item) => (
                            <EachCategoryBanner key={item.id} {...item} />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default CategoryBanner