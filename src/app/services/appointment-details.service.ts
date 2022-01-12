import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { Appointment } from '../common/appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDetailsService {

  //private baseUrl = 'http://localhost:8080/appointment';
  private baseUrl = environment.apiUrl + '/appointment'

  constructor(private httpClient: HttpClient) { }

  getAppointment(theAppointmentId: number){
    const appointmentUrl = `${this.baseUrl}/${theAppointmentId}`;

    return this.httpClient.get<GetResponse>(appointmentUrl).pipe(
      map(response => response.dataOutput.appointment)
    )

  }

  




}

interface GetResponse{
  dataOutput: {
    appointment: Appointment[];
  }
}
