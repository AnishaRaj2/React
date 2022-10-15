// function Clicked() {
//     return (alert("Hello!"));
// }

// export default function Button () {
//     return (
//         <button onClicked={Clicked()}>Click Me!</button>
//         // <button onClick={() => alert("Hello!")}>Say Hello</button>

//     );
// }

// export default function Button () {
//   const shoot = () => {
//     alert("Great Shot!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }

export default function Button ({message, children}) {
  return(
    <button onClick = {() => alert(message)} > 
      {children}
    </button>

  );
}
