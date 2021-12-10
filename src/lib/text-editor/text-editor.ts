export type EditorOptions = {
  el: HTMLElement,
  height?: string,
  width?: string,
};

export class TextEditor {
  private readonly container: HTMLElement;
  private readonly editorEl: HTMLDivElement;

  constructor(options: EditorOptions) {
    if (!options.el) {
      throw new Error('options.el은 필수야');
    }

    this.container = options.el;

    this.container.className = 'text-editor';
    this.container.style.width = options.width ?? '100%';
    this.container.style.height = options.height ?? '500px';

    this.editorEl = document.createElement('div');
    this.editorEl.contentEditable = 'true';
    this.editorEl.className = 'text-editor__editor';

    this.container.append(this.editorEl);
  }

  /**
   * @description 에디터 전체 element 가져오기
   * */
  getElement() {
    return this.container;
  }

  /**
   * @description 텍스트 에디터 텍스트 가져오기
   * */
  getHTML() {
    return this.editorEl.innerHTML;
  }
}
