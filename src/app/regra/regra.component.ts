import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-regra",
  templateUrl: "./regra.component.html",
  styleUrls: ["./regra.component.css"]
})
export class RegraComponent implements OnInit {
  cartas = true;
  constructor() {}

  ngOnInit() {
    this.cartas = false;
  }
}
