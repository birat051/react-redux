import type { Dispatch } from 'redux'
import { RootState } from "../stateManagement/store"
import { buyCake } from '../stateManagement/cakes/actions'
import { connect } from 'react-redux'


type CakeComponentProp=
{
    numOfCakes: number;
    buyCake: ()=>void
}

function CakeComponent(props:CakeComponentProp) {
  return (
    <div>
    <h1>Number of cakes {props.numOfCakes}</h1>
    <button onClick={props.buyCake}>Buy a cake</button>
    </div>
  )
}

const mapStateToProps = (state:RootState) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapStateToDispatch = (dispatch: Dispatch)=>{
    return {
        buyCake: ()=>dispatch(buyCake())
    }
}



export default connect(mapStateToProps,mapStateToDispatch)(CakeComponent)