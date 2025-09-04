import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {
    const { navigate } = useAppContext()
    return (
        <div className='mt-5'>
            <p className='text-2xl  md:text-3xl font-medium'>Categories</p>
            {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6'>
                {categories.map((category, index) => (
                    <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center '
                        style={{ backgroundColor: category.bgColor }} onClick={() => {
                            navigate(`/products/${category.path.toLowerCase()}`);
                            scrollTo(0, 0)
                        }} >
                        <img className='group-hover:scale-108 transition max-w-28 ' src={category.image} alt={category.text} />
                        <p className='text-sm font-medium'>{category.text}</p>
                    </div>
                ))}


            </div> */}
            <div className="flex gap-4 md:gap-6 mt-6 overflow-x-auto scrollbar-hide px-2 ">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer flex flex-col items-center justify-center min-w-[80px]"
                        onClick={() => {
                            navigate(`/products/${category.path.toLowerCase()}`);
                            scrollTo(0, 0);
                        }}
                    >
                        {/* Circle Image */}
                        <div
                            className="w-20 h-20 md:w-24 md:h-24   rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-200 bg-white shadow-md group-hover:scale-105 transition"
                            style={{ backgroundColor: category.bgColor }}
                        >
                            <img
                                className="w-12 h-12 object-contain"
                                src={category.image}
                                alt={category.text}
                            />
                        </div>

                        {/* Text Below */}
                        <p className="text-xs font-medium mt-2 text-center whitespace-nowrap">
                            {category.text}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Categories