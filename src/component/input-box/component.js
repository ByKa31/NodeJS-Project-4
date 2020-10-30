
import Component from "../../modules/component";
import twig from "./template.twig"
import "./style.scss";

export default class InputBox extends Component{

    get viewModel(){
        // read the filename from the filename data attribute
        let input = this.element.value;
       
        return {input};
    }
}

InputBox.twig = twig;