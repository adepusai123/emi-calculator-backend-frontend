import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MakeRequestService } from '../make-request.service';
@Component({
  selector: 'app-emi-table',
  templateUrl: './emi-table.component.html',
  styleUrls: ['./emi-table.component.css']
})
export class EmiTableComponent implements OnInit {
  emiForm: FormGroup;
  submitted = false;
  table=[];emi_amount=0;
  constructor(private formBuilder:FormBuilder, private http:MakeRequestService) { }
  ngOnInit() {
    this.emiForm = this.formBuilder.group({
      pv: ['', Validators.required],
      rate: ['', Validators.required],
      nper: ['', [Validators.required]],
    });
  }
  get f() { return this.emiForm.controls; }
  getTable(){
    const { value, valid } = this.emiForm;
    this.submitted = true;
    if(valid && this.submitted){
      this.http.get(`emi?rate=${value.rate}&pv=${value.pv}&nper=${value.nper}`,{}).subscribe(data=>{
        this.table = data.table;
        this.emi_amount = data.emi
      })
    } 
  }
}
