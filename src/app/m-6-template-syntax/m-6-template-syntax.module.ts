import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M6TemplateSyntaxRoutingModule } from './m-6-template-syntax-routing.module';
import { TemplateSyntaxComponent } from './class/template-syntax/template-syntax.component';
import { TempateSyntaxPracticeComponent } from './practice/tempate-syntax-practice/tempate-syntax-practice.component';


@NgModule({
  declarations: [
    TemplateSyntaxComponent,
    TempateSyntaxPracticeComponent
  ],
  imports: [
    CommonModule,
    M6TemplateSyntaxRoutingModule
  ]
})
export class M6TemplateSyntaxModule { }
