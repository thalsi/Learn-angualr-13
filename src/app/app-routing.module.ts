import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentTableComponent } from './content-table/content-table.component';

const routes: Routes = [
  {
    path:'',
    component:ContentTableComponent
  }
  ,{
    path:'template-synatx',
    loadChildren:()=> import ('./m-6-template-syntax/m-6-template-syntax.module').then(m=> m.M6TemplateSyntaxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
