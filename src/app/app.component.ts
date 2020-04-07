import { Disciplina } from "./objetos/disciplina";
import { DatabaseService } from "./services/database.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "spies";
  show = false;
  disciplinas: Disciplina;
  constructor(private dataBase: DatabaseService) {}

  ngOnInit() {
    this.dataBase.getDisciplinas().subscribe((res: Disciplina) => {
      this.disciplinas = res;
    });
  }
  close() {
    alert("fechou");
  }
}
