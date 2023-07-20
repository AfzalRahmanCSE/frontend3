import axios from "axios";
import { useState } from "react";
import ShouldRender from '../utils/ShouldRender'
import Loader from '../utils/Loader'
import Error from '../utils/Error'

const NewProduct = () => {
    const [product,setProduct]=useState({
        category:'',
        subCategory:'',
        productDescription:'',
        brand:'',
        model:'',
        price:'',
        discount:'',
        inStock:false
    })
    const brandCondition=product.brand&&product.brand.length>2
    const modelCondition=product.model&&product.model.length>2
    const categoryCondition=product.category&&product.category.length>2
    const subCategoryCondition=product.subCategory&&product.subCategory.length>2
    const productDescriptionCondition=product.productDescription&&product.productDescription.length>2
    const [hasError,setError]=useState(false)
    const [loader,setLoader]=useState(false)
    const [success,setSuccess]=useState(false)
    const onInputChange=(evt)=>{
        setProduct({...product,[evt.target.name]:evt.target.value})
        console.log(product)
        }

    const oncheckedChange=(evt)=>{
        setProduct({...product,[evt.target.name]:evt.target.checked})
            }

    const onSave=async (evt)=>{
        try{
            setLoader(true)
            evt.preventDefault()
            await axios.post('http://localhost:5000/api/products',product)
            .then(res=>{console.log(res);setError(false);setSuccess(true);setLoader(false)
            setProduct( {
                category:'',
            subCategory:'',
            productDescription:'',
            brand:'',
            model:'',
            price:'',
            discount:'',
            inStock:false})
            })
        }catch(err){
            setError(true);setSuccess(false);setLoader(false)
        }

    }        
    
    return <div>
        <h4 style={{ textAlign: 'center' }}>Add New Product</h4>
        <ShouldRender condition={hasError}>
            <Error/>
        </ShouldRender>
        <ShouldRender condition={loader}>
            <Loader/>
        </ShouldRender>
        <ShouldRender condition={success}>
            <h1 className="alert alert-danger">Product Added Successfully</h1>
        </ShouldRender>
        <hr />
        <form>
            <div className="containter col-md-4">
            <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category: </label>
                    <input type="text" className="form-control" id="category" value={product.category} name="category" placeholder="Category" onChange={onInputChange} />
        
                        <ShouldRender condition={!categoryCondition}>
                            <span className="text-danger"> must be atleast 3 chars</span></ShouldRender>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="subcategory" className="form-label">Sub Category: </label>
                    <input type="text" className="form-control" name="subCategory" id="subcategory" value={product.subCategory}placeholder="Sub Category" onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="productdescription" className="form-label">Product Description: </label>
                    <input type="text" className="form-control" name="productDescription" id="productdescription" value={product.productDescription}placeholder="Product Description" onChange={onInputChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Brand: </label>
                    <input type="text" className="form-control" name="brand" id="brand" value={product.brand} placeholder="Brand" onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="model" className="form-label">Model: </label>
                    <input type="text" className="form-control" name="model" id="model" value={product.model} placeholder="Model" onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price: </label>
                    <input type="text" className="form-control" id="price"name="price" value={product.price}placeholder="Price" onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="discount" className="form-label">Discount: </label>
                    <input type="text" className="form-control" id="discount" name="discount" value={product.discount}placeholder="Discount" onChange={onInputChange}/>
                </div>
                <div className="mb-3"> 
                        <label className="form-check-label" htmlFor="instock">inStock: </label>
                    <input className="form-check-input" type="checkbox" value={product.inStock} name="inStock" id="instock" onChange={oncheckedChange}/>
                </div>
                <button type="submit" onClick={onSave}
                 disabled={!brandCondition||!modelCondition||!productDescriptionCondition||!categoryCondition||!subCategoryCondition}
                className="btn btn-primary">Add Product</button>
            </div>
        </form>
    </div>
}

export default NewProduct;