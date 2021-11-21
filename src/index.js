import QuillEditor from "./quill";
import Ydoc from "./ydoc";

window.addEventListener('load', () => {
  const container = document.getElementById('editor');
  const quillEditor = new QuillEditor(container);
  const ydoc = new Ydoc();
  ydoc.bindEditor(quillEditor.load());
})

