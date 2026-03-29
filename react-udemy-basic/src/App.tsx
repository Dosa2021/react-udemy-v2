import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export default function App() {
  const [num, setNum] = useState(0);

  const onClickCountUp = () => {
    // Note: このように書いても「1」ずつしか足されない
    // setNum(num + 1);
    // setNum(num + 1);

    // Note: こう書くと「2」ずつしか足される
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <>
      {/* スタイル */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか？">
        お元気ですか???
      </ColorfulMessage>
      {/* イベント */}
      <button onClick={onClickCountUp}>ボタン</button>
      <p>{num}</p>
    </>
  );
}
