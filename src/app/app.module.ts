import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { ErrorComponent } from './error/error.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    FormComponent,
    ErrorComponent,
    AsidebarComponent,
    ChatComponent,
    ListstudentComponent,
    NgxSpinnerModule
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
