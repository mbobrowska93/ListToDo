import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldComponent } from './field/field.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'field', component: FieldComponent},
  { path: 'list', component: ListComponent},
  { path: 'edit', component: EditComponent},
  { path: '', redirectTo: '/field', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FieldComponent, ListComponent, EditComponent];
