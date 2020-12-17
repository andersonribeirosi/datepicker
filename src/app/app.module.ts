import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localePt);
import {NgbDatePTParserFormatter} from 'src/app/services/NgbDatePTParserFormatter'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[],
  providers: [
    [{ provide: LOCALE_ID, useValue: 'pt'}],
    [{provide: NgbDateParserFormatter, useClass: NgbDatePTParserFormatter}],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
