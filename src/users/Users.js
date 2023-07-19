import axios from 'axios';
import { useEffect, useState } from 'react';
import UserItem from './UserItem';
import ShouldRender from '../utils/ShouldRender';
import Error from '../utils/Error';
import Loader from '../utils/Loader';

const Users = () => {
    const [response, setResponse] = useState([])
    const [hasError,setError]=useState(false)
    const [loader,setLoader]=useState(true)
    useEffect(() => {
        axios.get('https://api.github.com/users')
            .then(res =>{ setResponse(res.data);setError(false);setLoader(false)})
            .catch(err => {console.log(err);setError(true);setLoader(false)})
    }, [loader])
    return <div>
        <ShouldRender condition={hasError}>
            <Error/>
        </ShouldRender>
        <ShouldRender condition={loader}>
            <Loader/>
        </ShouldRender>
        <h1>Users Page</h1>
        <hr />
        <div className='container'>
            <div className='row'>
                {response.map((user, index) => (
                    <div key={index} className="col-md-3">
                        <UserItem user={user} />
                    </div>
                ))}

            </div>
        </div>
    </div>
}

export default Users