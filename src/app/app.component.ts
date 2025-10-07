import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ResaltarDirective } from "./directives/resaltar.directive";
import { SubrayarDirective } from "./directives/subrayar.directive";

@Component({
  selector: "app-root",
  imports: [ResaltarDirective, SubrayarDirective],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})

export class AppComponent {
  title = "directivaPersonalizada";
}