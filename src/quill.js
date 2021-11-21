import Quill from 'quill';
import QuillCursors from "quill-cursors";

class QuillEditor {
  #container;
  #toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    // array for drop-downs, empty array = defaults
    [{ 'size': [] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['image', 'video'],
    ['clean']                                         // remove formatting button
  ];
  constructor(container) {
    this.#container = container;
    this.#register();
  };

  #register = () => {
    Quill.register('modules/cursors', QuillCursors);
  }

  load() {
    return new Quill(this.#container, {
      modules: {
        cursors: true,
        toolbar: this.#toolbarOptions,
        history: {
          userOnly: true
        }
      },
      placeholder: 'just type anything...',
      theme: 'snow'
    });
  }
}

export default QuillEditor;