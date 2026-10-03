// import React from 'react'

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// export default App

//HTML ke code me ham js kese use karte hai...............

// import React from 'react'
// import Header from './Header'

// const App = () => {

//   const name = "Kangana"
//   return (
//     <div>
//       <Header/>
//       <h1> Hello {name} </h1>
//       <p>Welcome to React</p>
//     </div>

//   )
// }

// export default App

// PROPS PARENT COMPONENT

// import React from 'react'
// import User from './user'

// const App = () => {
//   return (
//     <div>
//       <User name = "kangana" age={19}/>
//     </div>
//   )
// }

// export default App

// EXAMPLe 2

// import React from 'react'
// import User from './user'
// const App = () => {
//   return (
//     <div>
//       <User email="kangana@123" password={123}/>
//     </div>
//   )
// }

// export default App

//CHILD PROPS

// import React from 'react'
// import Card from './Card'

// const App = () => {
//   return (
//     <Card>
//         <h2>Kangana maheshwari</h2>
//         <p>welcome my profile</p>
//     </Card>
//   )
// }

// export default App


//USE STATE HOOK

// import React, { useState } from 'react'

// const App = () => {
//     const [count , setCount] = useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>

//       <button onClick={() => setCount(count+1)}>
//         Increase</button>
//     </div>
//   )
// }

// export default App

//2ND EXAMPLE USESTATE

// import React, { useState } from 'react'

// const App = () => {
//     const [ name , setName ] = useState("Kangana")
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={() => setName("bhavika")}>Change name</button>
//     </div>
//   )
// }

// export default App

// EVENT HANDLING ONCLICK

// import React from 'react'

// const App = () => {
//   const handleClick = () => {
//     alert("Button clicked")
//   }
//   return (
//     <div>
//       <button onClick={handleClick}> Click me</button>
//     </div>
//   )
// }

// export default App

//USESTATE + ONCLICK

import React, { useState } from 'react'

const App = () => {
  const [name , setName] = useState("kangana")
  const changeName = () => {
    setName("kajal")
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>name change</button>
    </div>
  )
}

export default App









