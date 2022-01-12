import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientService } from './services/patient.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayCardsComponent } from './components/display-cards/display-cards.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PatientsSearchFilterPipe } from './pipes/patients-search-filter.pipe';
import { Routes, RouterModule } from '@angular/router';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { AppointmentDetailsComponent } from './components/appointment-details/appointment-details.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { AppointmentDetailsService } from './services/appointment-details.service';
import { AuthenticationService } from './services/authentication.service';
import { InvoiceService } from './services/invoice.service';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthenticationGuard } from './guards/authentication.guard';
import { NotificationModule } from './notification.module';
import { NotificationService } from './services/notification.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'patient/:patientId/:appointmentId/:invoiceId', component : InvoiceDetailsComponent, canActivate: [AuthenticationGuard]},
  {path: 'patient/:patientId/:appointmentId', component: AppointmentDetailsComponent, canActivate: [AuthenticationGuard]},
  {path: 'patient/:id', component: PatientProfileComponent, canActivate: [AuthenticationGuard]},
  {path: 'patients', component: PatientsComponent, canActivate: [AuthenticationGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
]; 


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    NavBarComponent,
    DashboardComponent,
    DisplayCardsComponent,
    CalendarComponent,
    FooterComponent,
    PatientsSearchFilterPipe,
    PatientProfileComponent,
    PatientDetailsComponent,
    AppointmentDetailsComponent,
    InvoiceDetailsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    NotificationModule
  ],
  providers: [
    AuthenticationGuard,
    PatientService,
    AppointmentDetailsService,
    AuthenticationService,
    InvoiceService,
    UserService,
    NotificationService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
