import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
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

const routes: Routes = [
  {path: 'patient/:patientId/:appointmentId/:invoiceId', component : InvoiceDetailsComponent},
  {path: 'patient/:patientId/:appointmentId', component: AppointmentDetailsComponent},
  {path: 'patient/:id', component: PatientProfileComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
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
    InvoiceDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
