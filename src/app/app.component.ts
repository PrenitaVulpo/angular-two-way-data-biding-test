import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  username: string = "";

  toggleButton() {
    if (this.username) {
      return false;
    }

    return true;
  }

  clearUsername() {
    this.username = "";
  }
}
