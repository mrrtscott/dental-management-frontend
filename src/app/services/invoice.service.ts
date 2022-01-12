import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../common/invoice';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl = 'http://localhost:8080/invoice';

  constructor(private httpClient: HttpClient) { }

  getInvoice(theInvoiceId: number){
    const invoiceUrl = `${this.baseUrl}/${theInvoiceId}`;
    return this.httpClient.get<GetResponse>(invoiceUrl).pipe(
      map(response => response.dataOutput.invoice)
      )
  }




}

interface GetResponse{
  dataOutput: {
    invoice: Invoice[];
  }
}
