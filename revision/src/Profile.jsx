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

import { useUserStore } from "./store/useUserStore";

function Profile() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  return (
    <div>
      <h2>Profile: {user}</h2>

      <button onClick={() => setUser("Rahul")}>
        Change User
      </button>
    </div>
  );
}

export default Profile;