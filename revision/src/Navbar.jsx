// function Navbar({ user }) {
//   return <h2>Welcome, {user}</h2>;
// }

// export default Navbar;

//ZUSTAND

// import { useUserStore } from "./store/useUserStore";

// function Navbar() {
//   const user = useUserStore((state) => state.user);

//   return <h2>Welcome, {user}</h2>;
// }

// export default Navbar;

//REDUX TOOLKIT

import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.user.name);

  return <h2>Welcome, {user}</h2>;
}

export default Navbar;