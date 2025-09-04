import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const ProductCart = ({ product }) => {

    const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext()


    return product && (
        <div onClick={() => { navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0, 0) }} className="border border-gray-500/40 rounded-md md:px-4 px-1.5 py-1 md:py-2 bg-white min-w-30 max-w-56  w-full">
    
            <div className="group cursor-pointer flex items-center justify-center py-2 group-hover:scale-105 transition border-none ">
            
                <img className="" src={product.image[0]} alt={product.name} />
            </div>

            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (

                        <img key={i} className="md:w-3.5 w-3" src={i < 4 ? assets.star_icon : assets.star_dull_icon} alt="" />

                    ))}
                    <p>({4})</p>
                </div>
                <div className="flex justify-between mt-3">
                    <div className="md:text-xl text-base font-medium text-green-500/80">
                        {currency}{product.offerPrice} {" "}<span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}${product.price}</span>
                    </div>
                    <div onClick={(e) => { e.stopPropagation(); }} className="text-green-500/80">
                        {!cartItems[product._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-green-100 border border-green-300 md:w-[80px] w-[64px] h-[34px] rounded cursor-pointer " onClick={() => addToCart(product._id)} >
                                <img src={assets.cart_icon} alt="cart_icon" />
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-green-500/25 rounded select-none">
                                <button onClick={() => { removeFromCart(product._id) }} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product._id]}</span>
                                <button onClick={() => { addToCart(product._id) }} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProductCart