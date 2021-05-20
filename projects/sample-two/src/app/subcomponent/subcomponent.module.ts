import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcomponentRoutingModule } from './subcomponent-routing.module';
import { OneComponentComponent } from './one-component/one-component.component';
import { TwoComponentComponent } from './two-component/two-component.component';


@NgModule({
  declarations: [
    OneComponentComponent,
    TwoComponentComponent
  ],
  imports: [
    CommonModule,
    SubcomponentRoutingModule
  ],exports:[SubcomponentRoutingModule]
})
export class SubcomponentModule { }
