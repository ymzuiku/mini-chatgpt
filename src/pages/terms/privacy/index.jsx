import { useEffect, useState } from "react";

export default function Privacy() {
  const [num, setNum] = useState(0);

  const handleAddNum = () => {
    setNum((v) => v + 1);
  };
  useEffect(() => {
    console.log("componentDidMount");
    return () => {
      console.log("componentWillUnMount");
    };
  }, []);

  useEffect(() => {
    console.log("didUpdate");
  }, [num]);

  console.log("render");

  return (
    <div>
      <div>Privacy: {num}</div>
      <button onClick={handleAddNum}>add num</button>
    </div>
  );
}
