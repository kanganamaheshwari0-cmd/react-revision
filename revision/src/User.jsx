//PROPS CHILD COMPONENT

import React from 'react'

const User = (props) => {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  )
}

export default User


//2ND EXAMPLE

// import React from 'react'

// const user = (props) => {
//   return (
//     <div>
//         <h4>Email:{props.email}</h4>
//         <h4>Password:{props.password}</h4>

      
//     </div>
//   )
// }

// export default user

