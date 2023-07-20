import { Link } from 'react-router-dom'
import NoImage from '../assets/NoImage.png'

const ProductItem = ({ product }) => {
  const getDiscountedPrice = (product) => {
    return product.price - product.price * product.discount / 100
  }
  return <div>
    <Link to={`/product/details/${product._id}`}>

      <div class="card" >
        <img src={product.image || NoImage} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{product.brand} {product.model}</h5>
          <p class="card-text">
            <div>Was: <span style={{ textDecoration: product.discount > 0 ? 'line-through' : '' }}>{product.price}</span></div>
            <div>Now: {getDiscountedPrice(product)}</div>
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </Link>
  </div>
}

export default ProductItem