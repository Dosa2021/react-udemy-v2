import { ColorfulMessage } from "./components/ColorfulMessage";

export default function App() {
  const onClickBtn = () => alert();

  return (
    <>
      {/* スタイル */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか？">
        お元気ですか???
      </ColorfulMessage>
      {/* イベント */}
      <button onClick={onClickBtn}>ボタン</button>
    </>
  );
}
