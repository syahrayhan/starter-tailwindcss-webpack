class HelloWorld extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */ `
    <h1 class="mx-auto my-4 py-4 text-center shadow-lg text-3xl text-blue-700 w-1/2">Hello, World!</h1> ` // use tailwind css utility classes
  }
}

customElements.define('hello-world', HelloWorld)
