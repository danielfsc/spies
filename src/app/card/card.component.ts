import { MasterService } from "./../services/master.service";
import { ScoreService } from "./../services/score.service";
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() word: string;
  @Input() number: number;
  @Input() group: string;
  @Input() front: boolean;
  getMaster: Subscription;

  constructor(
    private score: ScoreService // private masterService: MasterService
  ) {
    // this.getMaster = this.masterService
    //   .getMaster()
    //   .subscribe(master => (this.front = master));
  }

  ngOnInit() {
    console.log(this.front);
    // this.eventsSubscription = this.events.subscribe(value => this.front);
  }

  ngOnDestroy() {
    // this.getMaster.unsubscribe();
    this.front = true;
  }

  toogle(color) {
    if (this.front) {
      this.score.setScore(color);
      this.front = !this.front;
    }
  }
}
