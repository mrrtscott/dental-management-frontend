import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../common/patient';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  

  private baseUrl = 'http://localhost:8080/patient';

  constructor(private httpClient: HttpClient) { }

  getPatientList(): Observable<Patient[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.dataOutput.patients)
    )
  }


  getPatient(thePatientId: number): Observable<Patient[]> {
    const patientUrl = `${this.baseUrl}/${thePatientId}`;

    return this.httpClient.get<GetResponse>(patientUrl).pipe(
      map(response => response.dataOutput.patients)
    )
    
  }



}

interface GetResponse{
  dataOutput: {
    patients: Patient[];
  }
}


