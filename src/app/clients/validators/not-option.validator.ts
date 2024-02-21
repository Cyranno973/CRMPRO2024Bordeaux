import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export  function NotOptionValidator(): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if(value === 'OPTION' ){
      return  {'notOption': true}
    }
    return null
  }
}
