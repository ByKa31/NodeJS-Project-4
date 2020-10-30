// we are importing our components
import InputBox from "./component/input-box/component";
import MyComponent from "./component/my-component/component";
import FileReader from "./component/file-reader/component";

// we bind our components to existing html elements, and renders tham
InputBox.bind(document.getElementById('input-box')).render();
MyComponent.bind(document.getElementById('my-component')).render();
FileReader.bind(document.getElementById('file-reader-1')).render();
FileReader.bind(document.getElementById('file-reader-2')).render();
