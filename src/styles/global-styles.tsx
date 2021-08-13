import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import tw from 'twin.macro';

const CustomGlobalStyles = createGlobalStyle`
  ${ reset }
  body {
    font-size: 16px;
    background-color: #fafafa;
    ${ tw`antialiased` };
  }

  * {
    ${ tw`font-sans` };
  }
`;

const GlobalStyles = () => {
  return <CustomGlobalStyles />;
};

export default GlobalStyles;
