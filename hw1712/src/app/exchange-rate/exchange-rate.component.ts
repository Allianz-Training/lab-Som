import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  form:FormGroup
  convertMoney:number =0;
  constructor(private httpClient:HttpClient,private fb:FormBuilder) {
    this.form=this.fb.group({
      base:['',Validators.required],
      currency:['',Validators.required],
      moneyBase:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  getFromBase(){
    const base=(this.form.get('base').value).toUpperCase();
    const currency=(this.form.get('currency').value).toUpperCase();
    const moneyBase=this.form.get('moneyBase').value;

    console.log(base);
    console.log(moneyBase);
    console.log(currency);
    
    this.httpClient.get('https://api.exchangeratesapi.io/latest',{params:{base,currency}})
    .subscribe(result=>{
      console.log(result['rates'][currency]*moneyBase)
      this.convertMoney=result['rates'][currency]*moneyBase;
    })
  }


}
