import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/angular2-leaflet';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { ControlsComponent } from './components/controls/controls.component';
import { HomeComponent } from './components/home/home.component';
import { MapOverviewComponent } from './components/map-overview/map-overview.component';
import { SearchTapasComponent } from './components/search-tapas/search-tapas.component';
import { SurpriseMeComponent } from './components/surprise-me/surprise-me.component';
import { TapasCreatorComponent } from './components/tapas-creator/tapas-creator.component';
import { TapasDetailComponent } from './components/tapas-detail/tapas-detail.component';
import { TapasEditorComponent } from './components/tapas-editor/tapas-editor.component';
import { TapasListComponent } from './components/tapas-list/tapas-list.component';
import { MaterialModule } from './material.module';
import { OverviewComponent } from './overview/overview.component';
import { TapasService } from './services/tapas.service';


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
    MaterialModule,
    FormsModule,
    LeafletModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [TapasService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {}
