import { MasterService } from "./../services/master.service";
import { DatabaseService } from "./../services/database.service";
import { Conteudo } from "./../objetos/conteudo";
import { ScoreService } from "./../services/score.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject, throwError, Observable, Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-jogo",
  templateUrl: "./jogo.component.html",
  styleUrls: ["./jogo.component.css"]
})
export class JogoComponent implements OnInit, OnDestroy {
  seedobja = 1103515245;
  seedobjc = 12345;
  seedobjm = 4294967295;
  seed = [0];
  codeSeed = 0;
  words: string[] = [];
  getScore: Subscription;
  score = { blue: 0, red: 0 };
  groups: string[] = [];
  text: string[];
  start: string;
  numbers: number[] = [];
  contents: any;
  clean = true;
  master = false;

  constructor(
    private scoreService: ScoreService,
    private route: ActivatedRoute,
    private dataBase: DatabaseService,
    private router: Router // private masterService: MasterService
  ) {
    this.getScore = this.scoreService.getScore().subscribe(score => {
      this.score = score;
      if ((score.blue === 8 && this.start === "red") || score.blue === 9) {
        alert("Time AZUL venceu!");
        // console.log("teste");
      } else if (
        (score.red === 8 && this.start === "blue") ||
        score.red === 9
      ) {
        alert("Time VERMELHO venceu!");
      }
    });
  }

  ngOnInit() {
    // console.log("Pegando os dados");
    this.route.params.subscribe((params: any) => {
      // console.log("recebi os dados");
      this.loadContent(params.id);

      this.codeSeed = params.code ? params.code : 0;
    });
    // this.restart();
    // the.score.
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.getScore.unsubscribe();
  }

  showMestre() {
    this.master = !this.master;
    // this.masterService.changeMaster();
  }
  generateRand(a) {
    // console.log(a);
    return Math.floor(this.srandom(this.seed) * a);
  }
  montaGroup() {
    this.groups = [];
    this.groups.push("assassin");
    this.start = this.generateRand(2) === 0 ? "blue" : "red";
    this.groups.push(this.start);
    for (let i = 0; i < 8; i++) {
      this.groups.push("blue");
    }
    for (let i = 0; i < 8; i++) {
      this.groups.push("red");
    }
    for (let i = 0; i < 7; i++) {
      this.groups.push("civilian");
    }
  }

  setWords() {
    this.text = [];
    // console.log(this.words);
    for (let i = 0; i < 25; i++) {
      let rand = this.generateRand(this.words.length);
      // console.log(rand);
      while (this.text.indexOf(this.words[rand]) >= 0) {
        rand = this.generateRand(this.words.length);
        // console.log(rand);
      }
      this.text.push(this.words[rand]);
      // console.log(this.words[rand]);
    }
  }

  shuffle() {
    let temp = 0;
    this.groups.forEach((value, index) => {
      this.groups[index] = this.groups[(temp = this.generateRand(25))];
      this.groups[temp] = value;
    });
  }
  restart() {
    // console.log("Mandando o sinal do master");
    this.master = false;
    // console.log("Sinal enviado");
    // this.clean = false;
    // console.log(!this.clean);
    this.seed[0] = this.codeSeed;
    this.scoreService.resetScore();
    this.setWords();
    this.montaGroup();
    this.shuffle();
    this.clean = true;
  }
  loadContent(id: number) {
    this.dataBase.getContent(id).subscribe((res: Conteudo) => {
      this.contents = res;
      this.onContentChange(0);
    });
  }
  onPlay() {
    this.master = false;
    this.clean = false;
    this.delay(150).then(a => {
      this.restart();
    });
  }
  setContents(pos) {
    // console.log(this.contents);
  }
  onContentChange(id) {
    this.words = this.contents[id]
      ? this.contents[id].palavras.split(";")
      : null;
    if (this.words) {
      this.restart();
    }
  }
  onCodeChange() {
    // console.log(this.router.onSameUrlNavigation);
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate(["jogo", 1, 0, this.codeSeed]);
  }

  newseed(seednum) {
    return [seednum];
  }

  // Works like Math.random(), except you provide your own seed as the first argument.
  srandom(seedobj) {
    seedobj[0] = (seedobj[0] * this.seedobja + this.seedobjc) % this.seedobjm;
    return seedobj[0] / (this.seedobjm - 1);
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() =>
      console.log("fired")
    );
  }
}
