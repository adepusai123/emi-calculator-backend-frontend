import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MakeRequestService } from '../make-request.service';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {
  emiForm: FormGroup;
  submitted = false;
  emi_amount = 0;
  constructor(private formBuilder:FormBuilder, private http:MakeRequestService) { }
  ngOnInit() {
    this.emiForm = this.formBuilder.group({
      pv: ['', Validators.required],
      rate: ['', Validators.required],
      nper: ['', [Validators.required]],
    });
  }
  get f() { return this.emiForm.controls; }
  calculate(){
    const { value, valid } = this.emiForm;
    this.submitted = true;
    if(valid && this.submitted){
      this.http.post(`emi`,value).subscribe(data=> {this.emi_amount = data.emi})
    } 
  }
}