import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  form:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.form=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      postalAddress:['',Validators.required],
      comment:['']
    })
  }

  ngOnInit(): void {
  }

  submit():void{
    alert(JSON.stringify(this.form.value));
    this.form.reset();
  }

}
