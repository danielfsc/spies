import { Disciplina } from "./../objetos/disciplina";
import { environment } from "./../../environments/environment";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  // baseURL = "http://localhost/crud";
  baseURL = environment.crudURL;
  disciplnas: Disciplina[];

  getDisciplinas(): Observable<any> {
    // console.log(this.baseURL);
    return this.http.get(`${this.baseURL}/list.php`).pipe(
      map(res => {
        // console.log(res);
        this.disciplnas = res["data"];
        return this.disciplnas;
      })
    );
  }

  getContent(id): Observable<any> {
    return this.http
      .get(`${this.baseURL}/conteudos.php?id=${id}`)
      .pipe(map(res => res["data"]));
  }
  saveContent(dados): Observable<any> {
    return this.http
      .post(`${this.baseURL}/conteudos.php`, { command: "update", data: dados })
      .pipe(
        map(res => {
          return res;
        })
      );
  }
  createContent(dados): Observable<any> {
    console.log({ command: "create", data: dados });
    return this.http
      .post(`${this.baseURL}/conteudos.php`, { command: "create", data: dados })
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
