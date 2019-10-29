import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommandListComponent } from './command-list/command-list.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CommandListComponent },
      { path: 'results/:command.name', component: ResultsComponent },
    ])
  ],
  declarations: [
    ResultsComponent,
    AppComponent,
    TopBarComponent,
    CommandListComponent,
    ResultsComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
