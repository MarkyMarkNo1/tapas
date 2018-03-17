import { Routes } from '@angular/router';
import { TapasListComponent } from './components/tapas-list/tapas-list.component';
import { TapasDetailComponent } from './components/tapas-detail/tapas-detail.component';
import { TapasEditorComponent } from './components/tapas-editor/tapas-editor.component';
import { OverviewComponent } from './overview/overview.component';
import { TapasCreatorComponent } from './components/tapas-creator/tapas-creator.component';
import { MapOverviewComponent } from './components/map-overview/map-overview.component';
import { SurpriseMeComponent } from './components/surprise-me/surprise-me.component';
import { HomeComponent } from './components/home/home.component';
import { SearchTapasComponent } from './components/search-tapas/search-tapas.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: OverviewComponent,
    children: [
      { path: '', component: HomeComponent}, // , pathMatch: 'full'
      { path: 'tapa/new', component: TapasCreatorComponent },
      { path: 'tapa/list', component: TapasListComponent },
      { path: 'tapa/find', component: SearchTapasComponent },
      { path: 'map', component: MapOverviewComponent },
      { path: 'surpriseme', component: SurpriseMeComponent },
    ]
  },
  { path: 'tapa/:id', component: TapasDetailComponent },
  { path: 'tapa/:id/edit', component: TapasEditorComponent },
  // We have to put this route above the tapa detail route
  // so it's matched before `tapa/:id`, which `contact/new`
  // would be.

  // Wildcard route serves as fallback route and has to be
  // the last defined route in this list.
  { path: '**', redirectTo: '/' }
];
