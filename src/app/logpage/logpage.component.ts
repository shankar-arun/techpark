import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logpage',
  templateUrl: './logpage.component.html',
  styleUrls: ['./logpage.component.css']
})
export class LogpageComponent implements OnInit {

  constructor() { }
status: boolean = false;
  ngOnInit() {
  }
    
        public open(event, item)
        {
          this.status = !this.status;
          
        }
}
