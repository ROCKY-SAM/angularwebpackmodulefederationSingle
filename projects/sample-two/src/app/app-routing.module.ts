import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';

const routes: Routes = [
  { path: '', component: SubcomponentComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
