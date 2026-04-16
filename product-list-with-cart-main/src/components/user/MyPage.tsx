interface MyPageProps {
  userId: string;
}

export const MyPage = ({ userId }: MyPageProps) => (
  <div className="box mb-4">
    {/* 일반 사용자 정보 영역 */}
    <h2 className="title is-5">MyPage</h2>
    <p>{userId}님 환영합니다.</p>
  </div>
);
