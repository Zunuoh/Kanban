import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <!-- interpolation: only works with strings-->
    <h2 [class]="successClass">
      Welcome {{name}}
    </h2>
    <!-- {{"Welcome " + name}} -->

    <!-- property binding -->
    <input [id] = "myId" type="text" value="Vishwas">
    <input [disabled] = "isDisabled" [id] = "myId" type="text" value="Vishwas">
    <h2 [class.text-danger]="hasError">Codevolutionmmmmmmm</h2>
    <h2 [ngClass]="messageClasses">Codevolution</h2>

    <!-- style binding -->
    <h2 [style.color]="'orange'">Style binding</h2>
    <h2 [style.color]="hasError ? 'red' : 'green' ">Style binding</h2>
    <h2 [style.color]="highlightColor">Style binding</h2>
    <h2 [ngStyle]="titleStyles">Style binding 3</h2>

    <!-- event binding -->
    <button (click)="onClick()">Greet</button>
    {{greeting}}
    <br/>

    <!-- Template reference variable -->
    <input #myInput type="text" >
    <button (click)="logMessage(myInput.value)">Log</button>
    <button (click)="logMes(myInput)">Log</button>
    <br/>

    <!-- Two way binding -->
    <input [(ngModel)] = "nameTwo" type="text">
    {{nameTwo}}


    `
    ,
  // styleUrls: ['./test.component.css']
  styles: [
    `
      .text-success{
        color: green;
      }
      .text-danger{
        color: red;
      }
      .text-special{
        font-style: italic;
      }

    `
  ]
})
export class TestComponent {
public name = "Codevolution";
public myId = "testId";
public isDisabled = true;
public successClass = "text-success";
public hasError = true;
public isSpecial = true;
public messageClasses = {
  "text-success": !this.hasError,
  "text-danger": !this.hasError,
  "text-special": this.isSpecial
}

public highlightColor = "green";
public titleStyles = {
  color: "blue",
  fontStyle: "italic"
};


public greeting = "";
public nameTwo = "";

onClick(){
  // alert("Welcome")
  this.greeting = 'Welcome ' + this.name
}

logMessage(value : string){
  console.log(value)
}

logMes(value : any){
  console.log(value)
}




}
