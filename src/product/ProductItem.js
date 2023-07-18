const ProductItem = ({ product }) => {
    const getDiscountedPrice = (product) => {
        return product.price - product.price * product.discount / 100
    }
    return <div>
      

                    <div className="card" style={{ margin: 10 }}>
                        <img style={{ padding: 10 }} src={product.image} className="card-img-top" alt="..." width={200} height={300}/>
                        <div className="card-body">
                            <h5 className="card-title">{product.brand} {product.model}</h5>
                            <p className="card-text"><h4 style={{ textDecoration: product.discount > 0 ? 'line-through' : '' }}>Actual Price:{product.price}</h4>
                                <h4>Now:{getDiscountedPrice(product)}</h4></p>
                            <button style={{ marginRight: 5 }} className="btn btn-secondary">Add to Cart<i className="fas fa-shopping-cart"></i></button>
                            <button href="#" className="btn btn-primary" disabled={!product.inStock}>Buy Now</button>

                        </div>
                    </div>
                </div>
    
}

export default ProductItem