import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './form/form.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {
    path:'login',component:LoginComponent
  },
  {
    path:'layout',component:LayoutComponent , canActivate:[AuthGuard],
    children:[
      {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
      {path:'form',component:FormComponent,canActivate:[AuthGuard] },
      {path:'tabdata',component:ListstudentComponent,canActivate:[AuthGuard]}

    ]
  },
  {
    path:'**',component:ErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
