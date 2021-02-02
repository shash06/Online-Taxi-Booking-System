import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeerostersComponent } from './employeerosters/employeerosters.component';
import { EmployeerosterComponent } from './employeerosters/employeeroster/employeeroster.component';
import { EmployeerosterListComponent } from './employeerosters/employeeroster-list/employeeroster-list.component';
import { TaxisComponent } from './taxis/taxis.component';
import { TaxiComponent } from './taxis/taxi/taxi.component';
import { TaxiListComponent } from './taxis/taxi-list/taxi-list.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CustomerPanelComponent } from './customer-panel/customer-panel.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingComponent } from './bookings/booking/booking.component';
import { BookingListComponent } from './bookings/booking-list/booking-list.component';


export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    { path: 'forbidden', component: ForbiddenComponent, canActivate: [AuthGuard] },
    { path: 'employee', component: EmployeesComponent,children:[{path:'',component:EmployeeComponent}] },
    { path: 'employee-list', component: EmployeesComponent,children:[{path:'',component:EmployeeListComponent}] },
    { path: 'employeeroster', component: EmployeerostersComponent,children:[{path:'',component:EmployeerosterComponent}] },
    { path: 'employeeroster-list', component: EmployeerostersComponent,children:[{path:'',component:EmployeerosterListComponent}] },
    { path: 'taxi', component: TaxisComponent,children:[{path:'',component:TaxiComponent}] },
    { path: 'taxi-list', component: TaxisComponent,children:[{path:'',component:TaxiListComponent}] },
    { path: 'customer', component: CustomersComponent,children:[{path:'',component:CustomerComponent}] },
    { path: 'customer-list', component: CustomersComponent,children:[{path:'',component:CustomerListComponent}] },
    { path: 'comment', component: CommentsComponent,children:[{path:'',component:CommentComponent}] },
    { path: 'comment-list', component: CommentsComponent,children:[{path:'',component:CommentListComponent}] },
    { path: 'booking', component: BookingsComponent,children:[{path:'',component:BookingComponent}] },
    { path: 'booking-list', component: BookingsComponent,children:[{path:'',component:BookingListComponent}] },
    { path: 'adminPanel', component: AdminPanelComponent, canActivate: [AuthGuard] , data: { roles: ['Admin'] }},
    { path: 'customerPanel', component: CustomerPanelComponent, canActivate: [AuthGuard] , data: { roles: ['Customer'] }},
    { path: 'employeePanel', component: EmployeePanelComponent, canActivate: [AuthGuard] , data: { roles: ['Employee'] }},
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];