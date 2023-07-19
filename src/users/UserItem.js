const UserItem=({user})=>{
    return <div>
       <div className="card" style={{
          margin: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
  <img src={user.avatar_url} className="rounded-circle" alt="..."
  style={{
    width: '150px', // Set the desired width of the image
    height: '150px',
  }}
  />
  <div className="card-body">
    <hr/>
    <h5 className="card-title" style={{textAlign:'center'}}>{user.login}</h5>
    
  </div>
</div>
    </div>

}

export default UserItem;