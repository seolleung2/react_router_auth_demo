import { useAuth } from "../../hooks/useAuth";

export default function ProfilePage() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>This is a Profile page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
