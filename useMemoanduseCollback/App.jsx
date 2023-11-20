// ! useMemo() and useCollback()

// import React, { useState, useMemo, useCallback } from 'react';

// // Parent Component
// function ParentComponent() {
//     const [count, setCount] = useState(0);

//     // Memoize the callback function using useCallback
//     const handleClick = useCallback(() => {
//         console.log("Button clicked!");
//         setCount(prevCount => prevCount + 1);
//     }, []); // An empty dependency array ensures that the function retains the same reference across renders

//     // Memoize the calculation using useMemo
//     const squaredValue = useMemo(() => {
//         console.log("Calculating squared value...");
//         return count * count;
//     }, [count]); // If count changes, the calculation is recomputed; otherwise, squaredValue retains its previous value

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <p>Squared Value: {squaredValue}</p>
//             {/* Invoke the Child Component and pass the memoized callback function as a prop */}
//             <ChildComponent onClick={handleClick} />
//         </div>
//     );
// }

// // Child Component
// function ChildComponent({ onClick }) {
//     return (
//         <div>
//             <p>Child Component</p>
//             {/* Use the memoized callback function received from the Parent Component */}
//             <button onClick={onClick}>Click me</button>
//         </div>
//     );
// }

// export default ParentComponent;

// ! NOT useMemo() and useCollback()

// import React, { useState } from 'react';

// // Parent Component
// function ParentComponent() {
//     const [count, setCount] = useState(0);

//     // A new function is created on every render
//     const handleClick = () => {
//         console.log("Button clicked!");
//         setCount(prevCount => prevCount + 1);
//     };

//     // A new calculation is performed on every render
//     const squaredValue = count * count;

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <p>Squared Value: {squaredValue}</p>
//             {/* Invoke the Child Component and pass the handleClick function as a prop */}
//             <ChildComponent onClick={handleClick} />
//         </div>
//     );
// }

// // Child Component
// function ChildComponent({ onClick }) {
//     return (
//         <div>
//             <p>Child Component</p>
//             {/* Use the function received from the Parent Component */}
//             <button onClick={onClick}>Click me</button>
//         </div>
//     );
// }

// export default ParentComponent;


// TODO readme.md