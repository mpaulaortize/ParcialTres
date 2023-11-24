import "./components/export"
import { User } from "../../types/products";

const userInputs: User = {
    name: "",
    color: "",
    letter: "",
};

export class Form extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const labelName = this.ownerDocument.createElement("label");
        labelName.textContent = "Name";
        const Name = this.ownerDocument.createElement("input");
        

        const labelColor = this.ownerDocument.createElement("label");
        labelColor.textContent = "Color";
        const color = this.ownerDocument.createElement("input");

        const labelletter = this.ownerDocument.createElement("label");
        labelletter.textContent = "letter";
        const letter = this.ownerDocument.createElement("input");


        const btn = this.ownerDocument.createElement("button");
        btn.textContent = "Start";

        this.shadowRoot?.appendChild(labelName);
        this.shadowRoot?.appendChild(Name);
        this.shadowRoot?.appendChild(labelColor);
        this.shadowRoot?.appendChild(color);
        this.shadowRoot?.appendChild(labelletter);
        this.shadowRoot?.appendChild(letter);

        this.shadowRoot?.appendChild(letter);
    }
    
}

customElements.define('app-form', Form)