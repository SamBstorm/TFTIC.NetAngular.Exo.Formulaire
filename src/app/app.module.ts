import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { HobbiesFormComponent } from './components/hobbies-form/hobbies-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HobbiesFormArrayComponent } from './components/hobbies-form-array/hobbies-form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    UserFormComponent,
    PersonFormComponent,
    HobbiesFormComponent,
    HobbiesFormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
