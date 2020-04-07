import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MasterService {
  private subject = new Subject<any>();

  public master = false;

  constructor() {}
  changeMaster() {
    this.master = !this.master;
    this.subject.next(this.master);
  }
  setMaster(bool) {
    this.master = bool;
    this.subject.next(this.master);
  }
  // setScore(color) {
  //   if (color === "blue" || color === "red") {
  //     this.score[color] = this.score[color] + 1;
  //   } else if (color === "assassin") {
  //     alert(
  //       "OPS! Você acertou o assassino. Seu time perdeu!\n Escolham um novo código e recomecem a partida."
  //     );
  //   }
  //   this.subject.next(this.score);
  // }
  // resetScore() {
  //   this.score = { blue: 0, red: 0 };
  //   this.subject.next(this.score);
  // }
  getMaster(): Observable<any> {
    return this.subject.asObservable();
  }
}
