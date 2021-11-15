import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    public static CheckFields(fieldName : string, fieldNameToCheck : string):ValidatorFn{
        return (control : AbstractControl):null|ValidationErrors=>{
            if(control.get(fieldName)?.value != control.get(fieldNameToCheck)?.value) return {
                checkFields:`not same value into ${fieldName} and ${fieldNameToCheck}`
            };
            return null;
        }
    }
    
    public static MinLowerCase(minimal : number):ValidatorFn{
        return (control : AbstractControl):null|ValidationErrors=>{
            let value : string|undefined = control.value;
            if(!value) return {error:'No value detected'};
            let i : number = 0;
            let found : boolean = false;
            while(i < value.length && !found){
                if(value[i].match(/[a-z]/)) found = true;
                i++;
            }
            if(!found) return {minLowerCase:'No lowercase detected'};
            return null;
        }
    }
    
    public static MinUpperCase(minimal : number):ValidatorFn{
        return (control : AbstractControl):null|ValidationErrors=>{
            let value : string = control.value;
            if(!value) return {error:'No value detected'};
            let i : number = 0;
            let found : boolean = false;
            while(i < value.length && !found){
                if(value[i].match(/[A-Z]/)) found = true;
                i++;
            }
            if(!found) return {minUpperCase:'No uppercase detected'};
            return null;
        }
    }
    
    public static MinNumber(minimal : number):ValidatorFn{
        return (control : AbstractControl):null|ValidationErrors=>{
            let value : string = control.value;
            if(!value) return {error:'No value detected'};
            let i : number = 0;
            let found : boolean = false;
            while(i < value.length && !found){
                if(value[i].match(/\d/)) found = true;
                i++;
            }
            if(!found) return {minNumber:'No number detected'};
            return null;
        }
    }
}
