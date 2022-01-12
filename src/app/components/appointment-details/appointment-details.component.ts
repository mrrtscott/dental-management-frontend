import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/common/appointment';
import { Patient } from 'src/app/common/patient';
import { AppointmentDetailsService } from 'src/app/services/appointment-details.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  appointment: Appointment[];
  patient:Patient[];
  thePatientId: number;

  constructor(private appointmentService: AppointmentDetailsService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.appointment = [];
    this.route.paramMap.subscribe(() =>{
      this.handleAppointmentDetails();

    })
  }


  handleAppointmentDetails() {
    const theAppointmentId: number =+ this.route.snapshot.paramMap.get("appointmentId")
    this.thePatientId =+ this.route.snapshot.paramMap.get("patientId");
    this.appointmentService.getAppointment(theAppointmentId).subscribe(
      data => {
        this.appointment = data;
        console.log(data)
      }
    )
    
    
  }

}
