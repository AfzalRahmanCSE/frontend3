import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import ShouldRender from "../utils/ShouldRender"
import Error from "../utils/Error"
import Loader from "../utils/Loader"
import NoImage from '../assets/NoImage.png'
import moment from 'moment'
import './index.css'
import { Link } from "react-router-dom"
const ProductDetails=()=>{
    const params=useParams()
    const id=params.id
    const [product,setProduct]=useState({})
    const [hasError,setError]=useState(false)
    const [loader,setLoader]=useState(true)
    useEffect( ()=>{
        try{
            
             axios.get(`http://localhost:5000/api/products/${id}`)
            .then(response=>{console.log(response.data);setProduct(response.data);setError(false);setLoader(false)})
            .catch(err=>{setError(true);setLoader(false)})
        }catch(err){
            console.log(err)
        }
    },[])
    return <div>
        <ShouldRender condition={hasError}>
            <Error/>
        </ShouldRender>
        <ShouldRender condition={loader}>
            <Loader/>
        </ShouldRender>
        <div class="card col-md-4">
  <img src={product.image||NoImage} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.brand} {product.model}</h5>
    <p class="card-text">{product.productDescription}
    <p>Average Rating:{product.avgRating?product.avgRating.toFixed(2):'No Reviews'}</p>
    <p>Reviews:</p>
    <p>{product.reviews?product.reviews.map(review=>
         <div>
                <h4>{review.subject}</h4>
                <div>{review.message}</div>
                <div>{moment(review.updatedDate).fromNow()}</div>
                <hr/>
            </div>
            
        
        ):'Be the First One to Review'}</p>
</p>
    
    <button href="#" class="btn btn-primary">Add to Cart</button>
    <Link to={`/addreview/${product._id}`} class="btn btn-primary">Add Review</Link>

  </div>
</div>
    </div>
}

export default ProductDetails