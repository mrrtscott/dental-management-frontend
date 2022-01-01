import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address } from 'src/app/common/address';
import { Appointment } from 'src/app/common/appointment';
import { EmergencyContact } from 'src/app/common/emergency-contact';
import { Patient } from 'src/app/common/patient';
import { Phone } from 'src/app/common/phone';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient: Patient[];
  patientPhones: Phone[];
  patientAddress: Address[];
  patientEmergencyContact: EmergencyContact[];
  patientAppointment: Appointment[];

  


  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.patient = [];
    this.patientPhones = [];
    this.patientEmergencyContact = [];
    this.patientAppointment = [];
    this.route.paramMap.subscribe(() =>{
      this.handlePatientDetails();

    })
    

  

  }


  handlePatientDetails() {
    const thePatientId: number =+ this.route.snapshot.paramMap.get("id");
    this.patientService.getPatient(thePatientId).subscribe(
      data => {
        this.patient =  data;
        console.log(data)

        this.patientPhones = this.patient[0]?.phone
        console.log(this.patientPhones)

        this.patientAddress = this.patient[0]?.address
        console.log(this.patientAddress)

        this.patientEmergencyContact = this.patient[0].emergencyContact
        console.log(this.patientEmergencyContact)

        this.patientAppointment = this.patient[0].appointment
        console.log(this.patientAppointment)
        this.patientAppointment.sort(function compare(a, b){
          var DateA = new Date(a.requestedAppointmentDate);
          var DateB = new Date(b.requestedAppointmentDate);
          return  DateB.valueOf() - DateA.valueOf()

        });
        console.log(this.patientAppointment) 

      }
    )
    
  }

  

  

}
