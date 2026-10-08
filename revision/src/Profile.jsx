// function Profile({ user, setUser }) {
//   return (
//     <div>
//       <h2>Profile: {user}</h2>

//       <button onClick={() => setUser("Rahul")}>
//         Change User
//       </button>
//     </div>
//   );
// }

// export default Profile;

//CONTEXT API

// import { useContext } from "react";
// import { UserContext } from "./UserContext";

// function Profile() {
//   const { user, setUser } = useContext(UserContext);

//   return (
//     <div>
//       <h2>Profile: {user}</h2>

//       <button onClick={() => setUser("Rahul")}>
//         Change User
//       </button>
//     </div>
//   );
// }

// export default Profile;

//ZUSTAND

// import { useUserStore } from "./store/useUserStore";

// function Profile() {
//   const user = useUserStore((state) => state.user);
//   const setUser = useUserStore((state) => state.setUser);

//   return (
//     <div>
//       <h2>Profile: {user}</h2>

//       <button onClick={() => setUser("Rahul")}>
//         Change User
//       </button>
//     </div>
//   );
// }

// export default Profile;

//REDUX TOOLKIT

import { useSelector, useDispatch } from "react-redux";
import { changeUser } from "./userSlice";

function Profile() {
  const user = useSelector((state) => state.user.name);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Profile: {user}</h2>

      <button onClick={() => dispatch(changeUser("Rahul"))}>
        Change User
      </button>
    </div>
  );
}

export default Profile;