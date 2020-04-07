import { MasterService } from "./services/master.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertModule } from "ngx-bootstrap/alert";
import { ScoreService } from "./services/score.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BootstrapModule } from "./modules/bootstrap.module";
import { CardComponent } from "./card/card.component";
import { JogoComponent } from "./jogo/jogo.component";
import { RegraComponent } from "./regra/regra.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";

import { HttpClientModule } from "@angular/common/http";
import { StartComponent } from "./start/start.component";
import { EditarpalavrasComponent } from "./editarpalavras/editarpalavras.component";
import { EditarimagensComponent } from './editarimagens/editarimagens.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    JogoComponent,
    RegraComponent,
    StartComponent,
    EditarpalavrasComponent,
    EditarimagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    AlertModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [ScoreService, MasterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
