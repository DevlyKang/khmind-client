import { useEffect, useRef } from 'react';
import { TextEditor } from '@khl/lib';

let Editor: TextEditor;

export function useHome() {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      Editor = new TextEditor({ el: editorRef.current, width: '300px', height: '300px' });
    }
  }, []);

  function onClick() {
    console.log(Editor.getElement());
    console.log(Editor.getHTML());
  }

  return {
    editorRef,
    onClick,
  } as const;
}
