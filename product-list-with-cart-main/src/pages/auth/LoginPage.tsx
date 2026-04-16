import { FormEvent, useState } from "react";

import { AuthStatusPage } from "../../components/auth/AuthStatusPage";
import { useAuthStore } from "../../store/authStore";

export const LoginPage = () => {
  const login = useAuthStore((state) => state.login);
  const authResult = useAuthStore((state) => state.authResult);
  const clearAuthResult = useAuthStore((state) => state.clearAuthResult);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await login(id, password);
  };

  if (authResult && authResult.type === "error") {
    return <AuthStatusPage result={authResult} onConfirm={clearAuthResult} />;
  }

  return (
    <div className="container is-max-desktop p-6">
      <div className="box">
        <h1 className="title is-3 mb-5">로그인</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">아이디</label>
            <div className="control">
              <input
                className="input"
                value={id}
                onChange={(event) => setId(event.target.value)}
                placeholder="5자 이상 (테스트 계정: user/admin)"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">비밀번호</label>
            <div className="control">
              <input
                type="password"
                className="input"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="4자 이상"
              />
            </div>
          </div>

          <button type="submit" className="button is-primary is-fullwidth mt-4">
            로그인
          </button>
        </form>

        <div className="content mt-5">
          <p className="mb-1">테스트 계정</p>
          <ul>
            <li>id: user / password: 1234</li>
            <li>id: admin / password: 1234</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
