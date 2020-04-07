import { Disciplina } from "./../objetos/disciplina";
import { Conteudo } from "./../objetos/conteudo";
import { DatabaseService } from "./../services/database.service";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-editarpalavras",
  templateUrl: "./editarpalavras.component.html",
  styleUrls: ["./editarpalavras.component.css"]
})
export class EditarpalavrasComponent implements OnInit {
  disciplinas: Disciplina;

  conteudos: Conteudo;
  words: string[];
  word = "";
  novoConteudo = "";
  salvar = {
    displinaId: null,
    conteudoId: null,
    conteudo: null,
    palavras: null
  };
  constructor(private dataBase: DatabaseService) {}

  ngOnInit() {
    this.dataBase.getDisciplinas().subscribe((res: Disciplina) => {
      this.disciplinas = res;
      // console.log(res);
    });
  }
  onDisciplineChange(i) {
    // console.log(i);
    if (i !== "0") {
      this.words = [];
      this.salvar.displinaId = i;
      this.updateContent();
    } else {
      this.conteudos = false;
    }
  }
  onContentChange(i) {
    // console.log(i);
    if (i === "-1") {
      this.words = [];
      this.salvar.conteudoId = null;
    } else {
      this.salvar.conteudoId = this.conteudos[i].id;
      this.salvar.conteudo = this.conteudos[i].conteudo;
      if (this.conteudos[i].palavras) {
        this.words = this.conteudos[i].palavras.split(";");
      }
      // console.log(this.words);
    }
  }
  deleteWord(i) {
    // console.log(i);
    this.words.splice(i, 1);
    // console.log(this.words);
  }
  changeWord(i) {
    this.word = this.words[i];
    this.words.splice(i, 1);
  }
  addWord() {
    if (this.word.trim() !== "") {
      if (this.words.indexOf(this.word.trim()) === -1) {
        this.words.push(this.word.trim());
        this.word = "";
      } else {
        alert("Essa palavra já existe.");
      }
    }
  }
  saveWords() {
    this.salvar.palavras = this.words.join(";");
    this.dataBase.saveContent(this.salvar).subscribe(res => {
      if (res.data === "ok") {
        alert("Dado salvo com sucesso!");
        this.updateContent();
      }
    });
  }
  addContent() {
    this.dataBase
      .createContent({
        disciplinaId: this.salvar.displinaId,
        conteudo: this.novoConteudo
      })
      .subscribe(res => {
        this.novoConteudo = "";
        this.updateContent();
      });
  }

  updateContent() {
    this.dataBase
      .getContent(this.salvar.displinaId)
      .subscribe((res: Conteudo) => {
        this.conteudos = res;
        this.salvar.conteudoId = null;
        this.salvar.conteudoId = null;
        // console.table(res);
      });
  }
}
