import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { RootState } from './stateManagement/store'
import { buyCake } from './stateManagement/cakes/actions'
import { buyIcecream } from './stateManagement/icecreams/actions'
import { fetchUsers } from './stateManagement/users/middleware'


function App() {
  const numOfCakes = useSelector((state:RootState) => state.cake.numOfCakes)
  const numOfIceCream = useSelector((state:RootState)=>state.icecream.numOfIcecreams)
  const users = useSelector((state:RootState)=>state.users)
  const dispatch=useDispatch()
  const buyACake=()=>{
    dispatch(buyCake())
  }
  const buyAnIcecream=()=>{
    dispatch(buyIcecream())
  }
  const fetchUsersObject=fetchUsers()
  if(users.loading)
  return (
    <div className='app'>
    <h1>Loading...</h1>
    </div>
    )
  return (
    <div className='app'>
     <h1>Number of cakes: {numOfCakes}</h1> 
     <h1>Number of iceCreams: {numOfIceCream}</h1>
     <div>
     <button onClick={buyACake}>Buy Cake</button>
      <button onClick={buyAnIcecream}>Buy Icecream</button>
     </div>
     {users.users.length===0 && <button onClick={()=>fetchUsersObject(dispatch)}>Fetch users</button>}
     {users.users.length>0 && <h1>Users List</h1>}
     {users.users.map((user:string,index)=>{
      return <p key={user+index}>{user}</p>
     })}
     {users.error.length>0 && <p>{users.error}</p>}
    </div>
  )
}

export default App
