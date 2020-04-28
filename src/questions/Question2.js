import React, { useState } from "react";
import Header from "../Header";

const Question2 = () => {
  const [count, setCount] = useState(0);

  // Question2-1: useEffectを使って、画面がレンダリングされる度に、コンソールログに'monty!!!'を表示する

  // Question2-2: useEffectを使って、最初の画面レンダリング時のみ、コンソールログに'dolly!!!'を表示する

  // Question2-3: useEffectを使って、初回レンダリング時とcountの値が変更されたときのみ、コンソールログに'pan!!!'を表示する
  // ※動作確認のためにcount以外の変数を用意して、その変数の値が変わったときに、'pan！！！'が表示されないことを確認する

  return (
    <>
      <Header />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

export default Question2;
