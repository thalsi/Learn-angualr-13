import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  propertyName='propertyName';
  Interpolation='hi string interpulation';
  public caption: string = "Click Me!";

  object={
    id:2,
    name:'thalseeh'
  };

  flag:boolean=false;

  constructor() { }

  ngOnInit(): void {

    setInterval(()=>{
      this.flag=!this.flag;
    },1000);
  }

  Method():string{
    return 'hello world'
  }

}
