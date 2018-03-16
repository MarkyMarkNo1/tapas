import { Routes } from '@angular/router';
import { TapasListComponent } from './components/tapas-list/tapas-list.component';
import { TapasDetailComponent } from './components/tapas-detail/tapas-detail.component';
import { TapasEditorComponent } from './components/tapas-editor/tapas-editor.component';
import { OverviewComponent } from './overview/overview.component';
import { TapasCreatorComponent } from './components/tapas-creator/tapas-creator.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: OverviewComponent,
    children: [
      { path: '', component: TapasListComponent }, // , pathMatch: 'full'
      { path: 'tapa/new', component: TapasCreatorComponent },
      { path: 'tapa/:id', component: TapasDetailComponent },
      { path: 'tapa/:id/edit', component: TapasEditorComponent }
    ]
  },
  // We have to put this route above the tapa detail route
  // so it's matched before `tapa/:id`, which `contact/new`
  // would be.

  // Wildcard route serves as fallback route and has to be
  // the last defined route in this list.
  { path: '**', redirectTo: '/' }
];
