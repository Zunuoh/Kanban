import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { VERSION } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name = 'Angular' + VERSION.major;
   currentDate;
   currentTime;
  constructor(public datepipe: DatePipe){
    this.currentTime = this.datepipe.transform((new Date), 'MM/dd/yyy h:mm:ss');
    this.currentDate = this.datepipe.transform((new Date), 'MM/dd/yyy h:mm:ss');
    
    // console.log("dateee", currentDateTime)

    setInterval(()=>{
      this.currentTime = this.datepipe.transform((new Date), 'h:mm:ss');
      this.currentDate = this.datepipe.transform((new Date), 'MM/dd/yyy');
  
    }, 100)
  }

}
