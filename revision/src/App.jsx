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

// import React, { useState } from 'react'

// const App = () => {
//   const [name , setName] = useState("kangana")
//   const changeName = () => {
//     setName("kajal")
//   }
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={changeName}>name change</button>
//     </div>
//   )
// }

// export default App

//ONCHANGE + USESTATE + INPUT

// import React, { useState } from 'react'

// const App = () => {
//   const [name , setName] = useState("")
//   return (
//     <div>
//       <input type="text"
//       onChange={(e) => setName(e.target.value)}
      
//       />
//       <h1>{name}</h1>
      
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import User from './user'

// const App = () => {
//   return (
//     <div>
//       <User name = "kangana" age={19}/>
//    </div>
    
//   )
// }

// export default App

// CONDITIONAL RENDERING

// import React, { useState } from 'react'

// const App = () => {
//   const [isLogin , setIsLogin] = useState(false)
//   return (
//     <div>
//       <h1>
//         {isLogin ? "WelcomeUser" : "Please login"}
//       </h1>

//       <button onClick={() =>setIsLogin(!isLogin)}>Login/Logout</button>
//     </div>
//   )
// }

// export default App

//2nd Example

// import { useState } from "react";

// function App() {
//   const [age, setAge] = useState(15);

//   return (
//     <div>
//       <h1>Age: {age}</h1>

//       {age >= 18 ? (
//         <h2>You can vote</h2>
//       ) : (
//         <h2>You cannot vote</h2>
//       )}
//     </div>
//   );
// }

// export default App;

//CONDITIONAL RENDERINF IF-ELSE

// import { useState } from "react";

// function App() {
//   const [isLogin, setIsLogin] = useState(false);

//   let message;

//   if (isLogin) {
//     message = <h1>Welcome User</h1>;
//   } else {
//     message = <h1>Please Login</h1>;
//   }

//   return (
//     <div>
//       {message}

//       <button onClick={() => setIsLogin(!isLogin)}>
//         Login / Logout
//       </button>
//     </div>
//   );
// }

// export default App;

//LISTS AND KEYS

// import React from "react";

// function App() {
//   const students = [
//     { id: 1, name: "Kangana", course: "CSE" },
//     { id: 2, name: "Riya", course: "IT" },
//     { id: 3, name: "Anjali", course: "CSE" }
//   ];

//   return (
//     <div>
//       {students.map((student) => (
//         <div key={student.id}>
//           <h2>{student.name}</h2>
//           <p>{student.course}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

//2ND EXAMPLE LISTS AND KEYS

// import React from "react";

// function App() {
//   const jobs = [
//     { id: 1, title: "Frontend Developer", company: "TCS" },
//     { id: 2, title: "Backend Developer", company: "Infosys" },
//     { id: 3, title: "Full Stack Developer", company: "Wipro" }
//   ];

//   return (
//     <div>
//       <h1>Available Jobs</h1>

//       {jobs.map((job) => (
//         <div key={job.id}>
//           <h2>{job.title}</h2>
//           <p>{job.company}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

//FORMS

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(name);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

//FORMS MULTIPLE INPUT

// import { useState } from "react";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter name"
//           value={formData.name}
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           value={formData.email}
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           value={formData.password}
//           onChange={handleChange}
//         />

//         <button type="submit">Register</button>

//       </form>
//     </div>
//   );
// }

// export default App;

//FORMS CHECKBOX + RADIO + SELECT

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [agree, setAgree] = useState(false);
//   const [gender, setGender] = useState("");
//   const [course, setCourse] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log({
//       name,
//       agree,
//       gender,
//       course
//     });
//   };

//   return (
//     <div>
//       <h1>Student Form</h1>

//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <br />
//         <br />

//         <p>Select Gender:</p>

//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="Male"
//             checked={gender === "Male"}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           Male
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="Female"
//             checked={gender === "Female"}
//             onChange={(e) => setGender(e.target.value)}
//           />
//           Female
//         </label>

//         <br />
//         <br />

//         <label>Select Course: </label>

//         <select
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//         >
//           <option value="">Select Course</option>
//           <option value="CSE">CSE</option>
//           <option value="IT">IT</option>
//           <option value="ECE">ECE</option>
//         </select>

//         <br />
//         <br />

//         <label>
//           <input
//             type="checkbox"
//             checked={agree}
//             onChange={(e) => setAgree(e.target.checked)}
//           />
//           I agree to the terms
//         </label>

//         <br />
//         <br />

//         <button type="submit">Submit</button>

//       </form>
//     </div>
//   );
// }

// export default App;

//FORM VALIDATION

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (name === "") {
//       setError("Name is required");
//       return;
//     }

//     if (email === "") {
//       setError("Email is required");
//       return;
//     }

//     setError("");
//     console.log("Form submitted");
//   };

//   return (
//     <div>
//       <h1>Registration Form</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <br />
//         <br />

//         <button type="submit">Submit</button>
//       </form>

//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default App;

//EXAMPLE-2 FORM VALIDATION

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (name === "") {
//       setError("Name is required");
//       return;
//     }

//     if (email === "") {
//       setError("Email is required");
//       return;
//     }

//     if (password === "") {
//       setError("Password is required");
//       return;
//     }

//     if (password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }

//     setError("");

//     console.log("Form submitted successfully");
//   };

//   return (
//     <div>
//       <h1>Registration Form</h1>

//       <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           placeholder="Enter name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <br />
//         <br />

//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <br />
//         <br />

//         <button type="submit">Register</button>
//       </form>

//       {error && <p>{error}</p>}
//     </div>
//   );
// }

// export default App;

//API CALL

// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>

//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// API INTEGRATION FETCH()+ASYNC AWAIT

// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);

//   const getUsers = async () => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );

//     const data = await response.json();

//     setUsers(data);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>

//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// API INTEGRATION ERROR-HANDLING

// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");

//   const getUsers = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       if (!response.ok) {
//         throw new Error("Something went wrong");
//       }

//       const data = await response.json();

//       setUsers(data);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>

//       {error && <p>{error}</p>}

//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

//LOADING STATE

// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const getUsers = async () => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       if (!response.ok) {
//         throw new Error("Something went wrong");
//       }

//       const data = await response.json();

//       setUsers(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error) {
//     return <h1>{error}</h1>;
//   }

//   return (
//     <div>
//       <h1>Users</h1>

//       {users.map((user) => (
//         <div key={user.id}>
//           <h2>{user.name}</h2>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

//AXIOS POST

// import axios from "axios";
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await axios.post(
//       "https://jsonplaceholder.typicode.com/users",
//       {
//         name: name,
//       }
//     );

//     console.log(response.data);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default App;

//AXIOS PUT/PATCH 

import axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const updateUser = async () => {
    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          name: name,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />

      <button onClick={updateUser}>Update</button>
    </div>
  );
}

export default App;