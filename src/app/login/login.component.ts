import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name: string="";

  constructor(private router: Router){}
        
  ngOnInit() {
  }
  log_page(username:string)
  {
    if(username!="")
    {
       this.router.navigate(['/shopping/', username])
    }
    else
    {
     alert("Enter Username and password!");
    }
}
}