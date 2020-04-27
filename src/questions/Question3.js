import React, { useState } from "react";
import Header from "../Header";

const Mago = ({ money }) => <p>{money}円</p>;

const Kodomo = ({ money }) => <Mago money={money} />;

// Question3-1: useContextを使って、propsのバケツリレーを解消
const Question3 = () => {
  const [money] = useState(10000);
  return (
    <>
      <Header />
      <Kodomo money={money} />
    </>
  );
};

export default Question3;
