import React from 'react';
import tw, { css, theme } from 'twin.macro';

function HomePages() {
  return (
    <>
      <h1
        css={ [
          css({
            color: `${ theme`colors.mokoko` }`,
          }),
        ] }
      >
        Mokoko
      </h1>
    </>
  );
}

export default HomePages;
