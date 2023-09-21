import { Link } from "react-router-dom";

export default function TestPage() {
  return (
    <>
      <h1>
        <Link to="/omok">오목판 테스트</Link>
      </h1>
      <h1>
        <Link to="/clock">시계 테스트</Link>
      </h1>
      <h1>
        <Link to="/button">버튼 테스트</Link>
      </h1>
      <h1>
        <Link to="/pin">핀 테스트</Link>
      </h1>
    </>
  );
}
