const UserItem=({user})=>{
    return <div>
       <div class="card" style={{
          margin: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
  <img src={user.avatar_url} class="rounded-circle" alt="..."
  style={{
    width: '100px', // Set the desired width of the image
    height: '100px',
  }}
  />
  <div class="card-body">
    <hr/>
    <h5 class="card-title" style={{textAlign:'center'}}>{user.login}</h5>
    
  </div>
</div>
    </div>

}

export default UserItem;