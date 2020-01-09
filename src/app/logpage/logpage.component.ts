import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-logpage',
  templateUrl: './logpage.component.html',
  styleUrls: ['./logpage.component.css']
})
export class LogpageComponent implements OnInit {
    param1: string = "Guest";
    public username: string = "Guest User";
    constructor(private route: ActivatedRoute) {
        this.param1 = this.route.snapshot.params.username; 
    }
    
    status: boolean = false;
    ngOnInit() {
      this.username = this.param1;
      const firstname: string = this.route.snapshot.queryParamMap.get('username');
        if (this.username) {
          $('.username').html(this.username);
        }
    }
    public open(event, item)
    {
      this.status = !this.status;
    }
}
