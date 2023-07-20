import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const AddReview=()=>{
    const [review,setReview]=useState({
        subject:'',
        message:'',
        rating:'',
        productId:''
    })
const params=useParams()
const id=params.id;    
    const onInputChange=(evt)=>{
        return setReview({...review,[evt.target.name]:evt.target.value})
    }
    const onSave=async (evt)=>{
        try{

            evt.preventDefault();
            console.log(review)
            await axios.post('http://localhost:5000/api/products/addreview',review)
            .then(res=>console.log(res))
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{setReview({...review,productId:`${id}`})},[])
    return <div>
        <form>
            <div className="col-md-4">

        <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject:  </label>
                    <input type="text" className="form-control" name="subject" id="subject" value={review.subject} placeholder="Subject" onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message: </label>
                    <input type="text" className="form-control" name="message" id="message" value={review.message} placeholder="Message" onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating: </label>
                    <input type="text" className="form-control" name="rating" id="rating" value={review.rating} placeholder="Rating" onChange={onInputChange}/>
                </div>
                <button  onClick={onSave} className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div> 
   
}

export default AddReview;