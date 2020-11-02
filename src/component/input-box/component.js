
import Component from "../../modules/component";
import twig from "./template.twig"
import "./style.scss";

export default class InputBox extends Component{

    get viewModel(){
        // read the filename from the filename data attribute
        let input = this.element.value;
       
        return {input};
    }
    
    onRender(){
    	this.element.querySelector('.submit-button').addEventListener('click', (event)=>{
            console.log(event)
            //document.getElementById('file-reader-1').innerHTML = "<b>" + this.input.value + "</b>"; 
            document.getElementById('file-reader-1').innerHTML = "<b>HELLO</b>"; // OK
           
    });
    // onRender(){
//     	this.element.querySelector('.submit-button').addEventListener('click', (event)=>{
//             console.log(event)
//             //document.getElementById('file-reader-1').innerHTML = "<b>" + this.input.value + "</b>"; 
//             document.getElementById('file-reader-1').innerHTML = viewModel.input + "<b>HELLO</b>"; // OK
//            
//         });
        
//         this.element.querySelector('.submit-button').addEventListener('click', (event)=>{
//             console.log(event)
//             document.getElementById('file-reader-1').innerHTML = "<b>HELLO</b>";
//         });
    	// this.element.querySelector('.submit-button').addEventListener('click', (event)=>{
//             console.log(event)
//             document.getElementById('file-reader-1').filecontent = "<b>" + document.getElementById('input-box').value + "</b>";
//         });
        
    }
    
    
}

InputBox.twig = twig;
