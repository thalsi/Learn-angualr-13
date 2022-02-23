import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  propertyName='propertyName';
  Interpolation='hi string interpulation';
  caption: string = "Click Me!";
  script ='<script>alert("You are hacked")</script>'

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
