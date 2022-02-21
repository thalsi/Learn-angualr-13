import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateSyntaxComponent } from './class/template-syntax/template-syntax.component';

const routes: Routes = [
  {
    path:'',
    component:TemplateSyntaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M6TemplateSyntaxRoutingModule { }
