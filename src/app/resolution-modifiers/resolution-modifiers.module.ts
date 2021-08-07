import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostComponent } from './host/host.component';
import { HostChildComponent } from './host-child/host-child.component';
import { HostParentComponent } from './host-parent/host-parent.component';
import { OptionalComponent } from './optional/optional.component';
import { SelfComponent } from './self/self.component';
import { SelfNoDataComponent } from './self-no-data/self-no-data.component';
import { SkipSelfComponent } from './skip-self/skip-self.component';
import { ResolutionModifiersComponent } from './resolution-modifiers.component';



@NgModule({
  declarations: [
    HostComponent,
    HostChildComponent,
    HostParentComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    SkipSelfComponent,
    ResolutionModifiersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ResolutionModifiersComponent,
    HostComponent,
    HostChildComponent,
    HostParentComponent,
  ]
})
export class ResolutionModifiersModule { }
