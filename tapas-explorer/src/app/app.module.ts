import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { TapasService } from './services/tapas.service';
import { TapasDetailComponent } from './components/tapas-detail/tapas-detail.component';
import { TapasEditorComponent } from './components/tapas-editor/tapas-editor.component';
import { TapasListComponent } from './components/tapas-list/tapas-list.component';
import { OverviewComponent } from './overview/overview.component';
import { TapasMaterialsModule } from './tapas-material.module';
import { TapasCreatorComponent } from './components/tapas-creator/tapas-creator.component';
import { ControlsComponent } from './components/controls/controls.component';
import { MapOverviewComponent } from './components/map-overview/map-overview.component';
import { SurpriseMeComponent } from './components/surprise-me/surprise-me.component';
import { HomeComponent } from './components/home/home.component';
import { SearchTapasComponent } from './components/search-tapas/search-tapas.component';

import { LeafletModule } from '@asymmetrik/angular2-leaflet';


@NgModule({
  declarations: [
    AppComponent,
    TapasListComponent,
    TapasDetailComponent,
    TapasEditorComponent,
    OverviewComponent,
    TapasCreatorComponent,
    ControlsComponent,
    MapOverviewComponent,
    SurpriseMeComponent,
    HomeComponent,
    SearchTapasComponent
  ],
  imports: [
    TapasMaterialsModule,
    LeafletModule.forRoot(),
    BrowserModule, RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [TapasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
