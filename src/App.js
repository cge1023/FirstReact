import "./App.css";
import Box from "./component/Box";
import { useState, useEffect } from "react";

function App() {
  let counter = 0;

  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);

  const increase = () => {
    counter = counter + 1;
    // setCounter2(counter2 + 1);
    setValue(value + 2);
    console.log("counter는", counter, "counter2 state는", counter2);
  };

  //1. 유저가 버튼을 클릭한다.
  //2. counter+1해서 1이됨
  //3. setState 함수호출
  //4. console.log 실행됨
  // 변수값은 1로 보이고 state값은 아직 안변했기 때문에 그 전에 값이 보인다
  // 함수 끝
  // app 다시 re-render
  // let counter = 0 을 거치면서 counter 값은 다시 0으로 초기화가 된다
  // 업데이트된 state값이 보인다
  // 변수는 re-render될때마다 초기화가 된다
  // state값은 비동기적으로 처리된다

  useEffect(() => {
    console.log("useEffect1");
  },[])
  // 배열에 아무것도 없으면 componentDidMount()처럼 작동
  useEffect(() => {
    console.log("useEffect2", counter2, value);
  },[counter2])
  // 배열 안에 state가 있으면 componentDidMount() + componentDidUpdate()
  // 의존성 배열에 있는 값 중 하나라도 변하면 useEffect가 호출이 된다

  useEffect(() => {
    console.log("useEffect3")
  },[value])
  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>state: {counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
