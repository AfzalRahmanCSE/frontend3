import ProductItem from "./ProductItem";
const ProductList = () => {
    const products = [
        { id: 1, brand: 'Apple', model: 'iPhone 12 Pro', price: 1200, discount: 12, inStock: true, image: 'https://s3no.cashify.in/pd-admin/149c1919c16b485ba860a2ea5ed9e793.jpg?p=es5sq&s=es' },
        { id: 2, brand: 'Apple', model: 'iPhone 13 Pro', price: 1300, discount: 13, inStock: false, image: 'https://s3no.cashify.in/pd-admin/e250879f0b76406c883da271fe9ce730.jpg?p=es5sq&s=es' },
        { id: 3, brand: 'Apple', model: 'iPhone 14 Pro', price: 1400, discount: 14, inStock: true, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-1inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840578' },
    ]
    return <div>

        <h1> Product List</h1>
        <div className="container">
            <div className="row">
               
                    {products.map((product, index) => (
                        <div key={index} className="col-md-4">
                            <ProductItem product={product} />
                        </div>
                    ))}
                
            </div>
        </div>
    </div>


}

export default ProductList;