import { useState } from "react";
import styled from "styled-components"

interface ContainerProps { // interface는 object가 어떤식으로 보여질지 설명하는것
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`// <Container>가 bgColor, borderColor를 받을것이다
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor}; // App에 있는 컬러
  border-radius: 100px;
  border: 1px solid ${props => props.borderColor}; // App에 있는 컬러
`;

interface CircleProps { // interface지정, 이름은 아무렇게나 지어도 된다
  bgColor: string;
  borderColor?: string; // borderColor는 필수가 아닌 옵션이 되었다 (물음표만 추가)
  text?: string;
}

function Circle({ bgColor, borderColor, text = 'default text' }: CircleProps) { // Circle컴포넌트를 App.tsx에 넘기는데 bgColor가 뭔지 모르기때문에 CircleProps인터페이스 지정
  // typescript는 bgColor가 뭔지 모르기 때문에 interface를 해야한다
  // text가 App에서 없다면 기본값으로 default text가 나온다. App에 있다면 App에 있는 글자가 나온다(js구문)

  // useState********************************************************************
  // const [counter, setCounter] = useState<number | string>(1); // 초기값을 숫자 혹은 문자로 정한다
  // setCounter(2); // 맞음
  // setCounter(); // 숫자 혹은 문자가 아니라서 에러 발생

  return <Container bgColor={bgColor} borderColor={borderColor ?? 'blue'}>
    {text}
  </Container>; // <Container>가 bgColor을 넘기는데 뭔지 모르기 때문에 ContainerProps인터페이스 지정
  // borderColor가 undefined상태라면 blue로 지정
  /*
  ?? (Null 병합 연산자 (Nullish coalescing operator))

  ??앞에 값이 null이거나 undefined이면 오른쪽 값을, 그렇지 않으면 왼쪽 값을 반환하는 논리연산자

  null ?? "hello" // "hello"
  undefined ?? "hello" // "hello"
  "hi" ?? "hello" // "hi"

  */
}

export default Circle;