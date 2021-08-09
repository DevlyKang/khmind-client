import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomGlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    background-color: #fafafa;
    ${ tw`antialiased` };
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <CustomGlobalStyles />
    </>
  );
};

export default GlobalStyles;
