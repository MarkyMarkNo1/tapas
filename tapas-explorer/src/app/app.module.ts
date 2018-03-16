import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TapasService } from './services/tapas.service';

import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { MaterialModule } from './material.module';

import { TapasListComponent } from './tapas-list/tapas-list.component';
import { TapasDetailComponent } from './tapas-detail/tapas-detail.component';
import { TapasEditorComponent } from './tapas-editor/tapas-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    TapasListComponent,
    TapasDetailComponent,
    TapasEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    TapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
