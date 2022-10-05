import styled from "styled-components"

interface ContainerProps { // interface는 object가 어떤식으로 보여질지 설명하는것
  bgColor: string;
}

const Container = styled.div<ContainerProps>`// <Container>가 bgColor를 받을것이다
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps { // interface지정, 이름은 아무렇게나 지어도 된다
  bgColor: string;
  borderColor?: string; // borderColor는 필수가 아닌 옵션이 되었다 (물음표만 추가)
}

function Circle({ bgColor }: CircleProps) { // Circle컴포넌트를 App.tsx에 넘기는데 bgColor가 뭔지 모르기때문에 CircleProps인터페이스 지정
  // typescript는 bgColor가 뭔지 모르기 때문에 interface를 해야한다
  return <Container bgColor={bgColor} />; // <Container>가 bgColor을 넘기는데 뭔지 모르기 때문에 ContainerProps인터페이스 지정
}

export default Circle;