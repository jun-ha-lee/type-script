import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = { // DefaultTheme의 타입을 가지게 된다 (styled.d.ts파일)
  bgColor: '#fff',
  textColor: '#000',
  btnColor: 'tomato'
}

export const darkTheme: DefaultTheme = {
  bgColor: '#000',
  textColor: '#fff',
  btnColor: 'teal'
}