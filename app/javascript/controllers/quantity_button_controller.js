import { Controller } from "@hotwired/stimulus"
import { event } from "jquery";

export default class extends Controller {
  static targets = ["quantity","available","less","more","add","price"]

  initialize() {
    this.quantityTarget.innerHTML = 1
  }

  connect() {
    console.log("hello stimulus")
  }


  increment() {
    this.lessTarget.style.color = '#ff6161'
    if (this.quantityTarget.innerHTML < parseInt(this.availableTarget.innerHTML)) {
      this.quantityTarget.innerHTML++
      console.log(parseFloat(this.priceTarget.innerHTML)*(parseFloat(this.quantityTarget.innerHTML)))
      this.priceTarget.innerHTML = (parseFloat(this.priceTarget.innerHTML) * (parseFloat(this.quantityTarget.innerHTML))).toFixed(2) + " €";

      if (parseInt(this.quantityTarget.innerHTML) === parseInt(this.availableTarget.innerHTML)) {
        this.moreTarget.style.color = 'rgb(180,180,180)';
      }
    }
  }

  decrement() {
    this.moreTarget.style.color = '#ff6161'
    if (this.quantityTarget.innerHTML > 1) {
      this.quantityTarget.innerHTML--;
      console.log(parseInt(this.priceTarget.innerHTML)*(parseInt(this.quantityTarget.innerHTML)))
      this.priceTarget.innerHTML = (parseFloat(this.priceTarget.innerHTML) * (parseFloat(this.quantityTarget.innerHTML))).toFixed(2) + " €";
      if (parseInt(this.quantityTarget.innerHTML) <= 1) {
        this.lessTarget.style.color = 'rgb(180,180,180)';
      }
    }
  }
}