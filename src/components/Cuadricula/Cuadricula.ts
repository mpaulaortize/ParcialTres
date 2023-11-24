import "./components/export"


export class Cuadricula extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        
        const A1 = this.ownerDocument.createElement("div");
        const A2 = this.ownerDocument.createElement("div");
        const A3 = this.ownerDocument.createElement("div");
        const A4 = this.ownerDocument.createElement("div");

        this.shadowRoot?.appendChild(A1);
        this.shadowRoot?.appendChild(A2);
        this.shadowRoot?.appendChild(A3);
        this.shadowRoot?.appendChild(A4);
    }
    
}

customElements.define('app-cuadricula', Cuadricula)