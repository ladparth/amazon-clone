import Header from 'components/Header'
import React from 'react'
import Image from "next/image"
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from 'slices/basketSlice'
import CheckoutProduct from 'components/CheckoutProduct'
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/client'


function Checkout() {

    const basketItems = useSelector(selectItems);
    const [session] = useSession();
    const total = useSelector(selectTotal);

    return (
        <div className="bg-gray-100">
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* Left Section */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />
                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <h1 className="text-3xl border-b pb-4">
                         {basketItems.length === 0 ?'Your Amazon Basket is empty.':'Your Shopping Basket'}   
                        </h1>
                        <div className ="space-y-5">
                            
                        {
                            basketItems.map((item,i)=>{
                                return                                <CheckoutProduct 
                                    key={i}
                                    id={item.id}
                                    image ={item.image}
                                    title ={item.title}
                                    description={item.description}
                                    rating = {item.rating}
                                    hasPrime = {item.hasPrime}
                                    price={item.price}
                                    category={item.category}
                                />
                               
                            })
                        }
                        </div>

                    </div>
                </div>
                {/* Right Section */}
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {basketItems.length>0 && (
                        <>
                        <h2 className="whitespace-nowrap">Subtotal ({basketItems.length} items):<span className="font-bold">
                        <Currency quantity={total} currency="CAD"/>
                        </span>
                        </h2>
                        <button 
                        disabled={!session}
                        className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300'}`}>
                            {!session ? "Sign in to checkout":"Proceed to checkout"}
                        </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout