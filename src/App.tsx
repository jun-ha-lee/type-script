import styled from "styled-components";
import { useState } from "react";
import Circle from "./Circle";

// const Title = styled.h1`
//   color: ${(props) => props.theme.textColor};
// `;

// const Wrapper = styled.div`
//   display: flex;
//   height: 100vh;
//   width: 100vw;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.backgroundColor};
// `;

const Container = styled.div`
  background-color: ${props => props.theme.bgColor}
`;

const H1 = styled.h1`
  color: ${props => props.theme.textColor};
`;

function App() {
  const [userName, setUserName] = useState<number | string>(''); // 숫자 혹은 문자만 useState<number | string>
  function onChange(e: React.FormEvent<HTMLInputElement>) { // e는 any타입이므로 타입을 정해줘야 한다
    // onChange함수는 HTMLInputElement에 의해서 실행된다
    console.log(e.currentTarget.value); // currentTarget은 Target과 같음
    const { currentTarget: { value }, } = e; // ES6 문법
    setUserName(value);


    /*
    currentTarget안에서 value, tagName, width, id 이 4개를 가져오고 싶다고 하면 기존 문법으로는 이렇게 써야 되겠죠?

const value = event.currentTarget.value;
const tagName = event.currentTarget.tagName;
const width = event.currentTarget.width;
const id = event.currentTarget.id;

=> 아래와 같이 바꿀수있음(ES6)

const {
currentTarget: {value, tagName, width, id}
} = event;

event 안에 있는 속성만 가져와 변수를 만들려고 하면 하면 그냥 const { x, y } = event; 이렇게 됩니다.

const x = event.x;
const y = event.y;

    */
  }
  console.log(userName);


  // submit
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // 새로고침 방지
    console.log(userName);
  }

  return (
    // <Wrapper>
    //   <Title>Hello</Title>
    // </Wrapper>
    <div>
      <Circle bgColor='tomato' borderColor="black" text='hello' />
      <Circle bgColor='teal' />
      <div>
        <form onSubmit={onSubmit}>
          <input type='text' placeholder="username" value={userName} onChange={onChange} />
          <button>Log in</button>
        </form>
      </div>
      <div>
        <Container>
          <H1>hello</H1>
        </Container>
      </div>
    </div>
  );
}

export default App;