import React from 'react'
import Product from './Product'

function ProductFeed({products}) {

    const productCards =(i,j) => {
      return products.slice(i,j).map(({id,title,price,description,category,image}) =>(
        <Product 
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            // rating={rating}
        />
        ))
    }


    return (

        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            
            { productCards(0,4)}
            
            <img className="md:col-span-full cursor-pointer" src="https://links.papareact.com/dyz" alt="" />

            <div className="md:col-span-2">
                {productCards(4,5)}
            </div> 
            
            {productCards(5,products.length)}

        </div>
    )
}

export default ProductFeed
