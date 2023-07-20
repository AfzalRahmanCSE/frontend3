import { useEffect, useState } from "react"
import axios from "axios"
import ProductItem from "./ProductItem"
import { Link } from "react-router-dom"

const ProductList = () => {
    const [response, setResponse] = useState({ metadata: {}, data: [] })
    const [hasError, setError] = useState(false)
    const [loader, setLoader] = useState(true)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [search,setSearch]=useState('')
    const [filter,setFilter]=useState('')
    const [sortValue,setSortValue]=useState('')
    const [sortDir,setSortDir]=useState('')
    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/page/${page}/limit/${limit}?search=${filter}&sort=${sortValue}&direction=${sortDir}`)
            .then(res => {
                setResponse(res.data); setError(false); setLoader(false)
            })
            .catch(err => { console.log(err); setError(true); setLoader(false) })
    }, [page, limit,filter,sortValue,sortDir])
    const onPrev = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    const onNext = () => {
        if (page < response.metadata.pages) {
            setPage(page + 1)
        }
    }
    const onLimitChange = (evt) => {
        setLimit(evt.target.value)
        setPage(1)
    }
    const onSearchChange=(evt)=>{
        if(evt.target.value===''){setFilter(evt.target.value);setPage(1)}
        else{setSearch(evt.target.value);setPage(1)}
    }
    const onSearch=(evt)=>{
        evt.preventDefault()
        setFilter(search)
    }

    const onSortChange=(evt)=>{
        const sortedValue=evt.target.value;
        const token=sortedValue.split(':')
        setSortValue(token[0])
        setSortDir(token[1])
    }


    return <div>
        <h1 style={{ textAlign: 'center' }}>Product List</h1>
        <div className="row">
            <button className="btn btn-sm btn-outline-secondary col-1" disabled={page === 1} onClick={onPrev}>
                <i className="fa-solid fa-chevron-left"></i></button>

            <span className="col-2" style={{textAlign:'center'}}>Page {page} of {response.metadata.pages}</span>

            <button className="btn btn-sm btn-outline-secondary col-1" disabled={page === response.metadata.pages} onClick={onNext}>
                <i className="fa-solid fa-chevron-right"></i></button>
            <div className="col-1">
                <select className="form-select" onChange={onLimitChange}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>

                </select>
            </div>
            <div className="col-3">

                <div class="input-group mb-3" >
                    <input type="text" class="form-control" placeholder="Search" onChange={onSearchChange} />
                    <button class="btn btn-outline-secondary" type="button" id="search-icon" onClick={onSearch}>
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div className="col-2">
                <select className="form-select" onChange={onSortChange}>
                    <option value="">Sort By</option>
                    <option value="brand:asc">Brand Ascending</option>
                    <option value="brand:desc">Brand Descending</option>
                    <option value="price:asc">Price Low to High</option>
                    <option value="price:desc">Price high to Low</option>
                </select>
            </div>
            <Link to='/newproduct' className='btn btn-danger btn-sm col-2' style={{textTransform:'uppercase'}}>Add New Product</Link>
        </div>
        <hr />
        <div className="container">
            <div className="row">
                {response.data.map((product, index) => (
                    <div key={index} className="col-md-3">
                        <ProductItem product={product} />
                    </div>
                ))}
            </div>
        </div>

        <hr />
    </div>
}

export default ProductList