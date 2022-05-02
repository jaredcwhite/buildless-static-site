import { LitElement, html } from "lit"
import LitCompStyles from "./lit_comp.css" assert { type: "css" }

class LitComp extends LitElement {
  static styles = [LitCompStyles]

  render() {
    return html`
      <p>Rendering a Lit component. This is cool!</p>
    `
  }
}

customElements.define("lit-comp", LitComp)
