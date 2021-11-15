import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hobbies-form',
  templateUrl: './hobbies-form.component.html',
  styleUrls: ['./hobbies-form.component.scss']
})
export class HobbiesFormComponent implements OnInit {

  @Input() hobbiesForm! : FormGroup

  public get MealsAndDrinks(): FormArray{
    if(!this.hobbiesForm) return new FormArray([]);
    return this.hobbiesForm.controls['mealsAndDrinks'] as FormArray
  }

  public get Movies(): FormArray{
    if(!this.hobbiesForm) return new FormArray([]);
    return this.hobbiesForm.controls['movies'] as FormArray
  }

  public get Travels(): FormArray{
    if(!this.hobbiesForm) return new FormArray([]);
    return this.hobbiesForm.controls['travels'] as FormArray
  }

  public get Sparetimes(): FormArray{
    if(!this.hobbiesForm) return new FormArray([]);
    return this.hobbiesForm.controls['sparetimes'] as FormArray
  }

  public get Parties(): FormArray{
    if(!this.hobbiesForm) return new FormArray([]);
    return this.hobbiesForm.controls['parties'] as FormArray
  }

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
