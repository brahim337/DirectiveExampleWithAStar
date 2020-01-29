import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "SternDirective";
  makeItBig = false;

  changeIt() {
    console.log(this.makeItBig);
    this.makeItBig = !this.makeItBig;
  }
}
