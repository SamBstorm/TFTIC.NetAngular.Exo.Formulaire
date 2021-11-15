import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hobbies-form-array',
  templateUrl: './hobbies-form-array.component.html',
  styleUrls: ['./hobbies-form-array.component.scss']
})
export class HobbiesFormArrayComponent implements OnInit {

  @Input() formArray! : FormArray;
  @Input() title! : string;
  public newValue : string = "";

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  public addValue(){
    if(this.newValue.length <= 0) throw new Error("Need characters...");
    if(this.formArray.value && !this.formArray.value.includes(this.newValue))
    this.formArray.push(this._fb.control(this.newValue));
    this.newValue = "";
  }

}
