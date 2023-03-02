// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const expensive = () => {
//   let number = 50;
//   let newNumber = (5 % 100) + 20 * number;
//   return newNumber;
// };

// export const Test = () => {
//   const [calc, setCalc] = useState(() => expensive());
//   // console.log("inside" + calc);

//   const [count, setCount] = useState(1);
//   const inc = () => {
//     setCount(count + 1);
//   };
//   const sub = () => {
//     setCount(count - 1);
//   };
//   let num = 1;
//   useEffect(() => {
//     console.log("current State: ", count);
//   }, [count]);

//   const [myInput, setInput] = useState("ASAASASASASAS");
//   const str = (E) => {
//     const setStr = E.target.value;
//     setInput(setStr);
//   };

//   useEffect(() => {
//     axios.get("");
//   }, []);
//   // console.log(myInput);

//   return (
//     <div>
//       <label>{count}</label>
//       <button onClick={() => inc()}>Increament</button>
//       <button onClick={() => sub()}>Decreament</button>
//       <br />
//       <input type="text" className="" value={myInput} onChange={str} />
//       <label>{myInput}</label>
//     </div>
//   );
// };
