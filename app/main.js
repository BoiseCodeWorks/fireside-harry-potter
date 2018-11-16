import HPController from "./components/hp-controller.js";


class App {
  constructor() {
    this.controllers = {
      hpController: new HPController()
    }
  }
}

window.app = new App