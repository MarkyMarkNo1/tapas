import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { TapasService } from './services/tapas.service';
import { TapasDetailComponent } from './tapas-detail/tapas-detail.component';
import { TapasEditorComponent } from './tapas-editor/tapas-editor.component';
import { TapasListComponent } from './tapas-list/tapas-list.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    TapasListComponent,
    TapasDetailComponent,
    TapasEditorComponent,
    OverviewComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  providers: [TapasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
