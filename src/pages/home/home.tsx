import React from 'react';

import { useHome } from '@khl/hooks';

import '@khl/lib/text-editor/text-editor.css';

function HomePages() {
  const { editorRef, onClick } = useHome();

  return (
    <>
      <div ref={ editorRef } />
      <button onClick={ onClick }>텍스트 가져오기</button>
    </>
  );
}

export default HomePages;
