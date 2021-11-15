import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/handlers/custom-validators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public registerForm!: FormGroup;
  public get userForm(): FormGroup { return this.registerForm.controls['user'] as FormGroup; }
  public get personForm(): FormGroup { return this.registerForm.controls['person'] as FormGroup; }
  public get hobbiesForm(): FormGroup { return this.registerForm.controls['hobbies'] as FormGroup; }

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this._fb.group({
      user: this._fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          CustomValidators.MinLowerCase(1),
          CustomValidators.MinUpperCase(1),
          CustomValidators.MinNumber(1)
        ]],
        confirmPassword: [null, [Validators.required]],
        firstname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
        lastname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
        birthdate: [null, [Validators.required]]
      },{validator: CustomValidators.CheckFields('password','confirmPassword')}),
      person: this._fb.group({
        pseudo: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(16)]],
        gender: [null, [Validators.required]],
        matchesGender: [null, null],
        size: [120, [Validators.min(120), Validators.max(220)]],
        weight: [40, [Validators.min(40), Validators.max(230)]],
        eyesColor: [null, [Validators.required]],
        hairColor: [null, [Validators.required]],
        bio: [null, [Validators.maxLength(255)]]
      }),
      hobbies: this._fb.group({
        travels : this._fb.array([]),
        parties : this._fb.array([]),
        movies : this._fb.array([]),
        mealsAndDrinks : this._fb.array([]),
        sparetimes : this._fb.array([]),
      })
    });
  }

  public onSubmit() {
    console.log(this.registerForm);
  }

}
