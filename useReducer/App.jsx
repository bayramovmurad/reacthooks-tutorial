import { useReducer } from "react"
import reducer from "./reducer"
import { DECREMENT, INCREMENT } from "./action"



const initialState = {
  count: 0
}

const App = () => {
  const [state, dispatch ] = useReducer(reducer,initialState);
  
  const decrement = () =>{
    dispatch({ type: DECREMENT})
  }
  const increment = () => {
    dispatch({ type: INCREMENT })
  }
  return (
    <div>
      <button onClick={decrement}>
        -
      </button>
      <p>{state.count}</p>
      <button onClick={increment}>
        +
      </button>
    </div>
  )
}
export default App