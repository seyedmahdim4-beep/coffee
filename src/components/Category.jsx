import React, { useState } from 'react'
import EachCategory from './EachCategory'
function Category() {

const [category]=useState([
    {
        id:"1",
        img:"image/categories/category1.png",
        tittle:"دمی و اسپرسو",
    },
    {
        id:"2",
        img:"image/categories/category2.png",
        tittle:"لوازم جانبی و تجهیزات",
    },
    {
        id:"3",
        img:"image/categories/category3.png",
        tittle:" اسپرسو ساز ",
    },
    {
        id:"4",
        img:"image/categories/category4.png",
        tittle:" پک تستر قهوه ",
    },
    {
        id:"5",
        img:"image/categories/category5.png",
        tittle:" قهوه ترک ",
    },
])

  return (
    <section className="products-category mb-10 md:mb-20">
            <div>

                <div className="flex items-center justify-center gap-y-6 gap-x-7.25 md:gap-16.25 flex-wrap">

                    {
                        category.map((item)=>(

                            <EachCategory key={item.id} {...item} />
                        ))
                    }
                   
                </div>

            </div>
        </section>
  )
}

export default Category