import type { AuthResult } from "../../types/auth";

interface AuthStatusPageProps {
  result: AuthResult;
  onConfirm: () => void;
}

export const AuthStatusPage = ({ result, onConfirm }: AuthStatusPageProps) => {
  const isSuccess = result.type === "success";

  return (
    <div className="container is-max-desktop p-6">
      <div className="box has-text-centered">
        <div className="title is-3">{isSuccess ? "✅ 완료" : "❌ 에러"}</div>
        <p className="mb-5">{result.message}</p>
        <button className="button is-primary" onClick={onConfirm}>
          확인
        </button>
      </div>
    </div>
  );
};
