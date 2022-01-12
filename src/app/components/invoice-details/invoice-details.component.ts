import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DentalCharge } from 'src/app/common/dental-charge';
import { Invoice } from 'src/app/common/invoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  invoice: Invoice[];
  dentalCharges: DentalCharge[];

  constructor(private invoiceService:InvoiceService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.invoice = [];
    this.dentalCharges = [];
    this.route.paramMap.subscribe(() =>{
      this.handleInvoiceDetails();
    }
    
    )


  }

  handleInvoiceDetails(){
    const theInvoiceId: number =+ this.route.snapshot.paramMap.get("invoiceId")
    this.invoiceService.getInvoice(theInvoiceId).subscribe(
      data => {
        this.invoice = data;
        console.log(this.invoice)

        this.dentalCharges = this.invoice[0]?.dentalCharge
        console.log(this.dentalCharges)


      }
    )

  }

}
