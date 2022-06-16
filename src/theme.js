import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  a {
    color: ${({ theme }) => theme.link};
  }

  .icon {
    color: ${({ theme }) => theme.text};
  }
`;
export const lightTheme = {
  body: '#F7F7F7',
  text: '#404040',
  link: '#747474',
};
export const darkTheme = {
  body: '#22272E',
  text: '#f1f1f1',
  link: '#efeff0',
};