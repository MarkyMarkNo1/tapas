import { Routes } from '@angular/router';
import { TapasListComponent } from './tapas-list/tapas-list.component';
import { TapasDetailComponent } from './tapas-detail/tapas-detail.component';
import { TapasEditorComponent } from './tapas-editor/tapas-editor.component';

export const APP_ROUTES: Routes = [
  { path: '', component: TapasListComponent },
  { path: 'tapa/:id', component: TapasDetailComponent },
  { path: 'tapa/:id/edit', component: TapasEditorComponent },
  // Wildcard route serves as fallback route and has to be
  // the last defined route in this list.
  { path: '**', redirectTo: '/' }
];

