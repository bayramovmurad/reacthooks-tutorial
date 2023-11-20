import { useRef } from "react"


const App = () => {
   const inputRef = useRef();
   const handleFocus = () => {  
        inputRef.current.focus()
   }
// ! JS
//    let input = document.querySelector("input")
//    let button = document.querySelector("button")
//    button.addEventListener("click", () => {
//     input.focus()
//    })
  return (
    // ! React
    // ! Focus 
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Focus</button>
    </div>
    
  )
}
export default App

// TODO readme.md