import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmemberComponent } from './addmember/addmember.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'',component:MainhomeComponent},
  {path:'reg',component:UserloginComponent},
  {path:'admin',component:AdminhomeComponent},
  {path:'login',component:LoginadminComponent},
  {path:'add',component:AddmemberComponent}
  
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
