import { Routes } from '@angular/router';
import { TapasListComponent } from './components/tapas-list/tapas-list.component';
import { TapasDetailComponent } from './components/tapas-detail/tapas-detail.component';
import { TapasEditorComponent } from './components/tapas-editor/tapas-editor.component';
import { OverviewComponent } from './overview/overview.component';

export const APP_ROUTES: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'tapa/:id', component: TapasDetailComponent },
  { path: 'tapa/:id/edit', component: TapasEditorComponent },
  // Wildcard route serves as fallback route and has to be
  // the last defined route in this list.
  { path: '**', redirectTo: '/' }
];

