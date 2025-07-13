import { AbstractControl, ValidationErrors } from "@angular/forms";

export default class HelperValidators {

    static multipleSpaces(control: AbstractControl): ValidationErrors | null {
        const value = control.value || '';
        return /\s{2,}/.test(value) ? { multipleSpaces: true } : null;
    }

    static onlyLetters(control: AbstractControl): ValidationErrors | null {
        const value = control.value || '';
        return /^[A-Za-zÀ-ÿ\s]+$/.test(value) ? null : { onlyLetters: true };
    }
}