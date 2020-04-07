import { StartComponent } from "./start/start.component";
import { JogoComponent } from "./jogo/jogo.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegraComponent } from "./regra/regra.component";
import { EditarpalavrasComponent } from "./editarpalavras/editarpalavras.component";
import { EditarimagensComponent } from "./editarimagens/editarimagens.component";

const routes: Routes = [
  { path: "", component: EditarimagensComponent },
  { path: "contentEdition", component: EditarpalavrasComponent },
  { path: "jogo", component: JogoComponent },
  { path: "jogo/:id", component: JogoComponent },
  // { path: "jogo/:id/:content/:code", component: JogoComponent },
  { path: "regra", component: RegraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
