function Profile({ user, setUser }) {
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