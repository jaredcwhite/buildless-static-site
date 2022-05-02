import VanillaCompStyles from "./vanilla_comp.css" assert { type: "css" }

class VanillaComp extends HTMLElement {
  static styles = [VanillaCompStyles]

  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    this.shadowRoot.adoptedStyleSheets = this.constructor.styles
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <p>Rendering a vanilla web component. Totally rad!</p>
    `
  }
}

customElements.define("vanilla-comp", VanillaComp)