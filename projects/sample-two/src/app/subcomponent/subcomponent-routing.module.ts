import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponentComponent } from './one-component/one-component.component';
import { SubcomponentComponent } from './subcomponent.component';
import { TwoComponentComponent } from './two-component/two-component.component';

const routes: Routes = [
  { path: '', component: SubcomponentComponent, pathMatch: 'full'},
  {
    path:"one",component:OneComponentComponent
  },{
    path:"two",component:TwoComponentComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcomponentRoutingModule { }
