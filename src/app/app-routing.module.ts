import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }   from './login/login.component';
import { HomepageComponent }   from './homepage/homepage.component';
import { LogpageComponent }   from './logpage/logpage.component';


const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: '', component: HomepageComponent },
{ path: 'shopping/:username', component: LogpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


