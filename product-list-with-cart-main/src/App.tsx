import { AuthStatusPage } from "./components/auth/AuthStatusPage";
import { AdminPage } from "./components/user/AdminPage";
import { MyPage } from "./components/user/MyPage";
import { Cart } from "./pages/Cart";
import { LoginPage } from "./pages/auth/LoginPage";
import { DessertList } from "./pages/DessertList";
import { useAuthStore } from "./store/authStore";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const authResult = useAuthStore((state) => state.authResult);
  const clearAuthResult = useAuthStore((state) => state.clearAuthResult);
  const userId = useAuthStore((state) => state.userId);
  const role = useAuthStore((state) => state.role);
  const logout = useAuthStore((state) => state.logout);
  const refreshAccessToken = useAuthStore((state) => state.refreshAccessToken);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  if (authResult && authResult.type === "success") {
    return <AuthStatusPage result={authResult} onConfirm={clearAuthResult} />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <h1 className="title is-4">Dessert Shop</h1>
        <div className="buttons">
          <button className="button is-info is-light" onClick={() => void refreshAccessToken()}>
            Access 갱신
          </button>
          <button className="button is-danger is-light" onClick={logout}>
            로그아웃
          </button>
        </div>
      </div>

      {userId ? <MyPage userId={userId} /> : null}
      {role === "admin" ? <AdminPage /> : null}

      <div className="is-flex-desktop is-flex-wrap">
        <DessertList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
