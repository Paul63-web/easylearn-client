import { Component, OnInit } from '@angular/core';
import { VerifyPaymentService } from '../services/verify-payment.service';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.css']
})
export class PayementComponent implements OnInit {
  public reference: Number;
  public title="";
  public message="";
  public email ="";
  public amount="";
  public onlineUser: string = "";

  constructor(
    private _verifyPayment: VerifyPaymentService
  ) { }
  
  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.amount=this.amount;
    this.email =this.amount;
    this.title = 'Payment successfull';
    let paymentObj = {
      amount: this.amount,
      email: this.email,
      onlineUser: this.onlineUser,
      reference: this.reference
    }
    console.log(paymentObj)
    this._verifyPayment.verifyPayment(paymentObj).subscribe(res=> {
      console.log(res);
    })
  }

  paymentCancel() {
    console.log('payment failed');
  }

  ngOnInit(): void {
    this.reference = Math.ceil(Math.random() * 10e13);
    console.log("i am getting it 1")
    this.onlineUser = localStorage.onlineUser;
  }

}
