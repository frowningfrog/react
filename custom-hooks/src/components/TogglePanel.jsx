import useToggle from "../hooks/useToggle";

function TogglePanel() {
  const [user, handleClick] = useToggle(false);

  return (
    <div>
      <h2>greetings {user ? "users" : "programs"}</h2>
      <button onClick={handleClick}>{user ? "unverify" : "verify"}</button>

      {user && <p>You're now a verified user.</p>}
    </div>
  );
}

export default TogglePanel;
