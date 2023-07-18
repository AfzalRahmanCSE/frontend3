const ProductItem=({product})=>{
    const getDiscountedPrice=(product)=>{
        return product.price-product.price*product.discount/100
    }

    return <div>
        <h1>{product.brand} {product.model}</h1>
        <img src={product.image} width={100} height="100" alt=''/>
        <h4 style={{textDecoration:product.discount>0?'line-through':''}}>Actual Price:{product.price}</h4>
        <h4>Now:{getDiscountedPrice(product)}</h4>
    </div>
}

export default ProductItem