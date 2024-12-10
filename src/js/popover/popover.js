export class Popover {
  constructor (parentElem) {
    this.parentElem = parentElem
    this.bindtoDOM = this.bindtoDOM.bind(this)
  }

  bindtoDOM () {
    const btn = document.createElement("button")
    btn.classList.add("clicker_button")
    btn.textContent = "CLICK HERE"

    const popover = document.createElement('div')
    popover.classList.add("popover")
    popover.classList.add("unvisible")
    popover.innerHTML = "<h3>Title</h3><p>text popover</p>"

    this.parentElem.appendChild(btn)
    this.parentElem.appendChild(popover)


    btn.addEventListener("click", () => {
      popover.classList.toggle("unvisible")
    })
  }

}