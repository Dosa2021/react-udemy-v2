export default function App() {
  const onClickBtn = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "20px",
  };

  return (
    <>
      {/* スタイル */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>お元気ですか</p>
      {/* イベント */}
      <button onClick={onClickBtn}>ボタン</button>
    </>
  );
}
