import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/common/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients: Patient[];
  searchValue: string;
  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listPatients();
  }

  listPatients(){

  

    this.patientService.getPatientList().subscribe(
      data => {
        this.patients = data;
        console.log(data)
      }
    )
  }

}
