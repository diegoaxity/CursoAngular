import { AbstractControl } from '@angular/forms';

export function ValidateMail(control: AbstractControl) {
  const selection = control.value;
  if (!selection) {
    return null;
  } else {
    const regex = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    if (regex.test(selection)) {
      return null;
    } else {
      return { incorrect: {} };
    }
  }
}
