import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
import { Appointment } from '../common/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDetailsService {

  private baseUrl = 'http://localhost:8080/appointment';

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
