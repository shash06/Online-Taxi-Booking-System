import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router'
import { appRoutes } from "./route";
import { AuthInterceptor } from "./auth/auth.interceptor";


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';
import { TaxisComponent } from './taxis/taxis.component';
import { TaxiComponent } from './taxis/taxi/taxi.component';
import { TaxiListComponent } from './taxis/taxi-list/taxi-list.component';
import { TaxiService } from './shared/taxi.service';

import { UserService } from './shared/user.service';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EmployeerostersComponent } from './employeerosters/employeerosters.component';
import { EmployeerosterComponent } from './employeerosters/employeeroster/employeeroster.component';
import { EmployeerosterListComponent } from './employeerosters/employeeroster-list/employeeroster-list.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CustomerPanelComponent } from './customer-panel/customer-panel.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { BookingComponent } from './bookings/booking/booking.component'
import { BookingsComponent } from './bookings/bookings.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    TaxisComponent,
    TaxiComponent,
    TaxiListComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    EmployeerostersComponent,
    EmployeerosterComponent,
    EmployeerosterListComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerListComponent,
    CommentsComponent,
    CommentComponent,
    CommentListComponent,
    CustomerPanelComponent,
    EmployeePanelComponent,
    BookingComponent,
    BookingsComponent,
    BookingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService,TaxiService,UserService,AuthGuard,
  ,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
